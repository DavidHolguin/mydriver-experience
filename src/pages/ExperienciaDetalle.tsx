import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock, Bus, Sparkles, ArrowLeft, Info } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { experiencias, SALIDA, waExperiencias, waExperienciasGeneral } from '@/data/experiencias';
import NotFound from '@/pages/NotFound';

const faqs = [
  {
    q: '¿Qué incluye el servicio?',
    a: 'El transporte redondo desde Puebla en van o bus turístico con operador certificado, la coordinación de la experiencia y el tiempo de espera en el destino. No incluye accesos, alimentos, hospedaje ni propinas.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El precio depende del destino, la fecha y el número de personas. Envíanos esos tres datos por WhatsApp y te mandamos la cotización de la unidad completa o por persona.',
  },
  {
    q: '¿De dónde salen y a qué hora?',
    a: 'La salida es desde Puebla y el punto y la hora se acuerdan con tu grupo. En destinos lejanos salimos de madrugada para aprovechar el día completo.',
  },
  {
    q: '¿Puedo pedir un destino que no está en la lista?',
    a: 'Sí. MyDriver Experiencias arma salidas a la medida: dinos a dónde quieres ir, cuántas personas son y en qué fecha.',
  },
  {
    q: '¿Cuánta gente cabe?',
    a: 'Depende de la unidad que se asigne para tu salida. Trabajamos grupos pequeños y grupos completos; te decimos la capacidad exacta al cotizar.',
  },
];

const ExperienciaDetalle = () => {
  const { slug } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const experiencia = experiencias.find((e) => e.slug === slug);

  if (!experiencia) {
    return <NotFound />;
  }

  const otras = experiencias.filter((e) => e.slug !== experiencia.slug).slice(0, 3);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-16 bg-white text-gray-800">
        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${experiencia.tono} text-white`}>
          <div className="container mx-auto px-4 py-16 md:py-24">
            <Link to="/experiencias" className="inline-flex items-center gap-2 text-white/85 hover:text-white mb-8 text-sm">
              <ArrowLeft className="w-4 h-4" /> MyDriver Experiencias
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="text-6xl mb-4">{experiencia.emoji}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{experiencia.nombre}</h1>
              <p className="text-lg md:text-xl text-white/90">{experiencia.concepto}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button size="lg" variant="secondary" className="bg-white text-[#ab1818] hover:bg-gray-100 gap-2" asChild>
                  <a href={waExperiencias(experiencia.nombre)} target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="w-5 h-5" /> Cotizar esta salida
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/temporada">Ver temporada</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Datos rápidos */}
        <section className="bg-gray-50 border-b py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <CalendarDays className="w-6 h-6 text-[#ab1818] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Época ideal</p>
                <p className="font-semibold">{experiencia.epoca}</p>
              </div>
              <div>
                <MapPin className="w-6 h-6 text-[#ab1818] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Destino</p>
                <p className="font-semibold">{experiencia.destino}</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-[#ab1818] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Duración</p>
                <p className="font-semibold">1 día</p>
              </div>
              <div>
                <Bus className="w-6 h-6 text-[#ab1818] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Salida</p>
                <p className="font-semibold">{SALIDA}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">La experiencia</h2>
            <p className="text-lg text-gray-700 mb-10">{experiencia.resumen}</p>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ab1818]" /> Lo que no te puedes perder
            </h3>
            <ul className="space-y-3 mb-12">
              {experiencia.imperdibles.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#ab1818] flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border-2 border-[#ab1818]/15 bg-gray-50 p-6 flex gap-4">
              <Info className="w-6 h-6 text-[#ab1818] flex-shrink-0" />
              <p className="text-gray-700">
                Todas las salidas de <strong>MyDriver Experiencias</strong> se cotizan según el
                destino, la fecha y el número de personas. Escríbenos por WhatsApp y te armamos el
                itinerario y el precio de tu grupo.
              </p>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-base">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Otras experiencias */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Otras experiencias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otras.map((o) => (
                <Link
                  key={o.slug}
                  to={`/experiencias/${o.slug}`}
                  className="rounded-2xl border p-6 hover:border-[#ab1818] hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-2">{o.emoji}</div>
                  <h3 className="font-bold mb-1">{o.nombre}</h3>
                  <p className="text-sm text-gray-500">{o.epoca}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-white" style={{ backgroundColor: '#ab1818' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserva tu salida a {experiencia.nombre}</h2>
            <p className="text-lg text-white/90 mb-8">
              Dinos la fecha y cuántas personas van: te confirmamos disponibilidad el mismo día.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#ab1818] hover:bg-gray-100 text-lg px-8 py-6 gap-2"
              asChild
            >
              <a href={waExperienciasGeneral} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="w-5 h-5" /> Escríbenos por WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ExperienciaDetalle;
