import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServicios = () => {
    const element = document.getElementById('servicios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Acompañamiento integral para tu crecimiento
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Soy un emprendedor social especializado en <strong className="text-primary">agilismo</strong> y 
            <strong className="text-primary"> acompañamiento personalizado</strong>. Te ayudo a materializar 
            tus ideas desde lo personal hasta lo digital.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContacto}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-strong text-lg px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar mi proceso
            </Button>
            <Button 
              onClick={scrollToServicios}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              Conocer servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;