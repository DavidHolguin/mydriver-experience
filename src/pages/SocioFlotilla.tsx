import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaCar, FaHandshake, FaShieldAlt, FaChartLine, FaPlus, FaMinus } from 'react-icons/fa';

// --- Componentes Auxiliares con Animaciones ---

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className, id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const faqItems = [
    { q: '¿Puedo recibir el pago de forma semanal?', a: 'Sí, tienes la opción semanal de $2.500, quincenal de $5.000 o mensual de $10.000.' },
    { q: '¿Qué sucede si el conductor incumple?', a: 'MyDriver supervisa y capacita a todos los choferes; ante cualquier incidente, actuamos de inmediato.' },
    { q: '¿Cómo accedo a la ubicación de mi coche?', a: 'Con nuestra app o portal web recibirás acceso en tiempo real.' },
];

const FaqItem: React.FC<{ item: {q: string, a: string} }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div className="border-b border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-800">{item.q}</h4>
                <div className="text-xl text-red-700">{isOpen ? <FaMinus /> : <FaPlus />}</div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <p className="text-gray-600">{item.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Componente Principal ---

const SocioFlotilla: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* --- Hero Section --- */}
      <motion.div 
        className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: `url('/images/heroSocioFlotilla.webp')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.h1 
            className="text-4xl md:text-6xl font-extrabold z-10 leading-tight drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            Haz que tu coche trabaje por ti: <br/> Gana $10.000 mensuales <span className="text-red-500">SIN</span> conducir
        </motion.h1>
        <motion.p 
            className="text-lg md:text-xl max-w-2xl mt-4 z-10 drop-shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            Conviértete en Socio Flotilla MyDriver: nosotros certificamos chóferes, cuidamos tu auto y te garantizamos ingresos fijos.
        </motion.p>
        <motion.a 
            href="https://wa.me/573001234567?text=¡Hola%20MyDriver!%20Quiero%20información%20para%20ser%20socio%20flotilla."
            className="mt-8 z-10 bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider hover:bg-red-800 transition-transform hover:scale-105 shadow-lg"
            target="_blank" rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
        >
            Quiero ser socio
        </motion.a>
      </motion.div>

      {/* --- ¿Cómo funciona? --- */}
      <AnimatedSection className="py-16 md:py-24 px-6 container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">¿Cómo funciona?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {[ { icon: FaCar, title: "Registra tu auto", desc: "(modelo 2020–2025)" }, { icon: FaHandshake, title: "Afíliate", desc: "Firma de contrato y pago único" }, { icon: FaShieldAlt, title: "Instalamos GPS", desc: "Monitoreo de última generación" }, { icon: FaChartLine, title: "¡Gana Dinero!", desc: "Tu coche trabaja 24/7 por ti" } ].map((step, index) => (
                <div key={index} className="flex items-center gap-4 md:flex-col md:gap-2">
                    <div className="text-6xl md:text-8xl font-extrabold text-red-200">0{index + 1}</div>
                    <div className="text-left md:text-center">
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </AnimatedSection>

      {/* --- Beneficios --- */}
      <AnimatedSection className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cero Preocupaciones, <br/>Control Total.</h2>
                <ul className="space-y-4">
                    <li className="flex items-start"><FaChartLine className="text-red-700 text-2xl mr-4 mt-1"/><div><h4 className="font-bold">Ingresos Fijos Garantizados</h4><p className="text-gray-600">$10.000 mensuales, con opción quincenal o semanal.</p></div></li>
                    <li className="flex items-start"><FaShieldAlt className="text-red-700 text-2xl mr-4 mt-1"/><div><h4 className="font-bold">Riesgo Cero</h4><p className="text-gray-600">Asumimos costos por accidentes y tú solo cubres el deducible en robo o pérdida total.</p></div></li>
                </ul>
            </div>
            <div className="order-1 md:order-2">
                <img src="/images/socioFlotillaCliente.webp" alt="Cliente satisfecho" className="rounded-2xl shadow-2xl w-full h-auto"/>
            </div>
        </div>
      </AnimatedSection>

      {/* --- ¿Por qué MyDriver? --- */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="/images/socioFlotillaEquipo.webp" alt="Equipo MyDriver" className="rounded-2xl shadow-2xl w-full h-auto"/>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tu Inversión en Manos Expertas</h2>
                <p className="text-gray-600 mb-6">Con años de experiencia y decenas de socios satisfechos, garantizamos transparencia, pagos puntuales y la protección total de tu vehículo.</p>
                <a href="#faq" className="text-red-700 font-bold hover:underline">Ver Preguntas Frecuentes &rarr;</a>
            </div>
        </div>
      </AnimatedSection>

      {/* --- FAQ --- */}
      <AnimatedSection id="faq" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
            {faqItems.map((item, index) => <FaqItem key={index} item={item} />)}
        </div>
      </AnimatedSection>

      {/* --- Final CTA --- */}
      <AnimatedSection className="bg-red-700 text-white text-center py-16 md:py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Únete hoy y pon tu coche a generar ingresos!</h2>
        <p className="max-w-2xl mx-auto mb-8">Escríbenos por WhatsApp y comienza a ganar sin conducir.</p>
        <a href="https://wa.me/573001234567?text=¡Hola%20MyDriver!%20Quiero%20información%20para%20ser%20socio%20flotilla." className="bg-white text-red-700 font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg" target="_blank" rel="noopener noreferrer">
            Contactar en WhatsApp
        </a>
      </AnimatedSection>

      {/* --- Floating WhatsApp Button --- */}
      <a href="https://wa.me/573001234567?text=¡Hola%20MyDriver!%20Quiero%20información%20para%20ser%20socio%20flotilla." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50">
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default SocioFlotilla;

