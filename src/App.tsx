
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SocioConductor from "./pages/SocioConductor";
import ConductorStandard from "./pages/ConductorStandard";
import SocioRepartidor from "./pages/SocioRepartidor";
import NegocioAliado from "./pages/NegocioAliado";
import MyDriverCargo from "./pages/MyDriverCargo";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import SantuarioLuciernagas from "./pages/SantuarioLuciernagas";
import CarnavalVeracruz from "./pages/CarnavalVeracruz";
import SocioFlotilla from "./pages/SocioFlotilla";
import { Descargas } from "./pages/Descargas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/socio-conductor" element={<SocioConductor />} />
          <Route path="/conductor-standard" element={<ConductorStandard />} />
          <Route path="/socio-repartidor" element={<SocioRepartidor />} />
          <Route path="/negocio-aliado" element={<NegocioAliado />} />
          <Route path="/mydriver-cargo" element={<MyDriverCargo />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/politicas" element={<PoliticasPrivacidad />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/santuario-luciernagas" element={<SantuarioLuciernagas />} />
          <Route path="/socio-flotilla" element={<SocioFlotilla />} />
          <Route path="/carnaval-veracruz" element={<CarnavalVeracruz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
