import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center particles overflow-hidden pt-16 md:pt-20">
      {/* Soft Modern Frames */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-80 h-80 border-l-8 border-t-8 border-primary/20 rounded-tl-[80px] float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-r-8 border-b-8 border-accent/20 rounded-br-[80px] float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-3xl float" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl float-reverse" />
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20 px-4">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-10 lg:pl-12">
            <div className="space-y-2 md:space-y-4 animate-slide-up-premium relative">
              <div className="relative inline-block group cursor-pointer">
                <h1 className="text-4xl sm:text-5xl md:text-hero gradient-text-premium leading-none">RAWAN</h1>
                <div className="absolute -bottom-2 -right-4 md:-bottom-4 md:-right-8 w-20 md:w-32 h-1 md:h-2 bg-primary/50 rounded-full group-hover:w-28 md:group-hover:w-40 transition-all" />
              </div>
              <div className="relative inline-block ml-4 md:ml-8 group cursor-pointer">
                <h1 className="text-4xl sm:text-5xl md:text-hero gradient-text-premium leading-none">ALGHAMDI</h1>
                <div className="absolute -top-2 -left-4 md:-top-4 md:-left-8 w-16 md:w-24 h-1 md:h-2 bg-accent/50 rounded-full group-hover:w-20 md:group-hover:w-32 transition-all" />
              </div>
            </div>

            <div className="relative inline-block group cursor-pointer">
              <div className="glass-premium px-6 py-4 md:px-10 md:py-6 inline-block">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight uppercase font-orbitron text-foreground">
                  Software Developer
                </p>
              </div>
            </div>

            <div className="relative ml-4 md:ml-8 animate-fade-in-premium" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -left-2 md:-left-4 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent" />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-rajdhani tracking-wide pl-4 md:pl-8">
                Computer Science graduate from KAU, building full-stack web apps with React,
                ASP.NET Core, and Laravel, and shipping cloud infrastructure with Docker,
                Kubernetes, Terraform, and Azure.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 animate-fade-in-premium" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact">
                  Get in touch <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="/RawanAlghamdi_CV.pdf" download>
                  <Download /> Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
