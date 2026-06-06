import { portfolioData } from '@/data/portfolio-data';
import { Users, Sparkles, Zap, Target } from 'lucide-react';

const About = () => {
  const { education } = portfolioData;
  const latestEducation = education[0]; // BSC degree
  
  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-display gradient-text mb-4">About Me</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A bit about my background and what I enjoy working on.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Side - Enhanced mobile readability */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-section text-foreground">
                  Software Developer
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    I'm a recent Computer Science graduate based in Jeddah. I earned my BSc from
                    King Abdulaziz University with a 4.78/5 GPA and First-Class Honors, and I work
                    across full-stack web development and DevOps.
                  </p>

                  <p>
                    On the web side, I build responsive applications with React, ASP.NET Core, and
                    Laravel. On the infrastructure side, I've designed CI/CD pipelines on Azure
                    DevOps, containerized 3-tier apps with Docker and Kubernetes, and provisioned
                    Azure infrastructure with Terraform.
                  </p>

                  <p>
                    I enjoy connecting application code with the infrastructure it runs on, and I'm
                    looking for a team where I can keep growing as a software engineer.
                  </p>
                </div>

              </div>
            </div>

            {/* Professional Qualities Side - Mobile-friendly cards */}
            <div className="space-y-4 lg:space-y-6">
              {/* Key Strengths */}
              <div className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Full-stack & DevOps</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Comfortable across React, ASP.NET Core, and Laravel, with hands-on experience
                      in Azure, Docker, Kubernetes, and Terraform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">CI/CD mindset</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Built pipelines on Azure DevOps that replaced manual release steps with
                      reliable, repeatable deployments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-4 md:p-6 rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors duration-300 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Team collaboration</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Used to working with stakeholders and engineers to turn requirements into
                      shipped features.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <div className="glass p-6 md:p-8 rounded-xl border border-card-border max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h4 className="text-lg md:text-xl font-semibold text-foreground">
                  Open to new opportunities
                </h4>
              </div>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                I'm currently looking for software development or DevOps roles where I can keep
                building real products and learn from a strong team. Feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;