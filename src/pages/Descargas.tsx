import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { APP_LINKS, APP_DISPONIBLE, APP_PROXIMAMENTE_TEXTO } from "@/config/constants";
import { Smartphone, Download, Share2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Descargas() {
  const [activeTab, setActiveTab] = useState<"pasajero" | "conductor">("pasajero");
  const [platform, setPlatform] = useState<"ios" | "android">("android");

  const currentLink = APP_LINKS[activeTab][platform];

  const handleShareQR = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Descarga MyDriver ${activeTab === 'pasajero' ? 'Pasajero' : 'Conductor'}`,
          text: 'Descarga la app de MyDriver y empieza a viajar de forma segura.',
          url: currentLink,
        });
      } else {
        await navigator.clipboard.writeText(currentLink);
        alert("Enlace copiado al portapapeles");
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Layout>
      <section className="bg-brand-navy text-white pt-32 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {APP_DISPONIBLE ? 'Descarga MyDriver' : APP_PROXIMAMENTE_TEXTO}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {APP_DISPONIBLE
              ? 'La mejor experiencia de movilidad al alcance de tu mano. Elige tu versión y comienza hoy mismo.'
              : 'Estamos afinando los últimos detalles de la app de MyDriver para pasajeros y conductores. Estará disponible muy pronto en Google Play y App Store.'}
          </p>
        </div>
      </section>

      <SectionContainer background="light">
        <div className="max-w-4xl mx-auto bg-white rounded-card shadow-card overflow-hidden">
          <div className="flex border-b border-border-subtle">
            <button 
              className={cn(
                "flex-1 py-6 text-center text-lg font-semibold transition-colors duration-200",
                activeTab === "pasajero" 
                  ? "bg-brand-red text-white" 
                  : "bg-surface-light text-text-secondary hover:bg-gray-100"
              )}
              onClick={() => setActiveTab("pasajero")}
            >
              Soy Pasajero
            </button>
            <button 
              className={cn(
                "flex-1 py-6 text-center text-lg font-semibold transition-colors duration-200",
                activeTab === "conductor" 
                  ? "bg-brand-red text-white" 
                  : "bg-surface-light text-text-secondary hover:bg-gray-100"
              )}
              onClick={() => setActiveTab("conductor")}
            >
              Soy Conductor
            </button>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
              
              <div className="flex-1 space-y-8 w-full max-w-sm">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4 text-center md:text-left">
                    Selecciona tu dispositivo
                  </h3>
                  <div className="flex gap-4">
                    <Button 
                      variant={platform === "android" ? "default" : "outline"}
                      className={cn(
                        "flex-1 rounded-pill",
                        platform === "android" && "bg-brand-navy text-white hover:bg-brand-navy/90"
                      )}
                      onClick={() => setPlatform("android")}
                    >
                      <Smartphone className="mr-2 h-4 w-4" />
                      Android
                    </Button>
                    <Button 
                      variant={platform === "ios" ? "default" : "outline"}
                      className={cn(
                        "flex-1 rounded-pill",
                        platform === "ios" && "bg-brand-navy text-white hover:bg-brand-navy/90"
                      )}
                      onClick={() => setPlatform("ios")}
                    >
                      <Smartphone className="mr-2 h-4 w-4" />
                      iOS
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-red shrink-0" />
                    <p className="text-text-secondary">Registro rápido y sencillo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-red shrink-0" />
                    <p className="text-text-secondary">Interfaz intuitiva y fácil de usar</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-red shrink-0" />
                    <p className="text-text-secondary">Soporte 24/7 disponible en la app</p>
                  </div>
                </div>

                {APP_DISPONIBLE ? (
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-brand-red hover:bg-red-700 text-white rounded-pill h-14 text-lg"
                  >
                    <a href={currentLink} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      Descargar Ahora
                    </a>
                  </Button>
                ) : (
                  <div className="w-full h-14 rounded-pill border-2 border-dashed border-brand-red/40 text-brand-red font-bold flex items-center justify-center gap-2 text-lg">
                    <Download className="h-5 w-5" />
                    {APP_PROXIMAMENTE_TEXTO}
                  </div>
                )}
              </div>

              {APP_DISPONIBLE ? (
                <div className="flex flex-col items-center p-8 bg-surface-muted rounded-2xl border border-border-subtle">
                  <p className="text-sm font-medium text-brand-navy mb-4 text-center">
                    Escanea para descargar
                  </p>
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentLink)}`}
                      alt={`QR Code MyDriver ${activeTab}`}
                      className="w-[200px] h-[200px] object-contain rounded-lg"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    className="rounded-pill border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors"
                    onClick={handleShareQR}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartir Código
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center p-8 bg-surface-muted rounded-2xl border border-border-subtle max-w-xs text-center">
                  <p className="text-sm text-text-secondary mb-6">
                    Déjanos tus datos y te avisamos en cuanto la app esté disponible para tu teléfono.
                  </p>
                  <Button
                    asChild
                    className="rounded-pill bg-brand-red hover:bg-red-700 text-white"
                  >
                    <a
                      href={`https://wa.me/5212215590718?text=${encodeURIComponent('Hola, quiero que me avisen cuando la app de MyDriver esté disponible.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Avísenme por WhatsApp
                    </a>
                  </Button>
                </div>
              )}

            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
}

export default Descargas;
