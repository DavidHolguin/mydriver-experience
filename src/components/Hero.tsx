
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-start justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-bottom md:bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://monkeytwomonkey.com/wp-content/uploads/2025/02/1-3-1.webp)',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 text-center px-4 animate-fade-in max-w-2xl mx-auto pt-32 md:pt-48">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Muévete por tu ciudad con MyDriver
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          La app donde recibes más y viajas mejor. Únete a la revolución del transporte privado.
        </p>
        <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
          Descarga MyDriver
        </Button>
      </div>
    </div>
  );
};
