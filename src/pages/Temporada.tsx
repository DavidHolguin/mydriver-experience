import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, BellRing } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  experiencias,
  serviciosTemporada,
  waExperiencias,
  waExperienciasGeneral,
} from '@/data/experiencias';

/**
 * Apartado de temporada: los viajes que solo salen en una ventana del año.
 * Los dos servicios que ya existían (Luciérnagas y Carnaval) viven aquí; sus
 * URLs originales se conservan para no romper el posicionamiento que ya tienen.
 */
const destinosDeTemporada = experiencias.filter((e) => e.epoca !== 'Todo el año');

const Temporada = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-16 bg-white text-gray-800">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gray-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(171,24,24,0.65),_transparent_55%)]" />
          <div className="relative container mx-auto px-4 py-20 md:py-28 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4"
            >
              MyDriver Experiencias
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Experiencias de temporada
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Luciérnagas, carnaval, navidad y las fechas que solo pasan una vez al año. Son las
              salidas con más demanda: se reservan con anticipación y los lugares se llenan.
            </motion.p>
            <Button size="lg" className="bg-white text-[#ab1818] hover:bg-gray-100 text-lg px-8 py-6 gap-2" asChild>
              <a href={waExperienciasGeneral} target="_blank" rel="noopener noreferrer">
                <BellRing className="w-5 h-5" /> Apartar mi lugar
              </a>
            </Button>
          </div>
        </section>

        {/* Servicios de temporada */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {serviciosTemporada.map((s, index) => (
                <motion.div
                  key={s.titulo}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border-2 border-[#ab1818]/10 p-8 flex flex-col"
                >
                  <div className="text-5xl mb-4">{s.emoji}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{s.titulo}</h2>
                  <p className="text-[#ab1818] font-semibold flex items-center gap-2 mb-4">
                    <CalendarDays className="w-4 h-4" /> {s.temporada}
                  </p>
                  <p className="text-gray-600 mb-8 flex-1">{s.descripcion}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1 h-11" asChild>
                      <Link to={s.url}>Ver detalles</Link>
                    </Button>
                    <Button className="flex-1 h-11 bg-[#ab1818] hover:bg-[#ab1818]/90 text-white" asChild>
                      <a href={s.wa} target="_blank" rel="noopener noreferrer">
                        Reservar
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendario de temporada */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Calendario del año</h2>
              <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
                Estas son las demás salidas que dependen de la fecha. Aparta con tiempo: la demanda
                se concentra en pocas semanas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {destinosDeTemporada.map((e) => (
                <Link
                  key={e.slug}
                  to={`/experiencias/${e.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all flex flex-col"
                >
                  <div className={`h-28 bg-gradient-to-br ${e.tono} flex items-center justify-center`}>
                    <span className="text-4xl">{e.emoji}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-bold text-[#ab1818] uppercase tracking-wide mb-1">
                      {e.epoca}
                    </span>
                    <h3 className="font-bold mb-2">{e.nombre}</h3>
                    <p className="text-sm text-gray-600 flex-1">{e.concepto}</p>
                    <span className="text-sm text-[#ab1818] font-medium mt-3 inline-flex items-center gap-1">
                      Ver la salida <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/experiencias">Ver todas las experiencias</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-white" style={{ backgroundColor: '#ab1818' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Que no se te pase la fecha</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Escríbenos y te avisamos cuando abramos las salidas de la temporada que te interesa.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#ab1818] hover:bg-gray-100 text-lg px-8 py-6 gap-2"
              asChild
            >
              <a href={waExperiencias("temporada")} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="w-5 h-5" /> Quiero que me avisen
              </a>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Temporada;
