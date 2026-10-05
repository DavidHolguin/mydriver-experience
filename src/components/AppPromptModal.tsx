import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { APP_DISPONIBLE, APP_PROXIMAMENTE_TEXTO, APP_PROXIMAMENTE_TIENDAS } from '@/config/constants';

type OSType = 'ios' | 'android' | 'unknown';

const AppleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
    <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" />
  </svg>
);

const PlayStoreIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
    <path d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z" />
  </svg>
);

export const AppPromptModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [os, setOs] = useState<OSType>('unknown');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      setIsMobile(mobileRegex.test(userAgent.toLowerCase()));
    };

    // Detectar sistema operativo
    const detectOS = () => {
      const userAgent = navigator.userAgent;
      
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        setOs('ios');
      } else if (/Android/.test(userAgent)) {
        setOs('android');
      } else {
        setOs('unknown');
      }
    };

    checkMobile();
    detectOS();
  }, []);

  // Obtener el link de descarga basado en el OS
  const getDownloadLink = (platform: 'ios' | 'android') => {
    if (platform === 'ios') {
      return 'https://apps.apple.com/us/app/mydrivertaxi/id6443749551';
    } else {
      return 'https://play.google.com/store/apps/details?id=com.rider.mydrivermxn';
    }
  };

  if (!isMobile) {
    return null; // No mostrar en desktop
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 transition-all duration-500 ease-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-t-3xl shadow-2xl p-6 pb-8 relative overflow-hidden">
          {/* Efecto de fondo degradado sutil */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>

          {/* Botón cerrar - Estilo header */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#ffd2d2] border-2 border-primary hover:bg-primary/10 transition-all duration-200 flex items-center justify-center group z-10"
            aria-label="Cerrar"
          >
            <X size={20} className="text-primary group-hover:scale-110 transition-transform" />
          </button>

          {/* Contenido */}
          <div className="text-center pt-4">
            {/* Logo en círculo con borde rojo - Mejorado */}
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 rounded-full border-3 border-primary bg-gradient-to-br from-white to-primary/5 flex items-center justify-center shadow-lg p-4">
                <img 
                  src="/images/logo.svg"
                  alt="MyDriver Logo"
                  className="h-14 w-auto"
                />
                {/* Sombra profesional adicional */}
                <div className="absolute inset-0 rounded-full shadow-[0_8px_24px_rgba(171,24,24,0.15)]"></div>
              </div>
            </div>

            {/* Título */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Muévete con myDriver
            </h2>

            {/* Línea divisora decorativa */}
            <div className="h-1 w-12 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto mb-4"></div>

            {/* Texto principal */}
            <p className="text-gray-700 text-base mb-8 leading-5 px-2">
              {APP_DISPONIBLE
                ? 'Sé de los primeros en descubrir myDriver Pasajero. Muévete sin complicaciones, con tarifas justas y conductores de confianza. ¡Tu ciudad te espera!'
                : 'Estamos afinando los últimos detalles de myDriver Pasajero para tu teléfono. Muy pronto podrás pedir tu primer viaje desde la app.'}
            </p>

            {/* Selector de tiendas */}
            <div className="flex gap-4 justify-center mb-6 px-2">
              {APP_DISPONIBLE ? (
                <>
                  {/* Google Play */}
                  <a
                    href={getDownloadLink('android')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-300 transform hover:scale-105 inline-block ${
                      os === 'android' 
                        ? 'opacity-100 scale-105' 
                        : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    <img
                      src="/images/android.png"
                      alt="Descargar en Google Play"
                      className="w-32 h-auto object-contain drop-shadow-md hover:drop-shadow-lg transition-all"
                    />
                  </a>

                  {/* App Store */}
                  <a
                    href={getDownloadLink('ios')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-300 transform hover:scale-105 inline-block ${
                      os === 'ios' 
                        ? 'opacity-100 scale-105' 
                        : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    <img
                      src="/images/ios.png"
                      alt="Descargar en App Store"
                      className="w-32 h-auto object-contain drop-shadow-md hover:drop-shadow-lg transition-all"
                    />
                  </a>
                </>
              ) : (
                <>
                  <img
                    src="/images/android.png"
                    alt="Google Play"
                    className="w-32 h-auto object-contain opacity-60"
                  />
                  <img
                    src="/images/ios.png"
                    alt="App Store"
                    className="w-32 h-auto object-contain opacity-60"
                  />
                </>
              )}
            </div>

            {/* Texto adicional */}
            <p className="text-gray-600 text-xs font-semibold tracking-wide mb-4 px-2">
              {APP_DISPONIBLE
                ? '¡DESCÁRGALA Y PIDE TU PRIMER VIAJE EN MINUTOS!'
                : `${APP_PROXIMAMENTE_TIENDAS} GOOGLE PLAY Y APP STORE`}
            </p>

            {/* Indicador de SO detectado con iconos */}
            {APP_DISPONIBLE ? (
              <div className="flex items-center justify-center gap-2 text-gray-500 text-xs px-2">
                {os === 'ios' 
                  ? (
                    <>
                      <AppleIcon className="w-4 h-4 text-primary" />
                      <span className="font-medium">App Store recomendado para ti</span>
                    </>
                  ) 
                  : os === 'android'
                  ? (
                    <>
                      <PlayStoreIcon className="w-4 h-4 text-primary" />
                      <span className="font-medium">Google Play recomendado para ti</span>
                    </>
                  )
                  : (
                    <span className="font-medium">Elige tu tienda de aplicaciones</span>
                  )
                }
              </div>
            ) : (
              <p className="text-gray-500 text-xs px-2 font-medium">
                {APP_PROXIMAMENTE_TEXTO} · te avisamos por WhatsApp en cuanto esté lista
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
