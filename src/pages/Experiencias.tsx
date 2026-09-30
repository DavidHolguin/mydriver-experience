import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users, ArrowRight, Bus, ShieldCheck, Clock } from 'lucide-react';
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

const Experiencias = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-16 bg-white text-gray-800">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#ab1818] text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_60%)]" />
          <div className="relative container mx-auto px-4 py-20 md:py-28 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4"
            >
              Turismo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              MyDriver Experiencias
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Viajes de un día desde Puebla en van o bus turístico: te llevamos, te esperamos y te
              regresamos. Tú solo disfrutas el destino.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#ab1818] hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <a href={waExperienciasGeneral} target="_blank" rel="noopener noreferrer">
                  Cotizar mi experiencia
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <Link to="/temporada">Ver experiencias de temporada</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-14 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
              {[
                { icon: Bus, title: 'Van o bus turístico', text: 'Unidades con operador certificado y seguro vigente.' },
                { icon: MapPin, title: 'Salida desde Puebla', text: 'Puntos de salida acordados con tu grupo.' },
                { icon: Clock, title: 'Un día completo', text: 'Salimos temprano y regresamos el mismo día.' },
                { icon: Users, title: 'Grupos y privados', text: 'Familias, empresas, escuelas y grupos de amigos.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="p-3 bg-[#ab1818]/10 rounded-full mb-3">
                    <item.icon className="w-7 h-7 text-[#ab1818]" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temporada */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Experiencias de temporada</h2>
                <p className="text-lg text-gray-600 mt-2">
                  Fechas que solo pasan una vez al año. Lugares limitados por salida.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/temporada" className="gap-2">
                  Ver el apartado de temporada <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {serviciosTemporada.map((s) => (
                <Link
                  key={s.titulo}
                  to={s.url}
                  className="group rounded-2xl border-2 border-[#ab1818]/15 p-8 hover:border-[#ab1818] hover:shadow-xl transition-all bg-white"
                >
                  <div className="text-4xl mb-3">{s.emoji}</div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-[#ab1818]">{s.titulo}</h3>
                  <p className="text-sm font-medium text-[#ab1818] mb-3">{s.temporada}</p>
                  <p className="text-gray-600">{s.descripcion}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Destinos de un día */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Destinos de 1 día desde Puebla</h2>
              <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
                Esta es nuestra propuesta de salidas por temporada y todo el año. Si el destino que
                buscas no está en la lista, lo armamos contigo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {experiencias.map((e, index) => (
                <motion.div
                  key={e.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
                >
                  <div className={`h-40 bg-gradient-to-br ${e.tono} flex items-center justify-center relative`}>
                    <span className="text-6xl drop-shadow-lg">{e.emoji}</span>
                    <span className="absolute top-4 left-4 bg-white/90 text-[#ab1818] text-xs font-bold px-3 py-1 rounded-full">
                      {e.epoca}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{e.nombre}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                      <MapPin className="w-4 h-4" /> {e.destino}
                    </p>
                    <p className="text-gray-600 mb-6 flex-1">{e.concepto}</p>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 h-11" asChild>
                        <Link to={`/experiencias/${e.slug}`}>Ver la salida</Link>
                      </Button>
                      <Button className="flex-1 h-11 bg-[#ab1818] hover:bg-[#ab1818]/90 text-white" asChild>
                        <a href={waExperiencias(e.nombre)} target="_blank" rel="noopener noreferrer">
                          Cotizar
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-white" style={{ backgroundColor: '#ab1818' }}>
          <div className="container mx-auto px-4 text-center">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Armamos tu salida?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Dinos el destino, la fecha y cuántas personas van. Te cotizamos la unidad y el
              itinerario.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#ab1818] hover:bg-gray-100 text-lg px-8 py-6 gap-2"
              asChild
            >
              <a href={waExperienciasGeneral} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="w-5 h-5" /> Cotizar por WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Experiencias;
