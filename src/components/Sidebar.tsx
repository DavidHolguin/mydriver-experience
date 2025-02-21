
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { title: 'MyDriver Conductor', url: '#' },
  { title: 'MyDriver Pasajero', url: '#' },
  { title: 'MyDriver Taxi', url: '#' },
  { title: 'MyDriver Fleet', url: '#' },
  { title: 'MyDriver Food', url: '#' },
  { title: 'MyDriver Entrega', url: '#' },
  { title: 'Sobre MyDriver', url: '#' },
];

export const Sidebar = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex justify-between items-center p-4 border-b">
          <img 
            src="public/lovable-uploads/134ddff4-77ab-4ee6-8e45-db55fe4b1bde.png"
            alt="MyDriver Logo"
            className="h-8"
          />
          <Button variant="ghost" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="py-4">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
