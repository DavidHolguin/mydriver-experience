import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { FileText, ShieldAlert, CheckCircle, Scale, Clock } from "lucide-react";

const TerminosCondiciones = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-brand-navy text-white pt-36 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-white/90 text-sm font-semibold tracking-wide">
            <Scale className="w-4 h-4 text-brand-red" /> Marco Legal y Contractual
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Conoce los derechos, obligaciones y directrices para el uso de la plataforma y servicios tecnológicos de MyDriver.
          </p>
          <p className="text-xs text-text-muted">
            Última actualización: Febrero 2025 • Aplica para toda la República Mexicana
          </p>
        </div>
      </section>

      {/* Main Content Document */}
      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto bg-white rounded-card shadow-card border border-border-subtle p-8 md:p-14 space-y-10">
          
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Introducción y Aceptación de los Términos
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed text-base pl-13">
              Al descargar, registrarse o utilizar cualquiera de las aplicaciones móviles, portal web o servicios tecnológicos de MyDriver Latam ("MyDriver"), usted acepta expresamente quedar sujeto a los presentes Términos y Condiciones Generales. Si no está de acuerdo con alguno de los términos, le solicitamos abstenerse de utilizar la plataforma.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Naturaleza de los Servicios
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed text-base pl-13">
              MyDriver opera como una plataforma tecnológica digital intermediaria que facilita el enlace entre usuarios particulares ("Pasajeros" o "Clientes") y prestadores independientes de servicios de movilidad, logística y carga ("Socios Conductores", "Repartidores" o "Empresas de Flotilla"). MyDriver no presta de forma directa servicios de transporte público, actuando conforme a la legislación aplicable en materia de intermediación electrónica y comercio digital.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Obligaciones y Responsabilidades del Usuario
              </h2>
            </div>
            <div className="pl-13 space-y-3 text-text-secondary text-base">
              <p>Cada usuario que interactúa con la plataforma se compromete a:</p>
              <ul className="space-y-2.5">
                {[
                  "Proporcionar datos de contacto, identidad y documentación verídicos y vigentes.",
                  "Mantener bajo resguardo confidencial las credenciales de acceso a su cuenta.",
                  "Hacer uso adecuado y respetuoso de los vehículos y la integridad de los conductores.",
                  "Acatar las leyes y reglamentos viales vigentes en su localidad.",
                  "No utilizar el servicio para transporte de sustancias u objetos prohibidos por ley.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Tarifas, Pagos y Políticas de Cancelación
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed text-base pl-13">
              Las tarifas estimadas o convenidas se determinan de manera transparente antes de confirmar cada servicio. Los usuarios y conductores tienen derecho a acordar o rechazar solicitudes bajo los parámetros de libertad de elección de la plataforma. Las cancelaciones injustificadas reiteradas podrán ser sujetas a penalizaciones o revisión del estatus de la cuenta de usuario.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-lg">
                5
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Seguridad y Monitoreo
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed text-base pl-13">
              Por seguridad de ambas partes, todos los viajes disponen de rastreo satelital GPS en tiempo real, validación de identidad y botones de asistencia inmediata. MyDriver colabora con las autoridades competentes en estricto apego a las disposiciones legales para esclarecer cualquier incidente durante el trayecto.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-lg">
                6
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Modificaciones a los Términos
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed text-base pl-13">
              MyDriver se reserva la facultad de actualizar estos términos cuando así lo requieran las mejoras del servicio o reformas normativas. Las modificaciones entrarán en vigencia a partir de su publicación en el sitio web y aplicaciones oficiales.
            </p>
          </section>

        </div>
      </SectionContainer>
    </Layout>
  );
};

export default TerminosCondiciones;
