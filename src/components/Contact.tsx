import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-display gradient-text-premium mb-4">Get in touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm open to software development and DevOps roles. Feel free to reach out.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <a href={"mailto:" + contact.email} className="flex items-center gap-4 glass-premium p-4 rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">{contact.email}</div>
              </div>
            </a>

            <a href={"tel:" + contact.phone} className="flex items-center gap-4 glass-premium p-4 rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">Phone</div>
                <div className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">{contact.phone}</div>
              </div>
            </a>

            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-premium p-4 rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">LinkedIn</div>
                <div className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">Connect with me</div>
              </div>
            </a>

            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-premium p-4 rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">GitHub</div>
                <div className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">View my code</div>
              </div>
            </a>
          </div>

          <div className="glass-premium p-6 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <span className="font-semibold text-success text-lg">Open to work</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Currently looking for full-time roles in software development and DevOps.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;