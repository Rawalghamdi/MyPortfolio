import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing portfolio...',
    'Loading skills...',
    'Fetching projects...',
    'Preparing experience...',
    'Almost ready...'
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const intervals = 50;
    const increment = 100 / intervals;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));
      
      // Update text based on progress
      const textIndex = Math.floor((currentProgress / 100) * loadingTexts.length);
      setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, duration / intervals);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="particles absolute inset-0" />
      
      <div className="text-center z-10">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-xl glass border-2 border-primary/30 flex items-center justify-center float">
            <span className="text-2xl font-bold gradient-text">RA</span>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out glow-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-muted-foreground text-sm mb-2">
          {Math.round(progress)}%
        </div>

        {/* Loading Text */}
        <div className="text-foreground font-medium">
          {currentText}
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;