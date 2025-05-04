import { useState, useCallback, useRef, useEffect } from 'react';

export const useProgress = () => {
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateProgress = useCallback((value: number) => {
    setProgress(prev => {
      const clamped = Math.min(Math.max(value, 0), 100);
      return clamped;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    progress,
    setProgress: updateProgress,
  };
};
