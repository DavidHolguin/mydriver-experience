import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const images = [
  '/images/mydriverPortada.webp',
  '/images/ritualdeluciernagas.webp',
  '/images/carnavalVeracurz.webp',
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] md:min-h-[calc(100vh-7rem)] flex items-start justify-center overflow-hidden">
      {
        images.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImageIndex ? 1 : 0,
              filter: 'brightness(0.7)',
            }}
          />
        ))
      }
      <div className="relative z-10 text-center px-4 animate-fade-in max-w-2xl mx-auto pt-36 md:pt-48">
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
