import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { Shield, Lock, Eye, FileCheck, CheckCircle2 } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Protección de Datos Personales",
    content: "Implementamos protocolos de cifrado y medidas de seguridad técnicas del más alto nivel para salvaguardar tu información contra accesos no autorizados.",
  },
  {
    icon: Lock,
    title: "Información Recopilada",
    content: "Recabamos únicamente datos necesarios para la prestación del servicio: nombre, teléfono, correo, ubicación GPS durante el viaje y datos de facturación.",
  },
  {
    icon: Eye,
    title: "Finalidad del Uso",
    content: "Tu información se utiliza exclusivamente para conectar pasajeros con conductores, garantizar la seguridad del trayecto y procesar transacciones.",
  },
  {
    icon: FileCheck,
    title: "Tus Derechos ARCO",
    content: "Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos en cualquier momento mediante solicitud a nuestro equipo de privacidad.",
  },
];

const PoliticasPrivacidad = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-brand-navy text-white pt-36 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-white/90 text-sm font-semibold tracking-wide">
            <Lock className="w-4 h-4 text-brand-red" /> Confidencialidad y Privacidad
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            En MyDriver tu privacidad y seguridad son una prioridad fundamental. Conoce cómo gestionamos, resguardamos y protegemos tus datos personales.
          </p>
          <p className="text-xs text-text-muted">
            Cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-surface-light rounded-card p-8 border border-border-subtle hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {section.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Document Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-card shadow-card border border-border-subtle p-8 md:p-14 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">
              1. Identidad y Domicilio del Responsable
            </h2>
            <p className="text-text-secondary leading-relaxed text-base">
              MyDriver Latam, en alianza con Auto Transportes Tepactepec, con domicilio de operaciones en los Estados Unidos Mexicanos, es el responsable del tratamiento legítimo, controlado e informado de sus datos personales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">
              2. Datos Personales Sometidos a Tratamiento
            </h2>
            <p className="text-text-secondary leading-relaxed text-base">
              Para cumplir con las finalidades descritas en este aviso, recabamos las siguientes categorías de datos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Datos de identificación y contacto (nombre completo, teléfono, correo)",
                "Datos de geolocalización en tiempo real durante viajes",
                "Datos de facturación fiscal y métodos de pago seleccionados",
                "Información vehicular y antecedentes (exclusivo para Socios Conductores)",
                "Registro de soporte, calificaciones y comentarios de servicio",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">
              3. Medidas de Seguridad y Transferencias de Datos
            </h2>
            <p className="text-text-secondary leading-relaxed text-base">
              No comercializamos ni alquilamos sus datos personales con terceros para fines publicitarios. Sus datos únicamente se comparten con los prestadores de servicio asignados para completar su viaje o con autoridades competentes cuando exista un requerimiento judicial fundado y motivado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">
              4. Contacto para Ejercicio de Derechos ARCO
            </h2>
            <p className="text-text-secondary leading-relaxed text-base">
              Para revocar su consentimiento o ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición, puede enviar una solicitud a nuestro oficial de privacidad a través de <strong className="text-brand-navy">contacto@mydriver.com</strong> o mediante nuestra línea oficial de atención.
            </p>
          </section>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default PoliticasPrivacidad;
