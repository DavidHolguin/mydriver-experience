import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { DownloadBar } from '@/components/DownloadBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { MapPin, Hourglass, Home } from 'lucide-react';

const images = [
  '/images/luciernagas1.jpg',
  '/images/luciernagas2.jpg',
  '/images/transporteCorporativo.webp'
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
              <Button size="lg" className="mt-4 bg-[#ab1818] hover:bg-[#ab1818]/90 text-white">Reservar mi viaje</Button>
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
            <a href="https://wa.me/5212461977827" target="_blank" rel="noopener noreferrer">
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
