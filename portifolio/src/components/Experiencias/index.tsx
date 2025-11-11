import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Card";

const Experiences = () => {
  const experiences = [
    {
      title: "Estudante Análise e Desenvolvimento de Sistemas",
      company: "FIAP",
      period: "2025 - 2026",
      description: "Cursando o 1° ano do curso de Análise e Desenvolvimento de Sistemas.",
      achievements: [
        "Linguagens de programação: Java, Python e JavaScript",
        "Metodologias ágeis e trabalho em equipe",
        "Banco de dados relacionais"
      ]
    },
    {
      title: "Associada em Marketing",
      company: "Estudio Nove",
      period: "2024",
      description: "Apoio na criação de conteúdo digital e estratégias de marketing para as redes sociais.",
      achievements: [
        "Desenvolvimento de campanhas digitais",
        "Criação de conteúdo visual",
        "Agendamento e análise de métricas"
      ]
    },
    {
      title: "Estagiária de GRC",
      company: "Inetum",
      period: "2025 - Atual",
      description: "Aprendizado e desenvolvimento na área de cybersegurança e auditoria.",
      achievements: [
        "ISO 27001 e boas práticas de segurança",
        "ISO 27701 e gestão de riscos",
        "LGPD e proteção de dados pessoais"
      ]
    }
  ];

  return (
    <section id="experiences" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Experiências
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Minha jornada profissional e acadêmica, destacando minhas 
          conquistas e aprendizados ao longo do caminho.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-light">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-light mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span className="font-light">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
