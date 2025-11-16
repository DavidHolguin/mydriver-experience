import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { AppPromptModal } from '@/components/AppPromptModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { MapPin, Hourglass, Home } from 'lucide-react';

const images = [
  '/images/luciernagas1.jpg',
  '/images/luciernagas2.jpg',
  '/images/mydriverPortada.webp'
];

const SantuarioLuciernagas = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="pt-16 bg-gray-50 text-gray-800">
        {/* Video Header */}
                <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            src="/videos/video_generation_0.mp4"
          >
            Tu navegador no soporta el tag de video.
          </video>

          <motion.div 
            className="z-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Transporte al Santuario de las Luciérnagas</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Vive una experiencia mágica con la seguridad y comodidad de MyDriver.</p>
          </motion.div>
        </header>

        {/* Content Section */}
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">Un Espectáculo Natural Inolvidable</h2>
              <p className="mb-4 text-lg">
                Cada año, durante la temporada de lluvias (mediados de junio a mediados de agosto), el bosque de Nanacamilpa, Tlaxcala, se ilumina con millones de luciérnagas.
              </p>
              <p className="mb-4">
                En el Santuario de las Luciérnagas, estos insectos realizan su ritual de apareamiento, usando la luz de sus cuerpos para encontrar pareja y reproducirse. Tu acceso al santuario te permitirá vivir una experiencia memorable llena de luz, paz y conexión con la naturaleza.
              </p>
              <Button size="lg" className="mt-4 bg-green-500 hover:bg-green-600 text-white gap-2" asChild>
                <a href="https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20reservar%20un%20viaje%20al%20Santuario%20de%20las%20Luciérnagas." target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  Reservar mi viaje
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
                            <Carousel 
                className="w-full max-w-xl mx-auto"
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden rounded-2xl shadow-xl">
                                                <CardContent className="p-0 aspect-video">
                          <img src={src} alt={`Santuario de las Luciérnagas ${index + 1}`} className="w-full h-full object-cover" />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16" />
                <CarouselNext className="mr-16"/>
              </Carousel>
            </motion.div>
          </div>
        </main>

        {/* Bento Grid Section */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tu Aventura Mágica en 3 Simples Pasos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hemos diseñado una experiencia completa para que solo te preocupes por disfrutar.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Step 1 */}
              <motion.div
                className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1. Inicio de la Aventura</h3>
                <p className="text-gray-600">Te recogemos en tu ubicación. Relájate y disfruta del paisaje mientras te llevamos de forma segura y directa al Santuario.</p>
              </motion.div>

              {/* Main Image */}
              <motion.div
                className="lg:col-span-2 rounded-2xl shadow-lg overflow-hidden min-h-[300px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src="/images/ritualdeluciernagas.webp" alt="Ritual de las luciérnagas" className="w-full h-full object-cover" />
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Hourglass className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">2. Vive la Magia sin Prisas</h3>
                <p className="text-gray-600">Explora el santuario a tu propio ritmo. Te esperaremos el tiempo que necesites para que disfrutes del espectáculo de luces sin preocupaciones.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">3. Regreso Cómodo y Seguro</h3>
                <p className="text-gray-600">Al finalizar, te llevamos de vuelta a tu punto de partida o a donde nos indiques. Tu comodidad es nuestra prioridad.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
            {/* WhatsApp CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <p className="font-semibold text-lg hidden md:block">Reserva tu viaje ahora</p>
          <Button 
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold gap-2 w-full md:w-auto"
          >
            <a href="https://wa.me/5212461569161?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20transporte%20al%20Santuario%20de%20las%20Luciérnagas%20y%20quisiera%20más%20información." target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SantuarioLuciernagas;
