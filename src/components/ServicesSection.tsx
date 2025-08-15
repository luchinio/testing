import { Card } from "@/components/ui/card";
import { Brain, Heart, Code } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Agilismo & Metodologías",
      description: "Te acompaño implementando metodologías ágiles para organizar tu vida personal y profesional. Scrum, Kanban y técnicas de productividad adaptadas a tu ritmo.",
      features: ["Organización personal", "Gestión de proyectos", "Metodologías ágiles", "Productividad sostenible"]
    },
    {
      icon: Heart,
      title: "Acompañamiento Personal",
      description: "Sesiones 1 a 1 para cuestiones personales y como puente hacia terapias alternativas y complementarias. Un espacio seguro para tu crecimiento.",
      features: ["Sesiones individuales", "Orientación terapéutica", "Desarrollo personal", "Técnicas complementarias"]
    },
    {
      icon: Code,
      title: "Materialización Digital",
      description: "Transformo tus ideas en realidad digital. Desde conceptos hasta aplicaciones web, te acompaño en todo el proceso de digitalización de tu proyecto.",
      features: ["Desarrollo web", "Apps móviles", "Consultoría técnica", "Transformación digital"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            Servicios de acompañamiento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combino metodologías ágiles, acompañamiento personal y expertise tecnológico 
            para ayudarte a alcanzar tus objetivos de manera integral.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-border/50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-xl mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;