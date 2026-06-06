import { useState } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global floating animated elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float opacity-60" />
        <div className="absolute top-60 right-20 w-16 h-16 bg-accent/8 rounded-full blur-lg animate-float [animation-delay:2s] opacity-70" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary-glow/4 rounded-full blur-xl animate-float [animation-delay:4s] opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-success/15 rounded-full blur-md animate-float [animation-delay:6s] opacity-80" />
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-primary/8 rounded-full blur-lg animate-float [animation-delay:8s] opacity-60" />
        
        {/* Medium floating elements */}
        <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-accent/10 rounded-full blur-md animate-float [animation-delay:1s] opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-primary/6 rounded-full blur-lg animate-float [animation-delay:3s] opacity-50" />
        <div className="absolute top-3/4 left-20 w-8 h-8 bg-success/20 rounded-full blur-sm animate-float [animation-delay:5s] opacity-70" />
        
        {/* Small floating elements */}
        <div className="absolute top-40 right-1/2 w-6 h-6 bg-primary-glow/15 rounded-full blur-sm animate-float [animation-delay:7s] opacity-60" />
        <div className="absolute bottom-60 left-1/2 w-12 h-12 bg-accent/12 rounded-full blur-md animate-float [animation-delay:9s] opacity-45" />
      </div>

      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-surface/30 relative z-10">
        <div className="container-custom">
          <div className="text-center text-muted-foreground">
            <p>© 2026 Rawan Alghamdi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;