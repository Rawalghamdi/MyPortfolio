import { portfolioData } from '@/data/portfolio-data';
import { Calendar, BookOpen, Award } from 'lucide-react';

const Certifications = () => {
  const { courses } = portfolioData;

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Mobile-optimized spacing */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-display gradient-text mb-4">Courses & Certifications</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Things I've studied alongside university.
            </p>
          </div>

          {/* Certifications Grid - Responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 
                          transition-all duration-300 group"
              >
                <div className="space-y-3">
                  {/* Course Header */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground group-hover:text-primary 
                                   transition-colors duration-300 text-sm md:text-base leading-tight">
                        {course.name}
                      </h4>
                      <p className="text-primary text-xs md:text-sm font-medium mt-1">
                        {course.provider}
                      </p>
                    </div>
                  </div>

                  {/* Course Date - Enhanced mobile display */}
                  <div className="flex items-center gap-2 text-muted-foreground ml-11">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="text-xs md:text-sm">{course.date}</span>
                  </div>

                  {/* Course Description if available */}
                  {course.description && (
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed ml-11">
                      {course.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Summary - Mobile-friendly stats */}
          <div className="mt-12 md:mt-16">
            <div className="glass p-6 md:p-8 rounded-xl border border-card-border text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h4 className="text-lg md:text-xl font-semibold text-foreground">
                  Continuous Learning Journey
                </h4>
              </div>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Committed to staying current with industry trends and emerging technologies through 
                ongoing professional development and specialized training programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;