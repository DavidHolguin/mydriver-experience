
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { DownloadBar } from '@/components/DownloadBar';

const TerminosCondiciones = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Términos y Condiciones
            </h1>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">1. Introducción</h2>
              <p className="text-gray-600 leading-relaxed">
                Al acceder y utilizar los servicios de MyDriver, aceptas estar sujeto a los siguientes términos y condiciones.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">2. Servicios</h2>
              <p className="text-gray-600 leading-relaxed">
                MyDriver proporciona una plataforma tecnológica que permite a los usuarios conectar con conductores y servicios de transporte.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">3. Responsabilidades del Usuario</h2>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                <li>Proporcionar información precisa y actualizada</li>
                <li>Mantener la confidencialidad de su cuenta</li>
                <li>Cumplir con las leyes y regulaciones locales</li>
                <li>No usar el servicio para actividades ilegales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">4. Política de Cancelación</h2>
              <p className="text-gray-600 leading-relaxed">
                Los usuarios pueden cancelar un servicio según los términos específicos de cada tipo de servicio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">5. Modificaciones</h2>
              <p className="text-gray-600 leading-relaxed">
                MyDriver se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación.
              </p>
            </section>
          </div>
        </div>
      </div>
      <DownloadBar />
    </>
  );
};

export default TerminosCondiciones;
