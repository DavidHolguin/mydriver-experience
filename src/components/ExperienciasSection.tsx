import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Button } from './ui/button';
import { experiencias, serviciosTemporada, waExperienciasGeneral } from '@/data/experiencias';

const destacadas = experiencias.filter((e) => e.epoca === 'Todo el año').slice(0, 3);

export const ExperienciasSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.25em] text-sm text-[#ab1818] font-semibold mb-3">
          Turismo
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MyDriver Experiencias</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Viajes de un día desde Puebla en van o bus turístico: nosotros ponemos el transporte y la
          coordinación, tú disfrutas el destino.
        </p>
      </div>

      {/* Temporada */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
        {serviciosTemporada.map((s) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={s.url}
              className="block h-full rounded-2xl bg-gray-900 text-white p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 mb-4">
                <CalendarDays className="w-4 h-4" /> Temporada
              </div>
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3 className="text-2xl font-bold mb-1">{s.titulo}</h3>
              <p className="text-sm text-white/70 mb-3">{s.temporada}</p>
              <p className="text-white/85">{s.descripcion}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Destinos todo el año */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {destacadas.map((e) => (
          <Link
            key={e.slug}
            to={`/experiencias/${e.slug}`}
            className="rounded-2xl border p-6 hover:border-[#ab1818] hover:shadow-lg transition-all"
          >
            <div className="text-3xl mb-3">{e.emoji}</div>
            <h3 className="font-bold mb-1">{e.nombre}</h3>
            <p className="text-sm text-gray-600">{e.concepto}</p>
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white gap-2" asChild>
          <Link to="/experiencias">
            Ver todas las experiencias <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={waExperienciasGeneral} target="_blank" rel="noopener noreferrer">
            Cotizar mi salida
          </a>
        </Button>
      </div>
    </div>
  </section>
);
