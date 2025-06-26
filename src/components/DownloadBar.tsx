import { Button } from './ui/button';

export const DownloadBar = () => {
  const whatsappLink = "https://wa.me/5212461977827?text=Hola,%20me%20gustaría%20registrarme%20como%20conductor.";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="h-16 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <img 
            src="https://monkeytwomonkey.com/wp-content/uploads/2025/02/CONDUCTOR-_2_-1-e1740108314236.webp"
            alt="MyDriver Logo"
            className="h-8 w-auto"
          />
          <p className="font-medium text-gray-800">¡Únete como conductor!</p>
        </div>
        <Button 
          asChild
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Registrarme
          </a>
        </Button>
      </div>
    </div>
  );
};
