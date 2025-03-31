
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Missatge enviat!",
        description: "Ens posarem en contacte amb tu el més aviat possible.",
      })
      e.target.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Hi ha hagut un problema enviant el missatge. Si us plau, torna-ho a intentar.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="El teu nom"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correu electrònic</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="El teu correu"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telèfon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="El teu telèfon"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Assumpte</Label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="Assumpte del missatge"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Missatge</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="El teu missatge"
          className="min-h-[150px]"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full md:w-auto bg-secondary hover:bg-secondary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviant..." : "Enviar Missatge"}
      </Button>
    </form>
  )
}
