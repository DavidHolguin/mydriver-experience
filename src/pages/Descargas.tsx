import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

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
    <div className="min-h-screen bg-white pt-20 pb-6 px-4">
      <div className="container mx-auto max-w-md">
        {/* Selecciones - Compacto */}
        <div className="space-y-3 mb-6">
          {/* Selector de Rol */}
          <div className="flex gap-2">
            <button
              onClick={() => setRole('pasajero')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                role === 'pasajero'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Pasajero
            </button>
            <button
              onClick={() => setRole('conductor')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                role === 'conductor'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Conductor
            </button>
          </div>

          {/* Selector de Plataforma */}
          <div className="flex gap-2">
            <button
              onClick={() => setPlatform('ios')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                platform === 'ios'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🍎 iOS
            </button>
            <button
              onClick={() => setPlatform('android')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                platform === 'android'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🤖 Android
            </button>
          </div>
        </div>

        {/* Contenido Principal - QR y Botones */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="text-center">
            {/* Título */}
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              myDriver {role === 'pasajero' ? 'Pasajero' : 'Conductor'}
            </h2>

            {/* QR Code */}
            <div ref={qrRef} className="inline-block bg-white p-3 rounded-lg mb-4">
              <img
                src={currentDownload.qrCode}
                alt={`QR Code para ${role} en ${platform}`}
                className="w-48 h-48 rounded"
              />
            </div>

            {/* Botón de Tienda */}
            <div className="mb-4">
              <a
                href={currentDownload.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block h-12 w-32"
              >
                <img 
                  src={currentDownload.image}
                  alt={`Descargar en ${currentDownload.storeName}`}
                  className="h-full w-full object-contain"
                />
              </a>
            </div>

            {/* Botón de Compartir */}
            <Button
              onClick={shareQR}
              disabled={isSharing}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Share2 className="w-4 h-4" />
              {isSharing ? 'Compartiendo...' : 'Compartir QR'}
            </Button>
          </div>
        </div>

        {/* Información compacta */}
        <div className="text-center text-xs text-gray-600">
          <p>Escanea el código QR o descarga directamente desde la tienda</p>
        </div>
      </div>
    </div>
  );
};

export default Descargas;
