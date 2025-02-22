
import { useState } from 'react';
import { Share2, QrCode, Download, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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
              <span className="text-lg font-semibold">Descarga MyDriver</span>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 gap-2"
              onClick={() => window.open(storeUrl, '_blank')}
            >
              {isIOS ? <Apple className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              Descargar
            </Button>
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
