import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const BusinessSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un nuevo concepto del transporte corporativo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tus empleados o clientes se moverán de la manera más rápida y segura. 
              Controla desde una sola plataforma todos tus gastos, sigue todos los viajes 
              en tiempo real y establece límites de horarios, precios y zonas.
            </p>
            <Button asChild className="group bg-[#ab1818] hover:bg-[#ab1818]/90 text-white">
              <a href="https://wa.me/5212461977827?text=Hola,%20me%20gustaría%20tener%20más%20información%20sobre%20MyDriver%20para%20empresas." target="_blank" rel="noopener noreferrer">
                Descubre MyDriver para empresas
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="relative">
            <img 
              src="/images/transporteCorporativo.webp"
              alt="Transporte corporativo"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
