import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { FleetSection } from '@/components/FleetSection';
import { ServicesSection } from '@/components/ServicesSection';
import { InvestorsHomeSection } from '@/components/InvestorsHomeSection';
import { SecuritySection } from '@/components/SecuritySection';
import { BusinessSection } from '@/components/BusinessSection';
import { EMBED_FORMS } from '@/config/constants';

const Index = () => {
  return (
    <Layout showFloatingCTA embedFormUrl={EMBED_FORMS.pasajero}>
      <Hero />
      <FleetSection />
      <ServicesSection />
      <InvestorsHomeSection />
      <SecuritySection />
      <BusinessSection />
    </Layout>
  );
};

export default Index;
