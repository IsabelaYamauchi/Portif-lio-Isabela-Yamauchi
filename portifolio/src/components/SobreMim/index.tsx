import { User, Heart, PlaneTakeoff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../Card";
import { Button } from "../Botao";

interface AboutProps {
  showMoreButton?: boolean;
}

const About = ({ showMoreButton = false }: AboutProps) => {
  const values = [
    {
      icon: User,
      title: "Quem eu sou?",
      description: "Meu nome é Isabela e sou de Belo Horizonte, MG. Atualmente moro em São Paulo e sou estudante de Análise e Desenvolvimento de Sistemas na FIAP.",
    },
    {
      icon: Heart,
      title: "Do que eu gosto?",
      description: "Desde criança sou apaixonada por tecnologia e arte. Sempre fui apaixonada por quadrinhos e jogos de videogame. ",
    },
    {
      icon: PlaneTakeoff,
      title: "Outro assunto",
      description: "aaaaaa",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Sobre Mim
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Desenvolvedora apaixonada por criar experiências web que unem 
          funcionalidade com beleza visual
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-light">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {showMoreButton && (
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-accent"
              asChild
            >
              <Link to="/sobre">
                Saiba Mais Sobre Mim
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
