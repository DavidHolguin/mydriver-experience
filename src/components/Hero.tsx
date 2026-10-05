import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_LINKS, APP_DISPONIBLE, APP_PROXIMAMENTE_TEXTO, APP_PROXIMAMENTE_TIENDAS } from '@/config/constants';
import { trackButtonClick } from '@/lib/gtmEvents';

export const Hero = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/mydriverPortada.webp" 
          alt="MyDriver" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E2A] via-[#0F1E2A]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 whitespace-pre-line">
            {"La app de movilidad\nque transforma\ntu ciudad"}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-lg md:text-xl text-white/80">
            Viaja seguro. Gana más. Muévete mejor. La plataforma de transporte privado donde todos ganan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
        >
          {APP_DISPONIBLE ? (
            <a
              href={APP_LINKS.pasajero.android}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick('hero_download_app')}
              className="bg-brand-red text-white hover:bg-brand-red-hover shadow-lg font-bold rounded-full px-8 py-4 text-lg transition-all inline-flex items-center justify-center whitespace-nowrap"
            >
              Descarga la App
            </a>
          ) : (
            <Link
              to="/descargas"
              className="bg-brand-red text-white hover:bg-brand-red-hover shadow-lg font-bold rounded-full px-8 py-4 text-lg transition-all inline-flex items-center justify-center whitespace-nowrap"
            >
              {APP_PROXIMAMENTE_TEXTO}
            </Link>
          )}
          <a
            href="#servicios"
            onClick={handleScrollToServices}
            className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white rounded-full px-8 py-4 transition-colors inline-flex items-center justify-center whitespace-nowrap"
          >
            Conoce más →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col gap-3 items-center lg:items-start"
        >
          {!APP_DISPONIBLE && (
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {APP_PROXIMAMENTE_TIENDAS}
            </span>
          )}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <img src="/images/ios.png" alt="App Store" className={APP_DISPONIBLE ? 'h-12 w-auto' : 'h-12 w-auto opacity-60'} />
            <img src="/images/android.png" alt="Play Store" className={APP_DISPONIBLE ? 'h-12 w-auto' : 'h-12 w-auto opacity-60'} />
          </div>
        </motion.div>

        {/* Growth & Investment Quick Spotlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 1. Socio Flotilla */}
            <Link
              to="/socio-flotilla"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-brand-red/60 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">Alta Rentabilidad</span>
                <span className="text-sm font-bold text-white group-hover:text-brand-red transition-colors block">Socio Flotilla</span>
                <span className="text-xs text-gray-300">Gana hasta $10k/mes sin conducir</span>
              </div>
              <span className="text-white/60 group-hover:text-brand-red group-hover:translate-x-1 transition-all text-sm font-bold">→</span>
            </Link>

            {/* 2. Socio Inversionista */}
            <Link
              to="/socio-inversionista"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-brand-red/60 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-red tracking-wider block">9 Cupos / Ciudad</span>
                <span className="text-sm font-bold text-white group-hover:text-brand-red transition-colors block">Socio Inversionista</span>
                <span className="text-xs text-gray-300">Cofundador con certeza notariada</span>
              </div>
              <span className="text-white/60 group-hover:text-brand-red group-hover:translate-x-1 transition-all text-sm font-bold">→</span>
            </Link>

            {/* 3. Socio Conductor */}
            <Link
              to="/socio-conductor"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-brand-red/60 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-300 tracking-wider block">Autos & Taxis</span>
                <span className="text-sm font-bold text-white group-hover:text-brand-red transition-colors block">Socio Conductor</span>
                <span className="text-xs text-gray-300">15% por viaje o $4,500/mes fijo</span>
              </div>
              <span className="text-white/60 group-hover:text-brand-red group-hover:translate-x-1 transition-all text-sm font-bold">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

