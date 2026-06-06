import { portfolioData } from '@/data/portfolio-data';
import { Calendar, MapPin, Award, GraduationCap, Server, Cloud, Database, Cpu, GitBranch, Settings } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  // DevOps skills with icons for the bootcamp
  const devopsSkills = [
    { name: 'CI/CD', icon: GitBranch, color: 'text-blue-400' },
    { name: 'Docker', icon: Server, color: 'text-blue-500' },
    { name: 'Terraform', icon: Database, color: 'text-purple-400' },
    { name: 'Azure Cloud', icon: Cloud, color: 'text-blue-600' },
    { name: 'Kubernetes', icon: Settings, color: 'text-green-400' },
    { name: 'Ansible', icon: Cpu, color: 'text-red-400' },
  ];

  return (
    <section id="education" className="section-padding bg-surface/50 relative overflow-hidden">
      {/* Floating animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-accent/10 rounded-full blur-lg animate-float [animation-delay:2s] opacity-70" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary-glow/5 rounded-full blur-xl animate-float [animation-delay:4s] opacity-50" />
        <div className="absolute top-60 right-1/3 w-8 h-8 bg-success/20 rounded-full blur-md animate-float [animation-delay:6s] opacity-80" />
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-primary/10 rounded-full blur-lg animate-float [animation-delay:8s] opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Enhanced for mobile readability */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-display gradient-text mb-4">Education</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Academic foundation building expertise in computer science and technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Header - Stack on mobile, side-by-side on desktop */}
                  <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium text-sm md:text-base">{edu.institution}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Date and Location - Improved mobile layout */}
                    <div className="flex flex-col space-y-2 md:items-end md:space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{edu.startDate} - {edu.endDate}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{edu.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Academic Achievements - Enhanced mobile display */}
                  {(edu.gpa || edu.honors) && (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">GPA:</span>
                          <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                            {edu.gpa}
                          </span>
                        </div>
                      )}
                      {edu.honors && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">Honors:</span>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {edu.honors.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description - Better text wrapping for mobile */}
                  {edu.description && (
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {/* DevOps Skills - Only show for bootcamp */}
                  {edu.degree === "DevOps Bootcamp" && (
                    <div className="mt-6 pt-4 border-t border-card-border">
                      <h5 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-primary" />
                        Technologies & Tools Mastered
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {devopsSkills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-xs md:text-sm font-medium rounded-full animate-fade-in hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;