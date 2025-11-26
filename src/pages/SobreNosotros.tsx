
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

import { Users, Target, Heart, Globe } from 'lucide-react';

const SobreNosotros = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const values = [
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos una comunidad sólida de conductores y pasajeros."
    },
    {
      icon: Target,
      title: "Innovación",
      description: "Mejoramos constantemente nuestra tecnología y servicios."
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con la seguridad y satisfacción."
    },
    {
      icon: Globe,
      title: "Sostenibilidad",
      description: "Trabajamos por un transporte más eficiente y ecológico."
    }
  ];

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-primary/5 pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Transformando la movilidad urbana
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in">
                MyDriver nació con la visión de hacer el transporte más accesible, seguro y eficiente para todos.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#ab1818,transparent)]" />
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Nuestra Historia
              </h2>
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">2020</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Los inicios</h3>
                    <p className="text-gray-600">
                      MyDriver comenzó como una idea para mejorar el transporte urbano, con un equipo pequeño pero apasionado.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">2022</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expansión</h3>
                    <p className="text-gray-600">
                      Expandimos nuestros servicios a más ciudades y lanzamos nuevas características para mejorar la experiencia.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">2024</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                    <p className="text-gray-600">
                      Implementamos tecnologías avanzadas y expandimos nuestra gama de servicios para incluir opciones de carga y delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default SobreNosotros;
