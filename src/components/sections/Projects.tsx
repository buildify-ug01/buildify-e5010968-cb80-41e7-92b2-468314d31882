
import ProjectCard from '../ui/ProjectCard';
import { Project } from '../../types/project';

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and analytics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasts, interactive maps, and location-based recommendations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}