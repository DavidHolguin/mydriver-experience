
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-lg z-40 flex items-center px-4">
      <Button 
        variant="ghost" 
        className="mr-4 hover:bg-white/10"
        onClick={onOpenSidebar}
      >
        <Menu className="w-6 h-6" />
      </Button>
      <img 
        src="public/lovable-uploads/134ddff4-77ab-4ee6-8e45-db55fe4b1bde.png"
        alt="MyDriver Logo"
        className="h-8"
      />
    </nav>
  );
};
