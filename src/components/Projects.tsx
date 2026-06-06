import { portfolioData } from '@/data/portfolio-data';
import { ExternalLink, Github, Monitor, Smartphone, HardDrive, Network, Globe } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'desktop': return Monitor;
      case 'system': return HardDrive;
      case 'network': return Network;
      default: return Monitor;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/10 text-success border-success/20';
      case 'in-progress': return 'bg-warning/10 text-warning border-warning/20';
      case 'planning': return 'bg-muted/10 text-muted-foreground border-muted/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display gradient-text mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A few things I've built during university and bootcamp.
            </p>
          </div>

          {/* Projects Grid - Enhanced responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const IconComponent = getProjectIcon(project.type);
              
              return (
                <div
                  key={index}
                  className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="space-y-4 md:space-y-6">
                    {/* Project Header - Mobile optimized */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                              {project.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                                {formatStatus(project.status)}
                              </span>
                              <span className="px-2 py-1 bg-muted/10 text-muted-foreground text-xs font-medium rounded-full capitalize">
                                {project.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action Links - Better mobile positioning */}
                        <div className="flex gap-2 flex-shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-muted/10 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                              aria-label={`View ${project.title} GitHub repository`}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-muted/10 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                              aria-label={`View ${project.title} live project`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Description - Improved readability */}
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Features - Better mobile layout */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <div className="space-y-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies - Responsive tags */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-accent/10 text-accent text-xs md:text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="glass p-6 md:p-8 rounded-xl border border-card-border max-w-3xl mx-auto">
              <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Want to see more?
              </h4>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                These are highlights from my university and bootcamp work. Reach out if you'd like
                to chat about any of them in more detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;