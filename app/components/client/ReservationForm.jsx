"use client";

import { AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { createReservation } from "../../lib/api";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "1",
    luggage: "0",
    vehicle: "classe-e",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fonction pour extraire l'indicatif pays du numéro de téléphone
  const extractCountryCode = (phone) => {
    if (!phone) {
      return { indicatifPays: "+33", telephone: "" };
    }

    // Nettoyer le numéro : enlever tous les espaces, tirets, points, parenthèses
    let cleaned = phone.replace(/[\s\-\.\(\)]/g, "");

    // Si le numéro commence par +, extraire l'indicatif
    if (cleaned.startsWith("+")) {
      // Regex pour capturer l'indicatif (+33, +1, +44, etc.) et le reste (uniquement des chiffres)
      const match = cleaned.match(/^(\+\d{1,4})(\d+)$/);
      if (match) {
        const indicatifPays = match[1];
        const telephone = match[2];
        
        // Vérifier que le numéro de téléphone contient entre 8 et 15 chiffres
        if (telephone.length >= 8 && telephone.length <= 15) {
          console.log(`Numéro extrait: indicatif=${indicatifPays}, téléphone=${telephone}`);
          return {
            indicatifPays: indicatifPays,
            telephone: telephone,
          };
        } else {
          console.warn(`Numéro trop court/long: ${telephone.length} chiffres`);
        }
      } else {
        console.warn(`Regex ne correspond pas pour: ${cleaned}`);
      }
    }

    // Si le numéro commence par 00 (format international sans +)
    if (cleaned.startsWith("00")) {
      const match = cleaned.match(/^00(\d{1,4})(\d{8,15})$/);
      if (match) {
        return {
          indicatifPays: `+${match[1]}`,
          telephone: match[2],
        };
      }
    }

    // Si le numéro commence par 0 (format français), remplacer par +33
    if (cleaned.startsWith("0") && /^\d+$/.test(cleaned)) {
      const telephone = cleaned.substring(1);
      if (telephone.length >= 8 && telephone.length <= 15) {
        return { indicatifPays: "+33", telephone: telephone };
      }
    }

    // Si le numéro ne commence pas par + mais contient uniquement des chiffres
    if (/^\d+$/.test(cleaned)) {
      // Enlever le 0 initial si présent
      const telephone = cleaned.replace(/^0/, "");
      
      if (telephone.length >= 8 && telephone.length <= 15) {
        return { indicatifPays: "+33", telephone: telephone };
      }
    }

    // Dernière tentative : si le numéro contient +33 au début, l'enlever et utiliser le reste
    if (cleaned.startsWith("+33")) {
      const telephone = cleaned.substring(3);
      if (/^\d+$/.test(telephone) && telephone.length >= 8 && telephone.length <= 15) {
        return { indicatifPays: "+33", telephone: telephone };
      }
    }

    // Si rien ne fonctionne, essayer de nettoyer encore plus agressivement
    // Enlever tout sauf les chiffres et le +
    const veryCleaned = cleaned.replace(/[^\d+]/g, "");
    
    if (veryCleaned.startsWith("+")) {
      const match = veryCleaned.match(/^(\+\d{1,4})(\d{8,15})$/);
      if (match) {
        return {
          indicatifPays: match[1],
          telephone: match[2],
        };
      }
    }

    // Si vraiment rien ne fonctionne, retourner une erreur (sera gérée par la validation)
    console.error(`Impossible d'extraire le numéro de téléphone de: "${phone}" (nettoyé: "${cleaned}")`);
    return { indicatifPays: "+33", telephone: cleaned.replace(/[^\d]/g, "").substring(0, 15) };
  };

  // Fonction pour envoyer à Formspree (en parallèle, ne bloque pas le flux)
  const sendToFormspree = async (reservationData) => {
    try {
      // Préparer les données pour Formspree
      const formspreeData = {
        name: reservationData.nom,
        phone: `${reservationData.indicatifPays} ${reservationData.telephone}`,
        email: reservationData.email || "Non renseigné",
        date: reservationData.date,
        time: reservationData.heure,
        from: reservationData.adresseDepart,
        to: reservationData.adresseArrivee,
        passengers: reservationData.nombrePassagers,
        luggage: reservationData.nombreBagages,
        vehicle: reservationData.vehicule,
        notes: reservationData.commentaires || "Aucune note",
        _subject: `Nouvelle réservation - ${reservationData.nom}`,
        _replyto: reservationData.email || undefined,
      };

      console.log("Envoi à Formspree:", formspreeData);

      const response = await fetch("https://formspree.io/f/meoykwvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formspreeData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`Formspree error: ${response.status} - ${JSON.stringify(responseData)}`);
      }

      console.log("Email envoyé via Formspree avec succès:", responseData);
    } catch (err) {
      // Ne pas bloquer le flux si Formspree échoue
      console.error("Erreur Formspree (non bloquant):", err);
      // Log plus détaillé pour déboguer
      console.error("Détails de l'erreur Formspree:", {
        message: err.message,
        stack: err.stack,
        reservationData: reservationData,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Extraire l'indicatif pays et le téléphone
      const { indicatifPays, telephone } = extractCountryCode(formData.phone);

      // Validation côté client du numéro de téléphone
      if (!telephone || telephone.length < 8 || telephone.length > 15) {
        setError(
          "Le numéro de téléphone doit contenir entre 8 et 15 chiffres. Format attendu : +33 6 12 34 56 78"
        );
        setLoading(false);
        return;
      }

      // Vérifier que le téléphone ne contient que des chiffres
      if (!/^\d+$/.test(telephone)) {
        setError(
          "Le numéro de téléphone ne doit contenir que des chiffres (après l'indicatif pays)."
        );
        setLoading(false);
        return;
      }

      // Mapper le véhicule du format frontend vers le format backend
      const vehiculeMap = {
        glb: "GLB",
        "classe-v": "Classe V",
      };

      // Préparer les données pour l'API backend
      const reservationData = {
        nom: formData.name,
        indicatifPays: indicatifPays,
        telephone: telephone,
        email: formData.email || undefined, // Optionnel
        date: formData.date,
        heure: formData.time,
        adresseDepart: formData.from,
        adresseArrivee: formData.to,
        nombreBagages: formData.luggage.toString(),
        nombrePassagers: formData.passengers.toString(),
        vehicule: vehiculeMap[formData.vehicle] || formData.vehicle, // Mapper le véhicule
        commentaires: formData.notes || undefined, // Optionnel
      };

      // Log pour déboguer
      console.log("Données envoyées au backend:", reservationData);

      // Appeler l'API backend (code existant)
      const result = await createReservation(reservationData);

      // Envoyer aussi à Formspree en parallèle (sans bloquer)
      sendToFormspree(reservationData)
        .then(() => {
          console.log("Email envoyé via Formspree avec succès");
        })
        .catch((err) => {
          console.error("Erreur Formspree (non bloquant):", err);
        });

      if (result.result) {
        setSubmitted(true);
        // Réinitialiser le formulaire après 5 secondes
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            from: "",
            to: "",
            date: "",
            time: "",
            passengers: "1",
            luggage: "0",
            vehicle: "classe-e",
            notes: "",
          });
        }, 5000);
      }
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
      console.error("Erreur lors de la soumission:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12">
          <CheckCircle className="w-16 h-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold mb-2">Réservation Confirmée!</h3>
          <p className="text-muted-foreground text-center">
            Vous recevrez une confirmation par email. Notre équipe vous
            contactera sous 30 minutes.
          </p>
        </div>
      ) : (
        <>
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-destructive">{error}</p>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">
                Informations Personnelles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+33 6 63 57 65 34"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Email (optionnel)
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Journey Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Détails du Trajet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Départ
                  </label>
                  <Input
                    type="text"
                    placeholder="Point de départ"
                    required
                    value={formData.from}
                    onChange={(e) =>
                      setFormData({ ...formData, from: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Destination
                  </label>
                  <Input
                    type="text"
                    placeholder="Point d'arrivée"
                    required
                    value={formData.to}
                    onChange={(e) =>
                      setFormData({ ...formData, to: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <Input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Heure
                  </label>
                  <Input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Passengers & Vehicle */}
            <div>
              <h3 className="font-bold text-lg mb-4">Passagers et Véhicule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Passagers
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.passengers}
                    onChange={(e) =>
                      setFormData({ ...formData, passengers: e.target.value })
                    }
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} passager{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bagages
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.luggage}
                    onChange={(e) =>
                      setFormData({ ...formData, luggage: e.target.value })
                    }
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} bagage{n !== 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Véhicule
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.vehicle}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicle: e.target.value })
                    }
                  >
                    <option value="glb">GLB</option>
                    <option value="classe-v">Classe V</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Notes Supplémentaires
              </label>
              <textarea
                placeholder="Vos demandes spéciales..."
                className="w-full px-4 py-2 border border-border rounded-md"
                rows={4}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                "Envoi en cours..."
              ) : (
                <>
                  <span className="md:hidden">Confirmer</span>
                  <span className="hidden md:inline">
                    Confirmer la Réservation
                  </span>
                </>
              )}
            </Button>
          </form>
        </>
      )}
    </Card>
  );
}
