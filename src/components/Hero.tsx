import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '@/config/constants';
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
          <a
            href={APP_LINKS.pasajero.android}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick('hero_download_app')}
            className="bg-brand-red text-white hover:bg-brand-red-hover shadow-lg font-bold rounded-full px-8 py-4 text-lg transition-all inline-flex items-center justify-center whitespace-nowrap"
          >
            Descarga la App
          </a>
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
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          <a
            href={APP_LINKS.pasajero.ios}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick('hero_app_store')}
            className="hover:scale-105 transition-transform"
          >
            <img src="/images/ios.png" alt="App Store" className="h-12 w-auto" />
          </a>
          <a
            href={APP_LINKS.pasajero.android}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick('hero_play_store')}
            className="hover:scale-105 transition-transform"
          >
            <img src="/images/android.png" alt="Play Store" className="h-12 w-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

