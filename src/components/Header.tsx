import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="font-bold text-xl text-primary">
            HolistiKit
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre mí
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              variant="default"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
            >
              Contacto
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection('contacto')}
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              Contacto
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;