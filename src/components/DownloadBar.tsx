
import { useState } from 'react';
import { ArrowUp, Share2, QrCode, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div className={`
        fixed bottom-0 left-0 right-0 bg-white z-50 transition-transform duration-300
        ${isExpanded ? 'h-96' : 'h-20'}
      `}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-t-lg p-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ArrowUp className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>
          
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="public/lovable-uploads/134ddff4-77ab-4ee6-8e45-db55fe4b1bde.png"
                alt="MyDriver Logo"
                className="h-8"
              />
              <span className="text-lg font-semibold">Descarga MyDriver</span>
            </div>
            <div className="flex gap-2">
              <Button>Google Play</Button>
              <Button>App Store</Button>
            </div>
          </div>

          {isExpanded && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              <Button className="flex items-center gap-2">
                <Share2 size={20} />
                Compartir App
              </Button>
              <Button className="flex items-center gap-2">
                <QrCode size={20} />
                Generar QR
              </Button>
              <Button className="flex items-center gap-2">
                <Download size={20} />
                Descargar imagen
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
