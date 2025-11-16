import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { SecuritySection } from '@/components/SecuritySection';
import { BusinessSection } from '@/components/BusinessSection';
import { Footer } from '@/components/Footer';
import { AppPromptModal } from '@/components/AppPromptModal';

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
      <AppPromptModal />
    </>
  );
};

export default Index;
