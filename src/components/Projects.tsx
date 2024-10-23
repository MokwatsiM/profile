import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

function ProjectCard({ title, description, technologies, image, link, github }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-blue-600"
            >
              <Github size={20} className="mr-2" />
              Code
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-blue-600"
            >
              <ExternalLink size={20} className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "SuperSport App",
      description: "Mobile application for streaming live sports events and accessing real-time updates. Features include live streaming, real-time scores, and personalized notifications.",
      technologies: ["React Native", "Node.js", "WebSocket", "Redux"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    },
    {
      title: "OpenServe App",
      description: "Service management and monitoring application for telecommunications infrastructure. Enables real-time monitoring and management of network services.",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    },
    {
      title: "Personal Projects",
      description: "Collection of open-source contributions and personal projects showcasing various technologies and programming concepts.",
      technologies: ["JavaScript", "TypeScript", "Python"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      github: "https://github.com/MokwatsiM",
    }
  ];

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}