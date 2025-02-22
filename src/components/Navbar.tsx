
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
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
        <img 
          src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
          alt="MyDriver Logo"
          className="h-8"
        />
      </div>
    </nav>
  );
};
