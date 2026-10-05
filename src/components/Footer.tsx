import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, APP_LINKS, APP_DISPONIBLE, APP_PROXIMAMENTE_TIENDAS } from '@/config/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Insignias de tienda: enlazan a Google Play / App Store solo si la app está
   * publicada; mientras no lo esté (APP_DISPONIBLE = false) se muestran como
   * imagen, sin enlace, bajo el rótulo "Próximamente disponible en:".
   */
  const StoreBadge = ({ href, src, alt }: { href: string; src: string; alt: string }) =>
    APP_DISPONIBLE ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        <img src={src} alt={alt} className="h-10" />
      </a>
    ) : (
      <img src={src} alt={alt} className="h-10 opacity-70" />
    );

  return (
    <footer className="bg-[#0F1E2A] text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <img 
              src="/images/logo.svg" 
              alt="MyDriver" 
              className="h-10 brightness-0 invert" 
            />
            <p className="text-sm leading-relaxed">
              La plataforma de movilidad que conecta conductores con pasajeros de manera justa y segura en México.
            </p>
            <p className="text-xs leading-relaxed text-gray-500">
              Tecnología de rastreo GPS y videovigilancia por <span className="font-semibold text-gray-300">SentinelX</span>.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E1E] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E1E] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E1E] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E1E] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Servicios & Experience */}
          <div>
            <h3 className="text-white font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">Viajes en Ciudad</Link>
              </li>
              <li>
                <Link to="/mydriver-cargo" className="text-sm hover:text-white transition-colors">MyDriver Cargo</Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red mt-6 mb-3">
              MyDriver Experience
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/destinos" className="text-xs text-brand-red font-semibold hover:underline flex items-center gap-1">
                  <span>Ver Todos los Destinos →</span>
                </Link>
              </li>
              <li>
                <Link to="/santuario-luciernagas" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center justify-between">
                  <span>Santuario Luciérnagas</span>
                  <span className="text-[10px] text-gray-500">Jun–Ago</span>
                </Link>
              </li>
              <li>
                <Link to="/carnaval-veracruz" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center justify-between">
                  <span>Carnaval Veracruz</span>
                  <span className="text-[10px] text-gray-500">Jun–Jul</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Gana con MyDriver */}
          <div>
            <h3 className="text-white font-semibold mb-6">Gana con MyDriver</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/socio-conductor" className="text-sm hover:text-white transition-colors">Socio Conductor</Link>
              </li>
              <li>
                <Link to="/conductor-standard" className="text-sm hover:text-white transition-colors">Conductor Standard</Link>
              </li>
              <li>
                <Link to="/socio-repartidor" className="text-sm hover:text-white transition-colors">Socio Repartidor</Link>
              </li>
              <li>
                <Link to="/negocio-aliado" className="text-sm hover:text-white transition-colors">Negocio Aliado</Link>
              </li>
              <li>
                <Link to="/socio-flotilla" className="text-sm hover:text-white transition-colors">Socio Flotilla</Link>
              </li>
              <li>
                <Link to="/socio-inversionista" className="text-sm text-brand-red font-semibold hover:underline flex items-center gap-1.5">
                  <span>Socio Inversionista</span>
                  <span className="text-[10px] bg-brand-red/20 text-brand-red px-1.5 py-0.5 rounded-full font-bold">Cupos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compañía & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Compañía</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link to="/sobre-nosotros" className="text-sm hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm hover:text-white transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="/#seguridad" className="text-sm hover:text-white transition-colors">Seguridad</Link>
              </li>
            </ul>
            
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terminos" className="text-sm hover:text-white transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/politicas" className="text-sm hover:text-white transition-colors">Política de Privacidad</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* App Downloads & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* App Downloads */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                {APP_DISPONIBLE ? 'App Pasajeros' : APP_PROXIMAMENTE_TIENDAS}
              </p>
              <div className="flex gap-3">
                <StoreBadge href={APP_LINKS.pasajero.android} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                <StoreBadge href={APP_LINKS.pasajero.ios} src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                {APP_DISPONIBLE ? 'App Conductores' : APP_PROXIMAMENTE_TIENDAS}
              </p>
              <div className="flex gap-3">
                <StoreBadge href={APP_LINKS.conductor.android} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                <StoreBadge href={APP_LINKS.conductor.ios} src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm mb-1">
              &copy; {currentYear} MyDriver Technologies S.A.P.I. de C.V. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-600">
              Powered by Auto Transportes Tepactepec S.A.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
