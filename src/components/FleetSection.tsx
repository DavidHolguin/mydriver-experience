import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionContainer } from './SectionContainer';
import { WHATSAPP_LINKS } from '@/config/constants';
import { 
  Truck, 
  ShieldCheck, 
  MapPin, 
  Key, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Calculator,
  Sparkles
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const FleetSection = () => {
  const [carCount, setCarCount] = useState<number>(2);
  const monthlyRatePerCar = 10000;
  const totalMonthlyEarnings = carCount * monthlyRatePerCar;

  return (
    <SectionContainer background="white" id="flotilla-destacada">
      <div className="max-w-7xl mx-auto">
        {/* Header Tag */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs md:text-sm font-bold uppercase tracking-wider mb-4 border border-brand-red/20">
            <Truck className="w-4 h-4 text-brand-red" />
            Oportunidad de Alto Rendimiento · Socio Flotilla
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight max-w-3xl">
            Pon tus autos a trabajar y genera hasta <span className="text-brand-red">$10,000 MXN</span> fijos al mes sin conducir
          </h2>
          <p className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl">
            Tú aportas tu vehículo particular o flota. Nosotros certificamos chóferes calificados, instalamos GPS de alta tecnología y te depositamos mes con mes las ganancias fijas y seguras de tus autos desde el primer día.
          </p>
        </div>

        {/* Main Grid: Visual Card & Interactive Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Fleet Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-surface-border group">
              <img
                src="/images/flotilla-corporativa.jpg"
                alt="Flota de vehículos y conductores MyDriver"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Floating Pill Promo */}
              <div className="absolute top-5 left-5 right-5 sm:right-auto bg-brand-red text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs sm:text-sm font-bold">
                <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span>Costo de registro vehicular $11,000 MXN · Promoción octubre $7,500 para los primeros 100 autos</span>
              </div>

              {/* Bottom Card Highlights */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                    📍 Ubicación en Tiempo Real
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                    🔒 Apagado Remoto de Motor
                  </span>
                </div>
                <p className="text-sm text-gray-200 line-clamp-2">
                  Monitoreo 24/7 y certeza legal en cada kilómetro para proteger tu inversión vehicular en todo momento.
                </p>
              </div>
            </div>

            {/* Secondary Floating Overlapping Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-elevated border border-surface-border items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium">Chóferes Verificados</p>
                <p className="text-sm font-bold text-brand-navy">Examen toxicológico y antecedentes aprobados</p>
              </div>
            </div>
          </div>

          {/* Right Column: Earnings Calculator & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Calculator Box */}
            <div className="bg-surface-light rounded-card p-6 md:p-8 border border-surface-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-brand-navy font-bold text-lg">
                  <Calculator className="w-5 h-5 text-brand-red" />
                  <span>Calcula tu Ingreso Mensual</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red">
                  $10,000 MXN / auto
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium text-text-secondary mb-2">
                    <span>Número de autos que deseas registrar:</span>
                    <span className="font-bold text-brand-navy text-base">{carCount} {carCount === 1 ? 'vehículo' : 'vehículos'}</span>
                  </div>
                  {/* Quick Select Buttons */}
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 5, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCarCount(num)}
                        className={`py-2 rounded-xl text-sm font-bold transition-all ${
                          carCount === num
                            ? 'bg-brand-red text-white shadow-md'
                            : 'bg-white text-text-secondary border border-surface-border hover:border-brand-red/40 hover:text-brand-navy'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-surface-border flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold tracking-wider">Tu ingreso fijo estimado:</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-brand-red">
                      ${totalMonthlyEarnings.toLocaleString('es-MX')} MXN <span className="text-xs font-semibold text-text-secondary">/ mes</span>
                    </p>
                  </div>
                  <div className="text-right text-xs text-text-secondary hidden sm:block">
                    <p className="font-semibold text-green-600">✓ Depósitos periódicos</p>
                    <p>✓ Sin manejar ni buscar pasaje</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core 3 Pillars Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Instalación GPS con apagado remoto:</strong> Equipo de alta precisión marca SentinelX con ubicación en tiempo real y apagado de motor ante cualquier eventualidad.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Asesoría jurídica y legal 24/7:</strong> Cobertura integral ante incidentes viales, infracciones o trámites con autoridades. Nosotros nos encargamos de todo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Mantenimiento preventivo supervisado:</strong> Nuestro equipo te avisará cuando tu vehículo requiera revisión periódica y mantenimiento para que le realices sus servicios a tiempo.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-brand-red-dark text-white rounded-pill px-8 py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/socio-flotilla">
                  Conocer más de Socio Flotilla
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-pill border-brand-red/30 hover:border-brand-red text-brand-navy hover:text-brand-red px-8 py-6 text-base font-semibold"
              >
                <a href={WHATSAPP_LINKS.socioFlotilla} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2 text-green-600" />
                  Cotizar mi Flota
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
