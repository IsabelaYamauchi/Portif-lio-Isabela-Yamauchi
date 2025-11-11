import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Card";
import { Button } from "../Botao";
import { Badge } from "../Badge";

interface ProjectsProps {
  showMoreButton?: boolean;
}

const Projects = ({ showMoreButton = false }: ProjectsProps) => {
  // Quando showMoreButton é true, mostra apenas 3 projetos na home
  const displayLimit = showMoreButton ? 3 : undefined;
  const projects = [
    {
      title: "Projeto Portfolio",
      description: "Portfolio texto.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "#",
      demo: "#",
    },
    {
      title: "Projeto Portfolio",
      description: "Portfolio texto.",
      tags: ["Java", "Oracle"],
      github: "#",
      demo: "#",
    },
    {
      title: "Projeto Portfolio",
      description: "Portfolio texto",
      tags: ["Python", "SQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Projetos
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Uma seleção de trabalhos que demonstram minha abordagem criativa 
          e habilidades técnicas
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, displayLimit).map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-light">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 font-code text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-accent"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
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
              <Link to="/projetos">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
