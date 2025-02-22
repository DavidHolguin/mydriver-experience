
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const storeUrl = isIOS 
    ? "https://apps.apple.com/app/mydriver"
    : "https://play.google.com/store/apps/details?id=mydriver";

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-40 flex items-center px-4 shadow-sm">
      <div className="flex items-center justify-between w-full">
        <Button 
          variant="ghost" 
          className="w-10 h-10 rounded-full bg-[#ffd2d2] hover:bg-[#ffd2d2]/90 p-0 flex items-center justify-center"
          onClick={onOpenSidebar}
        >
          <Menu className="w-5 h-5 text-primary" />
        </Button>
        <div className="flex items-center gap-4">
          <img 
            src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
            alt="MyDriver Logo"
            className="h-8"
          />
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-6"
            onClick={() => window.open(storeUrl, '_blank')}
          >
            <img 
              src={isIOS 
                ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='white' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'/%3E%3C/svg%3E"
                : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'/%3E%3C/svg%3E"
              }
              className="w-5 h-5 mr-2"
              alt={isIOS ? "App Store" : "Play Store"}
            />
            Descargar MyDriver
          </Button>
        </div>
      </div>
    </nav>
  );
};
