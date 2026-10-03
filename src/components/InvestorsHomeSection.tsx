import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINKS } from '@/config/constants';
import { 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Lock, 
  BarChart3, 
  Award, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CITIES = [
  { name: 'Tlaxcala', state: 'Expansión Activa', spotsLeft: 3, total: 9 },
  { name: 'Puebla', state: 'Lanzamiento', spotsLeft: 4, total: 9 },
  { name: 'Guadalajara', state: 'Convocatoria', spotsLeft: 6, total: 9 },
];

export const InvestorsHomeSection = () => {
  return (
    <section className="relative py-24 bg-brand-navy text-white overflow-hidden" id="inversionistas-destacado">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#142333] to-[#0A121A] opacity-95" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-brand-red" />
            Convocatoria Exclusiva para Cofundadores
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Sé Socio Inversionista y Cofundador de <span className="text-brand-red">MyDriver</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 font-light leading-relaxed">
            Solo <span className="font-semibold text-white">9 cupos por ciudad</span>. Participa directamente en los ingresos operativos y el volumen transaccional de toda una plaza con certeza jurídica notariada.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Investor Executive Card with Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/socio-inversionista-hero.jpg"
                alt="Socio Inversionista Ejecutivo MyDriver"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-red" />
                <span>Régimen Mercantil de Participación</span>
              </div>

              {/* Bottom Quote / Metrics Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-brand-red" />
                    Telemetría y Facturación Transparente
                  </span>
                  <span className="text-emerald-400 font-semibold">En tiempo real</span>
                </div>
                <p className="text-xs text-gray-200">
                  Acceso directo al dashboard del CRM con auditoría de viajes, métricas de retención y liquidaciones mensuales periódicas.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Plazas & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            {/* Scarcity City Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CITIES.map((city) => (
                <div
                  key={city.name}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-brand-red/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{city.name}</span>
                    <span className="text-[10px] uppercase font-bold text-brand-red">{city.spotsLeft} libres</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-3">{city.state}</p>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-brand-red h-1.5 rounded-full"
                      style={{ width: `${((city.total - city.spotsLeft) / city.total) * 100}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1.5 text-right font-medium">
                    {city.total - city.spotsLeft} de {city.total} asignados
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Rendimiento sobre el Volumen de la Ciudad</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Participas de los ingresos generados en todos los viajes urbanos, fletes de paquetería y viajes turísticos de tu entidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Certeza Notariada sin Trabas Societarias</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Contratos mercantiles de participación legalmente verificados. Protege tu capital con reglas claras y liquidaciones formales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Asiento en el Consejo Consultivo Local</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Voz activa en la toma de decisiones, alianzas corporativas y expansión territorial de la marca en tu estado.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-brand-red-dark text-white rounded-pill px-8 py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/socio-inversionista">
                  Conocer Programa de Inversionistas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-pill bg-white/5 border-white/20 hover:bg-white/15 text-white px-8 py-6 text-base font-semibold"
              >
                <a href={WHATSAPP_LINKS.socioInversionista} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2 text-green-400" />
                  Agendar Sesión Privada
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
