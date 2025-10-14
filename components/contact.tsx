"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message with form data
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.

Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Redirect to WhatsApp
    window.open(`https://wa.me/5583991561396?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-balance">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vamos transformar seu espaço em um ambiente inteligente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-effect p-8 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="bg-background/50 border-primary/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="bg-background/50 border-primary/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  className="bg-background/50 border-primary/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  className="bg-background/50 border-primary/30"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-effect p-6 border-primary/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">E-mail</h3>
                  <a
                    href="mailto:maestriaauto@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    maestriaauto@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-6 border-primary/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefone</h3>
                  <a
                    href="https://wa.me/5583991561396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (83) 9 9156-1396
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-6 border-primary/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">
                    Rua Sebastião Donato, 25, Loja 118
                    <br />
                    São José - Campina Grande/PB
                    <br />
                    CEP 58.400-320
                  </p>
                </div>
              </div>
            </Card>

            <div className="glass-effect rounded-2xl p-6 border-primary/20">
              <h3 className="font-bold text-xl mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-primary/20">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">© 2025 Maestria Automação. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  )
}
