import React from 'react';
import { BrainCircuit as Circuit } from 'lucide-react';

interface LoadingProps {
  progress: number;
}

export const Loading: React.FC<LoadingProps> = ({ progress }) => {
  if (progress >= 100) return null;

  return (
    <div className="loading-screen">
      <Circuit size={64} className="text-blue-500 animate-pulse-slow" />
      <h2 className="text-2xl mt-4 font-bold neon-text">
        Loading History...
      </h2>
      <div className="loading-progress">
        <div 
          className="loading-bar" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      <p className="mt-2 text-sm text-slate-400">
        {progress.toFixed(0)}% - Initializing yogii biography...
      </p>
    </div>
  );
};
