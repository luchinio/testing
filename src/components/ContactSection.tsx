import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            ¿Listo para comenzar?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            El primer paso es siempre una conversación. Te invito a que nos conozcamos 
            y exploremos juntos cómo puedo acompañarte en tu proceso.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card hover:shadow-soft transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mb-4 mx-auto">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">Email directo</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Escríbeme para una primera consulta
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = 'mailto:contacto@holistikit.ar'}
              >
                Enviar email
              </Button>
            </Card>

            <Card className="p-6 bg-card hover:shadow-soft transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Conversación directa y ágil
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://wa.me/5491123456789', '_blank')}
              >
                Chatear
              </Button>
            </Card>

            <Card className="p-6 bg-card hover:shadow-soft transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">Videollamada</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Sesión de 30 min sin compromiso
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://calendly.com/holistikit', '_blank')}
              >
                Agendar
              </Button>
            </Card>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Primera consulta gratuita
            </h3>
            <p className="text-muted-foreground mb-6">
              Te ofrezco una primera sesión de 30 minutos completamente gratuita para 
              conocernos, entender tus necesidades y ver cómo puedo acompañarte en tu proceso.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-strong text-lg px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = 'mailto:contacto@holistikit.ar?subject=Primera consulta gratuita'}
            >
              Solicitar consulta gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;