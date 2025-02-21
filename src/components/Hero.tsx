
export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(public/lovable-uploads/cef10fb2-b4df-4940-be7d-f7c62a139e84.png)`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Muévete por tu ciudad con MyDriver
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          La app donde recibes más y viajas mejor. Únete a la revolución del transporte privado.
        </p>
        <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white">
          Descarga MyDriver
        </Button>
      </div>
    </div>
  );
};
