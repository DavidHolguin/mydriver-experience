import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY_INFO } from "@/config/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contacto() {
  return (
    <Layout>
      <section className="bg-brand-navy text-white pt-32 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Si tienes alguna duda o sugerencia, no dudes en escribirnos.
          </p>
        </div>
      </section>

      <SectionContainer background="white">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface-light p-6 rounded-card border border-border-subtle flex items-start space-x-4">
              <Mail className="w-6 h-6 text-brand-red mt-1" />
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Correo Electrónico</h3>
                <p className="text-text-secondary">{COMPANY_INFO.email}</p>
              </div>
            </div>
            
            <div className="bg-surface-light p-6 rounded-card border border-border-subtle flex items-start space-x-4">
              <Phone className="w-6 h-6 text-brand-red mt-1" />
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Teléfono / WhatsApp</h3>
                <p className="text-text-secondary">{COMPANY_INFO.phone}</p>
              </div>
            </div>
            
            <div className="bg-surface-light p-6 rounded-card border border-border-subtle flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-brand-red mt-1" />
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Ubicación</h3>
                <p className="text-text-secondary">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="bg-surface-light p-6 rounded-card border border-border-subtle flex items-start space-x-4">
              <Clock className="w-6 h-6 text-brand-red mt-1" />
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Horario de Atención</h3>
                <p className="text-text-secondary">Lunes a Viernes<br/>9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-card shadow-card border border-border-subtle">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-navy">Nombre</label>
                    <Input id="name" placeholder="Tu nombre" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-navy">Correo Electrónico</label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-brand-navy">Asunto</label>
                  <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-navy">Mensaje</label>
                  <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} className="rounded-xl" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-brand-red hover:bg-red-700 text-white rounded-pill">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
}
