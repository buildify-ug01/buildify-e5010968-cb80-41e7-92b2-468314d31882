
import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Building robust and scalable web applications with modern technologies.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces that users love.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                alt="Workspace"
                className="rounded-lg shadow-custom-xl"
              />
            </div>
            <div>
              <h3 className="mb-6">Hello, I'm John</h3>
              <div className="space-y-4 text-foreground/80 text-lg">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  building web applications that make a difference. I love turning complex 
                  problems into simple, beautiful, and intuitive solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating experiences 
                  that users genuinely enjoy.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="p-8 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-lg group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}