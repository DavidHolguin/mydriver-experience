import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RoleType = 'pasajero' | 'conductor';
type PlatformType = 'ios' | 'android';

interface DownloadInfo {
  url: string;
  qrCode: string;
  storeName: string;
}

const downloadLinks: Record<RoleType, Record<PlatformType, DownloadInfo>> = {
  pasajero: {
    ios: {
      url: 'https://apps.apple.com/us/app/mydrivertaxi/id6443749551',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://apps.apple.com/us/app/mydrivertaxi/id6443749551',
      storeName: 'App Store'
    },
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.rider.mydrivermxn',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://play.google.com/store/apps/details?id=com.rider.mydrivermxn',
      storeName: 'Google Play'
    }
  },
  conductor: {
    ios: {
      url: 'https://apps.apple.com/us/app/mydriver-conductor-app/id6443749599',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://apps.apple.com/us/app/mydriver-conductor-app/id6443749599',
      storeName: 'App Store'
    },
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.driver.mydrivermxn',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://play.google.com/store/apps/details?id=com.driver.mydrivermxn',
      storeName: 'Google Play'
    }
  }
};

export const Descargas = () => {
  const [role, setRole] = useState<RoleType>('pasajero');
  const [platform, setPlatform] = useState<PlatformType>('ios');

  const currentDownload = downloadLinks[role][platform];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Descargar myDriver
          </h1>
          <p className="text-lg text-gray-600">
            Escoge tu rol y plataforma para descargar la aplicación
          </p>
        </div>

        {/* Selecciones */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Selector de Rol */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              ¿Eres Pasajero o Conductor?
            </label>
            <div className="flex gap-4">
              <Button
                onClick={() => setRole('pasajero')}
                variant={role === 'pasajero' ? 'default' : 'outline'}
                className={`flex-1 h-12 text-base font-semibold transition-all ${
                  role === 'pasajero'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'border-2 border-gray-300 hover:border-primary'
                }`}
              >
                Pasajero
              </Button>
              <Button
                onClick={() => setRole('conductor')}
                variant={role === 'conductor' ? 'default' : 'outline'}
                className={`flex-1 h-12 text-base font-semibold transition-all ${
                  role === 'conductor'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'border-2 border-gray-300 hover:border-primary'
                }`}
              >
                Conductor
              </Button>
            </div>
          </div>

          {/* Selector de Plataforma */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Selecciona tu plataforma
            </label>
            <Select value={platform} onValueChange={(value) => setPlatform(value as PlatformType)}>
              <SelectTrigger className="w-full h-12 border-2 border-gray-300 rounded-lg">
                <SelectValue placeholder="Selecciona una plataforma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ios">
                  <span className="flex items-center gap-2">
                    🍎 iOS - App Store
                  </span>
                </SelectItem>
                <SelectItem value="android">
                  <span className="flex items-center gap-2">
                    🤖 Android - Google Play
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Contenido Principal - QR y Información */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              myDriver {role === 'pasajero' ? 'Pasajero' : 'Conductor'}
            </h2>
            <p className="text-gray-600 mb-8">
              Descargar en {currentDownload.storeName}
            </p>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <img
                  src={currentDownload.qrCode}
                  alt={`QR Code para ${role} en ${platform}`}
                  className="w-64 h-64 rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Escanea este código QR con tu teléfono
              </p>
            </div>

            {/* Botón de Descarga Directo */}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              <a
                href={currentDownload.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a {currentDownload.storeName}
              </a>
            </Button>

            {/* Información adicional */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-blue-900">💡 Consejo:</span> También puedes
                escanear el código QR con tu cámara para descargar directamente.
              </p>
            </div>
          </div>
        </div>

        {/* Instrucciones Rápidas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Para iOS</h3>
            <ol className="text-sm text-gray-600 space-y-2">
              <li>1. Abre la App Store</li>
              <li>2. Busca "myDriver"</li>
              <li>3. Toca "Obtener" y descarga</li>
              <li>4. ¡O escanea el QR arriba!</li>
            </ol>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 Para Android</h3>
            <ol className="text-sm text-gray-600 space-y-2">
              <li>1. Abre Google Play</li>
              <li>2. Busca "myDriver"</li>
              <li>3. Toca "Instalar"</li>
              <li>4. ¡O escanea el QR arriba!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descargas;
