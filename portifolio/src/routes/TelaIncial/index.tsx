import { ArrowDown } from "lucide-react";
import { Button } from "../../components/Botao";
import logoWhite from "../../assets/logo-branco.svg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-fade-in" />
      
      {/* conteudo */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-slide-up">
        <img 
          src={logoWhite} 
          alt="Isabela Yamauchi Logo" 
          className="w-full max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        />
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          Desenvolvedora criativa focada em criar experiências digitais inovadoras, 
          acessíveis e sofisticadas
        </p>
        
        <Button 
          size="lg"
          onClick={scrollToProjects}
          className="opacity-0 animate-fade-in group bg-primary hover:bg-accent transition-all duration-300"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          Ver Projetos
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in cursor-pointer"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        onClick={scrollToProjects}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;