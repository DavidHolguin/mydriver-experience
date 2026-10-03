import { useEffect } from 'react';
import { X, Car, CreditCard, Bike, Store, Truck, Package, Building2, Sparkles, PartyPopper, ChevronRight, Home, BookOpen, Users, Mail, Download, FileText, ScrollText, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, APP_LINKS } from '@/config/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuSections = [
  {
    title: 'Servicios',
    items: [
      { label: 'Viajes en Ciudad', href: '/', icon: Car },
      { label: 'MyDriver Cargo', href: '/mydriver-cargo', icon: Package },
    ],
  },
  {
    title: 'MyDriver Experience (Por Temporadas)',
    items: [
      { label: 'Ver Todos los Destinos →', href: '/destinos', icon: MapPin },
      { label: 'Santuario Luciérnagas (Jun–Ago)', href: '/santuario-luciernagas', icon: Sparkles },
      { label: 'Carnaval Veracruz (Jun–Jul)', href: '/carnaval-veracruz', icon: PartyPopper },
    ],
  },
  {
    title: 'Gana con MyDriver',
    items: [
      { label: 'Socio Conductor', href: '/socio-conductor', icon: Car },
      { label: 'Conductor Standard', href: '/conductor-standard', icon: CreditCard },
      { label: 'Socio Repartidor', href: '/socio-repartidor', icon: Bike },
      { label: 'Negocio Aliado', href: '/negocio-aliado', icon: Store },
      { label: 'Socio Flotilla', href: '/socio-flotilla', icon: Truck },
    ],
  },
  {
    title: 'Compañía',
    items: [
      { label: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Users },
      { label: 'Blog', href: '/blog', icon: BookOpen },
      { label: 'Contacto', href: '/contacto', icon: Mail },
      { label: 'Descargas', href: '/descargas', icon: Download },
      { label: 'Seguridad', href: '/#seguridad', icon: Shield },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Términos y Condiciones', href: '/terminos', icon: FileText },
      { label: 'Política de Privacidad', href: '/politicas', icon: ScrollText },
    ],
  },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-full max-w-sm bg-white z-[70] flex flex-col shadow-dramatic"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-surface-border">
              <img
                src="/images/logo.svg"
                alt="MyDriver"
                className="h-9"
              />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-surface-muted transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5 text-text-primary" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              {/* Home link */}
              <div className="px-5 mb-2">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-button text-text-primary font-medium hover:bg-surface-light transition-colors"
                >
                  <Home className="w-5 h-5 text-text-secondary" />
                  Inicio
                </Link>
              </div>

              {menuSections.map((section) => (
                <div key={section.title} className="px-5 mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted px-4 mb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between px-4 py-3 rounded-button text-text-primary hover:bg-surface-light transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-text-secondary group-hover:text-brand-red transition-colors" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-brand-red transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-surface-border p-5 space-y-4">
              {/* Download CTA */}
              <a
                href={APP_LINKS.pasajero.android}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-red text-white hover:bg-brand-red-hover font-bold text-center rounded-pill transition-colors shadow-md"
              >
                Descarga la App
              </a>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
