
import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-primary-light rounded-full animate-spin"></div>
        <img 
          src="public/lovable-uploads/134ddff4-77ab-4ee6-8e45-db55fe4b1bde.png"
          alt="MyDriver Logo"
          className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
