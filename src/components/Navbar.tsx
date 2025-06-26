
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-40 flex items-center px-4 shadow-sm border-b-2 border-[#ab1818]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="w-8 h-8 border border-primary rounded-full bg-[#ffd2d2] hover:bg-[#ffd2d2]/90 p-0 flex items-center justify-center mr-4"
            onClick={onOpenSidebar}
          >
            <Menu className="w-5 h-5 text-primary" />
          </Button>
          <img 
            src="./public/images/logoMyDriverSinFondo.png"
            alt="MyDriver Logo"
            className="h-11"
          />
        </div>
        <div className="flex items-center space-x-2">
          <a href="https://www.tiktok.com/@mydrivermexico" target="_blank" rel="noopener noreferrer">
            <div className="w-5 h-5 rounded-full bg-[#ffd2d2] p-4 border border-primary hover:bg-[#ffd2d2]/90 p-0 flex items-center justify-center"><FontAwesomeIcon icon={faTiktok} className="w-5 h-5 text-primary hover:text-primary" /></div>
          </a>
          <a href="https://www.facebook.com/people/myDriver-Mx/61577308812929/" target="_blank" rel="noopener noreferrer">
            <div className="w-5 h-5 rounded-full bg-[#ffd2d2] p-4 border border-primary hover:bg-[#ffd2d2]/90 p-0 flex items-center justify-center"><FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-primary hover:text-primary" /></div>
          </a>
          <a href="https://wa.me/5212461977827" target="_blank" rel="noopener noreferrer">
            <div className="w-5 h-5 rounded-full bg-[#ffd2d2] p-4 border border-primary hover:bg-[#ffd2d2]/90 p-0 flex items-center justify-center"><FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-primary hover:text-primary" /></div>
          </a>
        </div>
      </div>
    </nav>
  );
};
