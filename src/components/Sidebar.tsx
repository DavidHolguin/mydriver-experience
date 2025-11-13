import { X, Car, CreditCard, Bike, Store, Truck, FileText, ScrollText, User, Mail, Home, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const homeItem = {
  title: 'Inicio',
  url: '/',
  icon: Home
};

const menuItems = [
  {
    group: "Modelos de Negocio",
    items: [
      { 
        title: 'Socio Conductor', 
        url: '/socio-conductor',
        icon: Car 
      },
      { 
        title: 'Conductor Standard', 
        url: '/conductor-standard',
        icon: CreditCard 
      },
      { 
        title: 'Socio Repartidor', 
        url: '/socio-repartidor',
        icon: Bike 
      },
      { 
        title: 'Negocio Aliado', 
        url: '/negocio-aliado',
        icon: Store 
      },
      { 
        title: 'MyDriver Cargo', 
        url: '/mydriver-cargo',
        icon: Truck 
      }
    ]
  },
  {
    group: "Sobre MyDriver",
    items: [
      {
        title: 'Sobre Nosotros',
        url: '/sobre-nosotros',
        icon: User
      },
      {
        title: 'Contáctanos',
        url: '/contacto',
        icon: Mail
      },
      {
        title: 'Descargas',
        url: '/descargas',
        icon: Download
      }
    ]
  },
  {
    group: "Legal",
    items: [
      { 
        title: 'Términos y Condiciones', 
        url: '/terminos',
        icon: FileText 
      },
      { 
        title: 'Política de Privacidad', 
        url: '/politicas',
        icon: ScrollText 
      }
    ]
  }
];

export const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          onClick={onClose}
        />
      )}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <style>{`
          .sidebar-scroll::-webkit-scrollbar {
            width: 8px;
          }
          .sidebar-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .sidebar-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #b70000, #8b0000);
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          .sidebar-scroll::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #d40000, #a00000);
            box-shadow: 0 0 6px rgba(183, 0, 0, 0.3);
          }
          .sidebar-scroll {
            scrollbar-color: #b70000 transparent;
            scrollbar-width: thin;
          }
        `}</style>
        <div className="flex justify-between items-center p-4 border-b">
          <img 
            src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
            alt="MyDriver Logo"
            className="h-8"
          />
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onClose} 
            className="border-2 border-primary text-primary hover:bg-primary/5 shadow-md hover:shadow-lg transition-all rounded-lg"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 py-4 space-y-6 overflow-y-auto sidebar-scroll pr-2">
          <div className="px-3">
            <a
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Inicio</span>
            </a>
          </div>

          {menuItems.map((group) => (
            <div key={group.group} className="px-3">
              <h3 className="text-sm font-semibold text-gray-500 px-3 mb-2">
                {group.group}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
