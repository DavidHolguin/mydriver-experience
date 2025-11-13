import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 inline mr-2" fill="currentColor">
    <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 inline mr-2" fill="currentColor">
    <path d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z" />
  </svg>
);

type RoleType = 'pasajero' | 'conductor';
type PlatformType = 'ios' | 'android';

interface DownloadInfo {
  url: string;
  qrCode: string;
  storeName: string;
  image: string;
}

const downloadLinks: Record<RoleType, Record<PlatformType, DownloadInfo>> = {
  pasajero: {
    ios: {
      url: 'https://apps.apple.com/us/app/mydrivertaxi/id6443749551',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://apps.apple.com/us/app/mydrivertaxi/id6443749551',
      storeName: 'App Store',
      image: '/images/ios.png'
    },
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.rider.mydrivermxn',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://play.google.com/store/apps/details?id=com.rider.mydrivermxn',
      storeName: 'Google Play',
      image: '/images/android.png'
    }
  },
  conductor: {
    ios: {
      url: 'https://apps.apple.com/us/app/mydriver-conductor-app/id6443749599',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://apps.apple.com/us/app/mydriver-conductor-app/id6443749599',
      storeName: 'App Store',
      image: '/images/ios.png'
    },
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.driver.mydrivermxn',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://play.google.com/store/apps/details?id=com.driver.mydrivermxn',
      storeName: 'Google Play',
      image: '/images/android.png'
    }
  }
};

export const Descargas = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<RoleType>('pasajero');
  const [platform, setPlatform] = useState<PlatformType>('ios');
  const [isSharing, setIsSharing] = useState(false);

  const currentDownload = downloadLinks[role][platform];
  const qrRef = useRef<HTMLDivElement>(null);

  const shareQR = async () => {
    setIsSharing(true);
    try {
      if (qrRef.current) {
        const canvas = await html2canvas(qrRef.current, {
          backgroundColor: '#ffffff',
          scale: 2,
        });
        
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'mydriver-qr.png', { type: 'image/png' });
            
            if (navigator.share && navigator.canShare({ files: [file] })) {
              navigator.share({
                title: `Descarga myDriver ${role === 'pasajero' ? 'Pasajero' : 'Conductor'}`,
                text: `Descarga myDriver ${role === 'pasajero' ? 'Pasajero' : 'Conductor'} en ${platform === 'ios' ? 'App Store' : 'Google Play'}. Escanea el QR o haz clic: ${currentDownload.url}`,
                files: [file],
              });
            } else {
              // Fallback: copiar enlace al portapapeles
              navigator.clipboard.writeText(
                `Descarga myDriver ${role === 'pasajero' ? 'Pasajero' : 'Conductor'} en ${platform === 'ios' ? 'App Store' : 'Google Play'}: ${currentDownload.url}`
              );
              alert('Enlace copiado al portapapeles');
            }
          }
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
    setIsSharing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Contenido Principal */}
      <main className="flex-1 pt-20 pb-24 px-4">
        <div className="container mx-auto max-w-lg p-0">
          {/* Selectores de Rol y Plataforma */}
          <div className="space-y-4 mb-4">
            {/* Selector de Rol - Estilo Tab */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wide">
                ¿Quién eres?
              </p>
              <div className="flex gap-2 bg-gray-200 p-1 rounded-lg">
                <button
                  onClick={() => setRole('pasajero')}
                  className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition-all ${
                    role === 'pasajero'
                      ? 'bg-white text-primary shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  👥 Pasajero
                </button>
                <button
                  onClick={() => setRole('conductor')}
                  className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition-all ${
                    role === 'conductor'
                      ? 'bg-white text-primary shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  🚗 Conductor
                </button>
              </div>
            </div>

            {/* Selector de Plataforma - Estilo Botones */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wide">
                Tu dispositivo
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPlatform('ios')}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all border-2 flex items-center justify-center ${
                    platform === 'ios'
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <AppleIcon />
                  iPhone/iPad
                </button>
                <button
                  onClick={() => setPlatform('android')}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all border-2 flex items-center justify-center ${
                    platform === 'android'
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <PlayStoreIcon />
                  Android
                </button>
              </div>
            </div>
          </div>

          {/* Card QR Premium */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border-[2px] border-solid border-[rgb(171_24_24_/_0.9)]">
            <div className="text-center">
              {/* Encabezado de la Card */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  myDriver {role === 'pasajero' ? 'Pasajero' : 'Conductor'}
                </h2>
                <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                  {platform === 'ios' ? (
                    <>
                      <AppleIcon /> App Store
                    </>
                  ) : (
                    <>
                      <PlayStoreIcon /> Google Play
                    </>
                  )}
                </p>
              </div>

              {/* QR Code con diseño mejorado */}
              <div ref={qrRef} className="inline-block bg-gradient-to-br from-gray-50 to-white  rounded-xl mb-6 border-2 border-gray-100">
                <div className="bg-white p-2 rounded-lg">
                  <img
                    src={currentDownload.qrCode}
                    alt={`QR Code para ${role} en ${platform}`}
                    className="w-56 h-56 rounded-lg"
                  />
                </div>
              </div>

            

              {/* Botón de Descarga */}
              <a
                href={currentDownload.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <img 
                  src={currentDownload.image}
                  alt={`Descargar en ${currentDownload.storeName}`}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Botón Compartir Fijo en Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="container mx-auto max-w-lg">
          <Button
            onClick={shareQR}
            disabled={isSharing}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            {isSharing ? 'Compartiendo...' : 'Compartir QR'}
          </Button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Comparte el QR con amigos para que descarguen la app
          </p>
        </div>
      </div>

  
    </div>
  );
};

export default Descargas;
