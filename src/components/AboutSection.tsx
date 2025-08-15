import profileImage from "@/assets/profile-image.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-2xl transform rotate-3 opacity-20"></div>
              <img 
                src={profileImage}
                alt="Perfil profesional"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-strong"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                Sobre mí
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Soy un <strong className="text-primary">emprendedor social</strong> apasionado por 
                  el acompañamiento integral de personas que buscan materializar sus ideas y crecer 
                  tanto personal como profesionalmente.
                </p>
                
                <p>
                  Mi enfoque combina el <strong className="text-primary">agilismo</strong> como 
                  metodología de trabajo con un profundo compromiso por el bienestar integral. 
                  Creo firmemente que cada persona tiene un potencial único que puede desarrollarse 
                  con el acompañamiento adecuado.
                </p>
                
                <p>
                  Como <strong className="text-primary">facilitador tecnológico</strong>, ayudo a 
                  transformar ideas en realidades digitales concretas, siempre priorizando la 
                  sostenibilidad y el impacto positivo en la comunidad.
                </p>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Mi misión</h3>
                  <p className="text-base">
                    Crear puentes entre lo personal y lo profesional, entre las ideas y su 
                    materialización, acompañando a cada persona en su proceso único de crecimiento 
                    y transformación digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;