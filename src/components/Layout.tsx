import { useState } from 'react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showFloatingCTA?: boolean;
  embedFormUrl?: string;
}

export const Layout = ({ children, showFloatingCTA = false, embedFormUrl }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {showFloatingCTA && embedFormUrl && (
        <iframe
          src={embedFormUrl}
          width="100%"
          height="100"
          style={{
            border: 'none',
            borderRadius: '8px',
            position: 'fixed',
            bottom: '0px',
            zIndex: 1000,
          }}
          title="MyDriver Form"
        />
      )}
    </div>
  );
};
