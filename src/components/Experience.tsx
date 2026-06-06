import { portfolioData } from '@/data/portfolio-data';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Enhanced mobile readability */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-display gradient-text mb-4">Experience</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Where I've worked and what I've built.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 md:space-y-8">
            {experience.length > 0 ? (
              experience.map((exp, index) => (
                <div key={index} className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Header - Enhanced mobile layout */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                            <Building className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                              {exp.title}
                            </h4>
                            <p className="text-primary font-medium text-sm md:text-base">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Date and Location - Improved mobile display */}
                      <div className="flex flex-col space-y-2 md:items-end md:space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Job Description - Better mobile readability */}
                    <div className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Used - Responsive tags */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="glass p-8 rounded-xl border border-card-border text-center">
                <Building className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Open to new roles</h4>
                <p className="text-muted-foreground">Looking for opportunities to contribute and grow.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;