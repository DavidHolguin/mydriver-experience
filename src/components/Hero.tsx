import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { trackButtonClick } from '@/lib/gtmEvents';

const slides = [
  {
    image: '/images/heroSocioFlotilla.webp',
    title: 'Haz que tu coche trabaje por ti: Gana $10.000 mensuales SIN conducir',
    subtitle: 'Conviértete en Socio Flotilla MyDriver: nosotros certificamos chóferes, cuidamos tu auto y te garantizamos ingresos fijos.',
    buttonText: 'Quiero ser socio',
    buttonLink: '/socio-flotilla',
    isExternal: false,
  },
  {
    image: '/images/mydriverPortada.webp',
    title: 'Muévete por tu ciudad con MyDriver',
    subtitle: 'La app donde recibes más y viajas mejor. Únete a la revolución del transporte privado.',
    buttonText: 'Solicita tu viaje',
    buttonLink: 'https://wa.me/5212215590718?text=Hola,%20me%20gustaría%20tener%20más%20información%20sobre%20MyDriver.',
    isExternal: true,
  },
  {
    image: '/images/ritualdeluciernagas.webp',
    title: 'Vive la Magia en el Santuario de las Luciérnagas',
    subtitle: 'Te llevamos a una experiencia natural única e inolvidable.',
    buttonText: 'Descubrir más',
    buttonLink: '/santuario-luciernagas',
    isExternal: false,
  },
  {
    image: '/images/carnavalVeracurz.webp',
    title: 'Al Carnaval de Veracruz con MyDriver',
    subtitle: 'Disfruta de la fiesta más grande y alegre de Veracruz. Nosotros te llevamos.',
    buttonText: '¡Vamos!',
    buttonLink: '/carnaval-veracruz',
    isExternal: false,
  },
];

export const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="relative h-[70vh] md:min-h-[calc(100vh-7rem)] flex items-start justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: index === currentSlideIndex ? 1 : 0,
            filter: 'brightness(0.7)',
          }}
        />
      ))}
      <div className="relative z-10 text-center px-4 animate-fade-in max-w-2xl mx-auto pt-36 md:pt-48">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {currentSlide.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {currentSlide.subtitle}
        </p>
        <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" onClick={() => trackButtonClick(currentSlide.buttonText, 'hero_slider')}>
          {currentSlide.isExternal ? (
            <a href={currentSlide.buttonLink} target="_blank" rel="noopener noreferrer">
              {currentSlide.buttonText}
            </a>
          ) : (
            <Link to={currentSlide.buttonLink}>
              {currentSlide.buttonText}
            </Link>
          )}
        </Button>
      </div>
    </div>
  );
};
