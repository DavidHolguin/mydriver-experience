import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { ExperienciasSection } from '@/components/ExperienciasSection';
import { SecuritySection } from '@/components/SecuritySection';
import { BusinessSection } from '@/components/BusinessSection';
import { Footer } from '@/components/Footer';
import { LeadSection } from '@/components/LeadSection';


const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Hero />
      <ServicesSection />
      <ExperienciasSection />
      <SecuritySection />
      <BusinessSection />
      <LeadSection
        vertical="usuario_pasajero"
        titulo="¿Necesitas un viaje?"
        descripcion="Déjanos tus datos y coordinamos tu servicio: ciudad, día y a dónde vas."
        ctaTexto="Solicitar mi viaje"
        etiquetaMensaje="¿A dónde quieres ir?"
      />
      <Footer />

    </>
  );
};

export default Index;
