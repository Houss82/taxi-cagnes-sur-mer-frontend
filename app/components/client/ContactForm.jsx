"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle } from "lucide-react"
import Card from "../ui/Card"
import Button from "../ui/Button"
import Input from "../ui/Input"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Envoyer à Formspree
      const response = await fetch("https://formspree.io/f/meoykwvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Contact - ${formData.subject}`,
          _replyto: formData.email,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message")
      }

      setSubmitted(true)
      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 5000)
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.")
      console.error("Erreur lors de la soumission:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Formulaire de Contact</h2>
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12">
          <CheckCircle className="w-16 h-16 text-accent mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Envoyé!</h3>
          <p className="text-muted-foreground text-center">
            Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nom</label>
              <Input
                type="text"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="votre@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sujet</label>
              <Input
                type="text"
                placeholder="Sujet de votre message"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Votre message..."
                className="w-full px-4 py-2 border border-border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer le Message"}
            </Button>
          </form>
        </>
      )}
    </Card>
  )
}

