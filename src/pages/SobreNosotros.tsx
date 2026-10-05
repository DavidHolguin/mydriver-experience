import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Users, Shield, Zap } from "lucide-react";
import { APP_DISPONIBLE, APP_PROXIMAMENTE_TEXTO } from "@/config/constants";

export default function SobreNosotros() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-brand-red" />,
      title: "Nuestra Misión",
      description: "Ofrecer soluciones de movilidad seguras, eficientes y accesibles, conectando personas y negocios."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-red" />,
      title: "Comunidad",
      description: "Construimos una red sólida donde conductores y pasajeros se benefician mutuamente."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-red" />,
      title: "Seguridad",
      description: "Implementamos los más altos estándares para garantizar viajes tranquilos y protegidos."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-red" />,
      title: "Innovación",
      description: "Mejoramos continuamente nuestra tecnología para brindar la mejor experiencia."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "El Inicio",
      description: "MyDriver nace con la visión de transformar el transporte local."
    },
    {
      year: "2022",
      title: "Expansión",
      description: "Lanzamiento de servicios corporativos y MyDriver Cargo."
    },
    {
      year: "2024",
      title: "Crecimiento Continuo",
      description: "Presencia en múltiples ciudades y más de 10,000 conductores afiliados."
    }
  ];

  return (
    <Layout>
      <section className="bg-brand-navy text-white pt-32 pb-20 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformando la movilidad urbana
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Somos más que una aplicación. Somos un movimiento impulsado por la comunidad para hacer el transporte justo, seguro y eficiente.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">10k+</div>
              <div className="text-sm text-gray-400">Conductores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">5M+</div>
              <div className="text-sm text-gray-400">Viajes completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">4.9</div>
              <div className="text-sm text-gray-400">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">15+</div>
              <div className="text-sm text-gray-400">Ciudades</div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionContainer background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Nuestros Valores</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Los principios que guían cada decisión y cada línea de código que escribimos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-light p-8 rounded-card border border-border-subtle hover:shadow-hover transition-all duration-300"
            >
              <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Nuestra Historia</h2>
            <p className="text-text-secondary">El camino que hemos recorrido hasta ahora.</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border-subtle"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between md:justify-normal ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand-red border-4 border-white shadow-sm z-10 flex items-center justify-center">
                  </div>
                  <div className={`w-full md:w-5/12 bg-white p-6 rounded-card shadow-card ${
                    idx % 2 === 0 ? "md:mr-auto ml-12 md:ml-0" : "md:ml-auto ml-12"
                  }`}>
                    <span className="text-brand-red font-bold text-xl block mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer background="white">
        <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a la familia MyDriver</h2>
            <p className="text-lg text-gray-300 mb-8">
              Ya sea como conductor o pasajero, hay un lugar para ti en nuestra comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white rounded-pill px-8">
                <Link to="/socio-conductor">Ser Conductor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-brand-navy hover:bg-gray-100 bg-white rounded-pill px-8">
                <Link to="/descargas">{APP_DISPONIBLE ? 'Descargar App' : APP_PROXIMAMENTE_TEXTO}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
}
