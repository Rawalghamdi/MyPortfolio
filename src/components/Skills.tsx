import { portfolioData } from '@/data/portfolio-data';
import { Code, Globe, Server, Wrench, MessageSquare } from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;
  
  const categories = [
    {
      title: 'Programming Languages',
      key: 'programming' as const,
      icon: Code,
    },
    {
      title: 'Web Development',
      key: 'web' as const,
      icon: Globe,
    },
    {
      title: 'DevOps & Cloud',
      key: 'devops' as const,
      icon: Server,
    },
    {
      title: 'Tools & Frameworks',
      key: 'tools' as const,
      icon: Wrench,
    },
    {
      title: 'Languages',
      key: 'languages' as const,
      icon: MessageSquare,
    },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display gradient-text mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and programming languages
            </p>
          </div>

          {/* Skills Categories - Enhanced responsive design */}
          <div className="space-y-8 md:space-y-12">
            {categories.map((category) => {
              const categorySkills = getSkillsByCategory(category.key);
              
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category.key} className="glass p-4 md:p-6 lg:p-8 rounded-xl border border-card-border">
                  {/* Category Header - Mobile optimized */}
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="p-2 md:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 md:text-base"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;