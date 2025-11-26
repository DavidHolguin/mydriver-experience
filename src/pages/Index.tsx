import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { SecuritySection } from '@/components/SecuritySection';
import { BusinessSection } from '@/components/BusinessSection';
import { Footer } from '@/components/Footer';


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
      <SecuritySection />
      <BusinessSection />
      <Footer />
      <iframe
        src="https://mydriverapp.lovable.app/embed/usuario_pasajero?pipeline=usuario_pasajero&stage=5ecedf8a-1c0a-48f2-82a1-6a2a54fc290b&position=bottom-center&primaryColor=b60000&theme=light&borderRadius=8&buttonSize=default"
        width="100%"
        height="100"
        style={{ border: 'none', borderRadius: '8px', position: 'fixed', bottom: '0px', zIndex: 1000 }}
        title="Usuario Pasajero Form"
      />

    </>
  );
};

export default Index;
