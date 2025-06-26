import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img 
              src="https://monkeytwomonkey.com/wp-content/uploads/2021/10/mydriver-logo-sin-fondo-1.png"
              alt="MyDriver Logo"
              className="h-20"
            />
            <p className="text-gray-400 mt-4">
              Transformando la movilidad urbana con tecnología e innovación.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.tiktok.com/@mydrivermexico" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/people/myDriver-Mx/61577308812929/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="https://wa.me/5212461977827" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li><a href="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="/socio-conductor" className="text-gray-400 hover:text-white transition-colors">Socio Conductor</a></li>
              <li><a href="/socio-repartidor" className="text-gray-400 hover:text-white transition-colors">Socio Repartidor</a></li>
              <li><a href="/negocio-aliado" className="text-gray-400 hover:text-white transition-colors">Negocio Aliado</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="/politicas" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centro de Ayuda</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>2461977827</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>contacto@mydriver.com</span>
              </li>
            </ul>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <a href="https://wa.me/5212461977827?text=Hola,%20necesito%20ayuda%20de%20soporte." target="_blank" rel="noopener noreferrer">
                Contactar Soporte
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 pb-20 md:pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm"> 2024 MyDriver. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a 
                href="https://apps.apple.com/app/mydriver" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-[40px] w-[135px] rounded-lg overflow-hidden"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-full h-full object-cover"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=mydriver" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-[40px] w-[135px] rounded-lg overflow-hidden"
              >
                <img 
                  src="https://play.google.com/intl/es_419/badges/static/images/badges/es_badge_web_generic.png"
                  alt="Play Store"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
