import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { LeadSection } from '@/components/LeadSection';
import type { Vertical } from '@/lib/marca';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ServicePageProps {
  // Hero
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroWhatsappLink: string;
  heroBadge?: string;

  // Stats (optional)
  stats?: Array<{ value: string; label: string }>;

  // Benefits
  benefitsTitle: string;
  benefitsSubtitle?: string;
  benefits: Array<{ icon: React.ComponentType<any>; title: string; description: string }>;

  // How it works (optional)
  howItWorks?: Array<{ step: string; title: string; description: string }>;
  howItWorksTitle?: string;

  // Requirements (optional)
  requirements?: Array<{ 
    icon: React.ComponentType<any>; 
    text: string | React.ReactNode; 
    subtext?: string; 
    badge?: string; 
  }>;
  requirementsTitle?: string;

  // FAQ
  faqs: Array<{ question: string; answer: string }>;

  // Lead Section CRM (optional)
  leadSection?: {
    vertical: Vertical;
    titulo: string;
    descripcion?: string;
    ctaTexto?: string;
    requerimiento?: string;
    etiquetaMensaje?: string;
  };

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  ctaWhatsappLink: string;

  // Embed form (optional)
  embedFormUrl?: string;
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  heroCTA,
  heroWhatsappLink,
  heroBadge,
  stats,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  howItWorks,
  howItWorksTitle = "¿Cómo Funciona?",
  requirements,
  requirementsTitle = "Requisitos para Unirte",
  faqs,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaWhatsappLink,
  embedFormUrl,
  leadSection,
}) => {
  return (
    <Layout>
      {/* 1. Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {heroBadge && (
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-red/20 text-white font-medium text-sm backdrop-blur-sm border border-brand-red/30">
                {heroBadge}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight whitespace-pre-line">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {heroSubtitle}
            </p>
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white rounded-pill px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(heroWhatsappLink, "_blank")}
            >
              {heroCTA}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      {stats && stats.length > 0 && (
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-card py-8 px-6 -mt-16 mx-auto max-w-4xl rounded-card grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-brand-red mb-2">{stat.value}</span>
                <span className="text-sm md:text-base text-text-secondary font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* 3. Benefits */}
      <SectionContainer background="white">
        <SectionHeading title={benefitsTitle} subtitle={benefitsSubtitle} />
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(benefits.length, 4)} gap-8 mt-12`}>
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-card p-6 border border-surface-border hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{benefit.title}</h3>
              <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 4. How it Works */}
      {howItWorks && howItWorks.length > 0 && (
        <SectionContainer background="light">
          <SectionHeading title={howItWorksTitle} />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-border-subtle -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {howItWorks.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-brand-red/20 ring-4 ring-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* 5. Requirements */}
      {requirements && requirements.length > 0 && (
        <SectionContainer background="white">
          <SectionHeading title={requirementsTitle} />
          <div className="max-w-4xl mx-auto mt-12 bg-surface-light rounded-card p-8 md:p-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-border-subtle"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <req.icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-text-primary font-medium">{req.text}</span>
                      {req.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-red text-white shadow-sm">
                          {req.badge}
                        </span>
                      )}
                    </div>
                    {req.subtext && (
                      <p className="text-text-secondary text-xs mt-1.5 leading-relaxed">
                        {req.subtext}
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </SectionContainer>
      )}

      {/* Lead CRM Section */}
      {leadSection && (
        <LeadSection {...leadSection} />
      )}

      {/* 6. FAQ */}
      {faqs && faqs.length > 0 && (
        <SectionContainer background="light">
          <SectionHeading title="Preguntas Frecuentes" />
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full bg-white rounded-card shadow-sm border border-surface-border overflow-hidden">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-surface-border px-6">
                  <AccordionTrigger className="text-lg font-semibold text-text-primary hover:text-brand-red py-6 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionContainer>
      )}

      {/* 7. CTA */}
      <SectionContainer background="brand">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            {ctaSubtitle}
          </p>
          <Button
            size="lg"
            className="bg-white text-brand-red hover:bg-surface-light rounded-pill px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open(ctaWhatsappLink, "_blank")}
          >
            {ctaButtonText}
          </Button>
        </motion.div>
      </SectionContainer>

      {/* Embed Form */}
      {embedFormUrl && (
        <iframe
          src={embedFormUrl}
          width="100%"
          height="100"
          style={{ border: 'none', borderRadius: '8px', position: 'fixed', bottom: '0px', zIndex: 1000 }}
          title="Service Form"
        />
      )}
    </Layout>
  );
};

export default ServicePageTemplate;
