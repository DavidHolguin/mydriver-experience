
import { useState } from 'react';
import { Share2, QrCode, Download, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const DownloadBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [startY, setStartY] = useState(0);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const storeUrl = isIOS 
    ? "https://apps.apple.com/app/mydriver"
    : "https://play.google.com/store/apps/details?id=mydriver";

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const diff = startY - currentY;
    
    if (diff > 50 && !isExpanded) {
      setIsExpanded(true);
    } else if (diff < -50 && isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Register Form Modal */}
      {isRegisterOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsRegisterOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 transform transition-all duration-300 ease-out animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6">Registrate como conductor</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre completo</label>
                <Input 
                  placeholder="Ingresa tu nombre" 
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <Input 
                  type="tel" 
                  placeholder="(+00) 000-000-000" 
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ciudad</label>
                <Input 
                  placeholder="¿En qué ciudad quieres trabajar?" 
                  className="w-full"
                />
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault();
                  // Aquí iría la lógica de registro
                  setIsRegisterOpen(false);
                }}
              >
                Enviar solicitud
              </Button>
            </form>
          </div>
        </div>
      )}

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div 
        className={`
          fixed bottom-0 left-0 right-0 bg-white z-40 transition-all duration-300
          ${isExpanded ? 'h-[80vh] md:h-[60vh]' : 'h-20'}
        `}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Barra compacta */}
        {!isExpanded && (
          <div className="h-20 flex items-center justify-between px-4 md:px-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
                alt="MyDriver Logo"
                className="h-8"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => setIsRegisterOpen(true)}
              >
                <UserPlus className="w-5 h-5" />
                Registrar conductor
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8"
                onClick={() => setIsExpanded(true)}
              >
                Descargar
              </Button>
            </div>
          </div>
        )}

        {/* Panel expandido */}
        {isExpanded && (
          <div className="h-full p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Descarga MyDriver</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card Play Store */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
                      alt="Google Play"
                      className="h-12"
                    />
                    <div>
                      <h3 className="font-semibold">Google Play</h3>
                      <p className="text-sm text-gray-500">Android 6.0 o superior</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <QrCode className="w-32 h-32 mx-auto" />
                    <Button className="w-full bg-primary">Descargar</Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Share2 className="mr-2" />
                        Compartir
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Download className="mr-2" />
                        Guardar QR
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Card App Store */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
                      alt="App Store"
                      className="h-12"
                    />
                    <div>
                      <h3 className="font-semibold">App Store</h3>
                      <p className="text-sm text-gray-500">iOS 13.0 o superior</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <QrCode className="w-32 h-32 mx-auto" />
                    <Button className="w-full bg-primary">Descargar</Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Share2 className="mr-2" />
                        Compartir
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Download className="mr-2" />
                        Guardar QR
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
