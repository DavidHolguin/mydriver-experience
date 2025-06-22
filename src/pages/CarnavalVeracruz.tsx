import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Car, ShieldCheck, Clock, Users, Star, MessageSquare, Map, CheckCircle, TrafficCone, ParkingCircleOff, Smile, ChevronDown, Calendar } from 'lucide-react';

// --- Helper Components ---

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 mr-2" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-5 text-left">
        <span className="text-lg font-medium text-[#faf2f2]">{question}</span>
        <ChevronDown className={`w-6 h-6 text-[#ab1818] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5 pr-6 text-[#faf2f2] text-opacity-80">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---

const CarnavalVeracruz = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5212461977827?text=Hola,%20me%20gustaría%20reservar%20un%20viaje%20para%20el%20Carnaval%20de%20Veracruz.";

  const faqData = [
    { q: "¿Puedo reservar para varios días?", a: "¡Por supuesto! Puedes agendar todos tus viajes para la semana del carnaval con nosotros. Es lo más recomendable." },
    { q: "¿Realizan viajes desde/hacia el Aeropuerto Internacional de Veracruz (Heriberto Jara)?", a: "Sí, ofrecemos un servicio puntual y seguro para tus traslados desde y hacia el aeropuerto." },
    { q: "¿Cómo se realiza el pago?", a: "Al momento de reservar por WhatsApp, te indicaremos las opciones de pago disponibles (transferencia, efectivo, etc.)." },
    { q: "¿Puedo reservar para un grupo grande?", a: "Claro, infórmanos cuántas personas son y buscaremos la mejor opción de vehículo para tu grupo." },
  ];

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div style={{ backgroundColor: '#111827' }}>

        {/* --- Section 1: Hero --- */}
        <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            {/* Desktop Video */}
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover hidden md:block">
                <source src="/videos/heroCarnavalPc.mp4" type="video/mp4" />
            </video>
            {/* Mobile Video */}
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover block md:hidden">
                <source src="/videos/heroCarnavalMobile.mp4" type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              ¡Vive el Carnaval de Veracruz 2025, MyDriver te lleva a la fiesta!
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-[#faf2f2]">
              Olvídate del tráfico, del estacionamiento y de las complicaciones. Tu conductor privado está listo para llevarte a vivir los 101 años de la fiesta más alegre del mundo.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-lg transition-transform duration-300 transform hover:scale-105" style={{ backgroundColor: '#ab1818' }}>
              <WhatsAppIcon />
              ¡Reservar mi viaje ahora!
            </a>
          </div>
        </section>

        {/* --- Section 2: Problem & Solution --- */}
        <section className="py-20 bg-[#faf2f2] text-[#111827]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">La Alegría es tuya, el camino es nuestro.</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg">
                El Carnaval de Veracruz es para disfrutar, bailar y celebrar. No para estresarse buscando cómo llegar a los desfiles o regresar a tu hotel.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Problems Card */}
              <div className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-center text-white bg-gray-900 shadow-2xl">
                <img src="/images/apuros.webp" className="absolute top-0 left-0 w-full h-full object-cover opacity-20 filter grayscale" alt="Carnaval con estrés" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-center">Los problemas de siempre...</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center"><TrafficCone className="w-8 h-8 text-[#ab1818] mr-4 flex-shrink-0"/> <span>Tráfico abrumador</span></li>
                    <li className="flex items-center"><ParkingCircleOff className="w-8 h-8 text-[#ab1818] mr-4 flex-shrink-0"/> <span>Sin estacionamiento</span></li>
                    <li className="flex items-center"><Clock className="w-8 h-8 text-[#ab1818] mr-4 flex-shrink-0"/> <span>Largas esperas y retrasos</span></li>
                  </ul>
                </div>
              </div>

              {/* Solutions Card */}
              <div className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-center text-white bg-gray-900 shadow-2xl">
                <img src="/images/carnavalVeracurz.webp" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" alt="Carnaval sin estrés" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-center text-green-400">La solución MyDriver</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center"><Car className="w-8 h-8 text-green-400 mr-4 flex-shrink-0"/> <span>Viaje fluido y directo</span></li>
                    <li className="flex items-center"><Smile className="w-8 h-8 text-green-400 mr-4 flex-shrink-0"/> <span>Pasajero relajado y feliz</span></li>
                    <li className="flex items-center"><Map className="w-8 h-8 text-green-400 mr-4 flex-shrink-0"/> <span>Llegada puntual a tu destino</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 3: How It Works --- */}
        <section className="py-20 bg-[#111827] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Asegura tu transporte en 3 simples pasos:</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center">
                <div className="bg-[#ab1818] p-5 rounded-full"><MessageSquare className="w-12 h-12 text-white"/></div>
                <h3 className="mt-4 text-xl font-bold">1. Haz clic y saluda</h3>
                <p className="mt-2 text-[#faf2f2]">Presiona nuestro botón de WhatsApp para iniciar una conversación.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#ab1818] p-5 rounded-full"><Map className="w-12 h-12 text-white"/></div>
                <h3 className="mt-4 text-xl font-bold">2. Dinos tu plan</h3>
                <p className="mt-2 text-[#faf2f2]">Indica el día, la hora y las rutas que necesitas.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#ab1818] p-5 rounded-full"><CheckCircle className="w-12 h-12 text-white"/></div>
                <h3 className="mt-4 text-xl font-bold">3. Confirma y listo</h3>
                <p className="mt-2 text-[#faf2f2]">Recibe la confirmación. ¡Tu conductor te estará esperando!</p>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-[#111827] bg-[#faf2f2] rounded-lg transition-transform duration-300 transform hover:scale-105">
              <WhatsAppIcon />
              Chatear para reservar
            </a>
          </div>
        </section>

        {/* --- Section 4: Benefits --- */}
        <section className="py-20 bg-[#faf2f2] text-[#111827]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Viaja con la tranquilidad que mereces</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ { icon: <Calendar className="w-8 h-8"/>, title: "Reservas Anticipadas", text: "Asegura todos tus traslados para el carnaval desde hoy." }, { icon: <Users className="w-8 h-8"/>, title: "Conductores de Confianza", text: "Pilotos locales y verificados que conocen las mejores rutas." }, { icon: <ShieldCheck className="w-8 h-8"/>, title: "Seguridad 24/7", text: "Disfruta de los paseos nocturnos. Estamos disponibles para llevarte de vuelta." }, { icon: <Car className="w-8 h-8"/>, title: "Comodidad Garantizada", text: "Vehículos limpios, cómodos y con aire acondicionado." }, { icon: <Star className="w-8 h-8"/>, title: "Precios Claros", text: "Consulta nuestras tarifas sin sorpresas ni tarifas dinámicas." }, { icon: <Map className="w-8 h-8"/>, title: "Desde/Hacia Aeropuerto", text: "Servicio puntual y seguro para tus traslados al aeropuerto." } ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ab1818]">
                  <div className="text-[#ab1818]">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 5: Final CTA --- */}
        <section className="py-20 text-white text-center" style={{ backgroundColor: '#ab1818' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold">¿Listo para el Carnaval más Alegre del Mundo?</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-[#faf2f2]">
              Los carros alegóricos, las comparsas y la música te esperan. Del 26 de junio al 2 de julio, Veracruz se viste de fiesta. No dejes que el transporte sea una preocupación.
              <br/><br/>
              <span className="font-bold">¡Más de 100 años de tradición te esperan, y MyDriver te lleva!</span>
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-[#ab1818] bg-white rounded-lg transition-transform duration-300 transform hover:scale-105">
              <WhatsAppIcon />
              ¡Quiero mi transporte para el Carnaval!
            </a>
          </div>
        </section>

        {/* --- Section 6: FAQ --- */}
        <section className="py-20 bg-[#111827] text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
            <div className="space-y-2">
              {faqData.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
            </div>
          </div>
        </section>

        {/* --- Sticky WhatsApp Button --- */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
};

export default CarnavalVeracruz;
