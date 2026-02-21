// Service Formspree pour gérer les envois de formulaires
const FORMPREE_ENDPOINT = "https://formspree.io/f/meoykwvo";

// Fonction utilitaire pour gérer les réponses Formspree
const handleFormspreeResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Erreur Formspree! status: ${response.status}`
    );
  }
  return response.json();
};

// Service pour les réservations
export const formspreeService = {
  // Envoyer une réservation
  sendReservation: async (data) => {
    const formData = new FormData();

    // Ajouter tous les champs de la réservation
    formData.append("nom", data.nom || "");
    formData.append("email", data.email || "");
    formData.append(
      "telephone",
      `${data.indicatifPays || "+33"} ${data.telephone || ""}`
    );
    formData.append("date", data.date || "");
    formData.append("heure", data.heure || "");
    formData.append("adresse_depart", data.adresseDepart || "");
    formData.append("adresse_arrivee", data.adresseArrivee || "");
    formData.append("nombre_bagages", data.nombreBagages || "");
    formData.append("nombre_passagers", data.nombrePassagers || "");
    formData.append("vehicule", data.vehicule || "");
    formData.append("commentaires", data.commentaires || "");

    // Ajouter un sujet pour identifier le type de demande
    formData.append("_subject", "Nouvelle réservation - Taxi Cagnes-sur-Mer");
    formData.append("_replyto", data.email || "");
    formData.append(
      "_next",
      typeof window !== "undefined" ? window.location.origin + "/reservation?success=true" : ""
    );

    const response = await fetch(FORMPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });

    return handleFormspreeResponse(response);
  },
};
