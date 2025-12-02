"use client"

import { useState } from "react"
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implémenter la soumission du formulaire
    console.log("Contact form submitted:", formData)
  }

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Formulaire de Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nom</label>
          <Input
            type="text"
            placeholder="Votre nom"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            placeholder="Votre message..."
            className="w-full px-4 py-2 border border-border rounded-md"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6"
        >
          Envoyer le Message
        </Button>
      </form>
    </Card>
  )
}

