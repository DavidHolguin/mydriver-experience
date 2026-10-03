import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Car, Package, Building2, Sparkles, PartyPopper, Users, CreditCard, Bike, Store, Truck, MapPin } from 'lucide-react';
import { WHATSAPP_LINKS } from '@/config/constants';

export const Navbar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent md:bg-transparent bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="MyDriver Logo" className="h-10" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
           {/* Servicios Dropdown */}
           <div 
             className="relative group h-full flex items-center"
             onMouseEnter={() => setActiveDropdown('servicios')}
             onMouseLeave={() => setActiveDropdown(null)}
           >
             <button className="flex items-center space-x-1 font-medium hover:text-[#C41E1E] transition-colors py-8">
               <span>Servicios</span>
               <ChevronDown className="w-4 h-4" />
             </button>
             
             <div 
               className={`absolute top-[80px] left-0 bg-white rounded-[24px] shadow-lg p-8 min-w-[500px] transition-all duration-300 origin-top-left ${
                 activeDropdown === 'servicios' ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
               }`}
             >
               <div className="grid grid-cols-2 gap-8">
                 <div>
                   <h3 className="font-semibold text-gray-900 mb-4 text-lg">Movilidad</h3>
                   <ul className="space-y-4">
                     <li>
                       <Link to="/" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                         <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                           <Car className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                         </div>
                         <span>Viajes en Ciudad</span>
                       </Link>
                     </li>
                     <li>
                       <Link to="/mydriver-cargo" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                         <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                           <Package className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                         </div>
                         <span>MyDriver Cargo</span>
                       </Link>
                     </li>
                     <li>
                       <a href={WHATSAPP_LINKS?.empresas || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                         <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                           <Building2 className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                         </div>
                         <span>Transporte Corporativo</span>
                       </a>
                     </li>
                   </ul>
                 </div>
                 <div>
                   <div className="flex items-center justify-between mb-4">
                     <h3 className="font-semibold text-gray-900 text-lg">MyDriver Experience</h3>
                     <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-red/10 text-brand-red">
                       Por Temporadas
                     </span>
                   </div>
                   <ul className="space-y-4">
                     <li>
                       <Link to="/santuario-luciernagas" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                         <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                           <Sparkles className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                         </div>
                         <span>Santuario Luciérnagas</span>
                       </Link>
                     </li>
                     <li>
                       <Link to="/carnaval-veracruz" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                         <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                           <PartyPopper className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                         </div>
                         <span>Carnaval Veracruz</span>
                       </Link>
                     </li>
                     <li className="pt-2 border-t border-gray-100">
                       <Link to="/destinos" className="flex items-center space-x-2 text-brand-red font-semibold hover:underline text-xs group/link">
                         <MapPin className="w-4 h-4 text-brand-red" />
                         <span>Ver Todos los Destinos →</span>
                       </Link>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>

           {/* Gana con MyDriver Dropdown */}
           <div 
             className="relative group h-full flex items-center"
             onMouseEnter={() => setActiveDropdown('gana')}
             onMouseLeave={() => setActiveDropdown(null)}
           >
             <button className="flex items-center space-x-1 font-medium hover:text-[#C41E1E] transition-colors py-8">
               <span>Gana con MyDriver</span>
               <ChevronDown className="w-4 h-4" />
             </button>
             
             <div 
               className={`absolute top-[80px] left-1/2 -translate-x-1/2 bg-white rounded-[24px] shadow-lg p-8 min-w-[320px] transition-all duration-300 origin-top ${
                 activeDropdown === 'gana' ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
               }`}
             >
               <ul className="space-y-4">
                 <li>
                   <Link to="/socio-conductor" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                       <Car className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                     </div>
                     <span>Socio Conductor</span>
                   </Link>
                 </li>
                 <li>
                   <Link to="/conductor-standard" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                       <CreditCard className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                     </div>
                     <span>Conductor Standard</span>
                   </Link>
                 </li>
                 <li>
                   <Link to="/socio-repartidor" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                       <Bike className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                     </div>
                     <span>Socio Repartidor</span>
                   </Link>
                 </li>
                 <li>
                   <Link to="/negocio-aliado" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                       <Store className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                     </div>
                     <span>Negocio Aliado</span>
                   </Link>
                 </li>
                 <li>
                   <Link to="/socio-flotilla" className="flex items-center space-x-3 text-gray-600 hover:text-[#C41E1E] transition-colors group/link">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover/link:bg-red-50 transition-colors">
                       <Truck className="w-5 h-5 text-gray-500 group-hover/link:text-[#C41E1E]" />
                     </div>
                     <span>Socio Flotilla</span>
                   </Link>
                 </li>
               </ul>
             </div>
           </div>

           <a href="/#seguridad" className="font-medium hover:text-[#C41E1E] transition-colors">Seguridad</a>
           <Link to="/blog" className="font-medium hover:text-[#C41E1E] transition-colors">Blog</Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
           <Link 
             to="/descargas" 
             className="bg-brand-red text-white hover:bg-brand-red-hover px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm"
           >
             Descarga la App
           </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 p-2 focus:outline-none"
          onClick={onOpenMenu}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
};
