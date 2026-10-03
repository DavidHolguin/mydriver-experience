import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/config/constants";
import { Home, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-black text-brand-red/5 select-none -z-10">
          404
        </div>
        
        <div className="text-center z-10 space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy">
            ¡Ups! Página no encontrada
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">
            Parece que te perdiste en el camino. No te preocupes, te llevamos de vuelta a la ruta principal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white rounded-pill px-8">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Volver al inicio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-pill px-8 transition-colors">
              <a href={WHATSAPP_LINKS.soporte} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar soporte
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
