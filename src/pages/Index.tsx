
import { useState } from 'react';
import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Hero } from '@/components/Hero';
import { ServiceModes } from '@/components/ServiceModes';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BusinessSection } from '@/components/BusinessSection';
import { DownloadBar } from '@/components/DownloadBar';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <Hero />
      <ServiceModes />
      <WhyChooseUs />
      <BusinessSection />
      <Footer />
      <DownloadBar />
    </>
  );
};

export default Index;
