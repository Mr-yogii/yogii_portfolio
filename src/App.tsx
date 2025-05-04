import React, { useState, useEffect, Suspense } from 'react';
import { Loading } from './components/ui/Loading';
import { MainScene } from './components/three/MainScene';
import { NavOverlay } from './components/ui/NavOverlay';
import { ContentPanel } from './components/ui/ContentPanel';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { useProgress } from './hooks/useProgress';

type Section = 'home' | 'projects' | 'skills' | 'about' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const { progress, setProgress } = useProgress();

  useEffect(() => {
    let loadingProgress = 0;
    const interval = setInterval(() => {
      loadingProgress += Math.random() * 10;
      if (loadingProgress >= 100) {
        loadingProgress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 500);
      }
      setProgress(loadingProgress);
    }, 200);
    
    return () => clearInterval(interval);
  }, [setProgress]);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  if (!isLoaded) {
    return <Loading progress={progress} />;
  }

  return (
    <>
      <AnimatedCursor />
      <div className="canvas-container">
        <Suspense fallback={<Loading progress={progress} />}>
          <MainScene activeSection={activeSection} />
        </Suspense>
      </div>
      
      <div className="content-container">
        <NavOverlay 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        
        <ContentPanel 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </>
  );
}

export default App;