import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { SecuritySection } from '@/components/SecuritySection';
import { BusinessSection } from '@/components/BusinessSection';
import { EMBED_FORMS } from '@/config/constants';

const Index = () => {
  return (
    <Layout showFloatingCTA embedFormUrl={EMBED_FORMS.pasajero}>
      <Hero />
      <ServicesSection />
      <SecuritySection />
      <BusinessSection />
    </Layout>
  );
};

export default Index;
