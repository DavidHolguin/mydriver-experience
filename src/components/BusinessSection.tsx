import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { WHATSAPP_LINKS } from '@/config/constants';
import { trackButtonClick } from '@/lib/gtmEvents';

export const BusinessSection = () => {
  const handleContactClick = () => {
    trackButtonClick('business_contact_whatsapp');
  };

  return (
    <SectionContainer id="corporativo" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/transporteCorporativo.webp"
            alt="Transporte Corporativo"
            className="w-full h-auto rounded-[24px] shadow-2xl object-cover aspect-[4/3] lg:aspect-auto lg:h-[600px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0F1E2A]/5 text-[#0F1E2A] font-medium text-sm mb-6">
            Empresas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F1E2A] mb-6 leading-tight">
            Un nuevo concepto del transporte corporativo
          </h2>
          <p className="text-lg text-[#64748B] mb-8">
            Optimiza los traslados de tu equipo de trabajo con nuestra plataforma corporativa. 
            Facturación simplificada, control de gastos y viajes seguros para todos tus colaboradores.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Control total de gastos en una plataforma",
              "Seguimiento en tiempo real de cada viaje",
              "Límites de horarios, precios y zonas"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-red/10 text-brand-red">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <span className="ml-4 text-[#0F1E2A] font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_LINKS.empresas}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleContactClick}
            className="bg-[#0F1E2A] text-white hover:bg-[#0F1E2A]/90 font-bold rounded-full px-8 py-4 transition-colors inline-flex items-center"
          >
            Descubre MyDriver Empresas →
          </a>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
