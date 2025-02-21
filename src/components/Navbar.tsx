
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-40 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          className="mr-4"
          onClick={onOpenSidebar}
        >
          <Menu className="w-6 h-6" />
        </Button>
        <img 
          src="https://monkeytwomonkey.com/wp-content/uploads/2021/10/cropped-mydriver-logo-sin-fondo.png"
          alt="MyDriver Logo"
          className="h-8"
        />
      </div>
    </nav>
  );
};
