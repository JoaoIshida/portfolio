import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4' 
}) => {
  return (
    <div 
      className={`skeleton ${width} ${height} ${className}`}
      aria-label="Loading..."
    />
  );
};

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 1, 
  className = '' 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`skeleton-text ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
};

export const SkeletonAvatar: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  return (
    <div 
      className={`skeleton-avatar ${sizeClasses[size]} ${className}`}
      aria-label="Loading avatar..."
    />
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`card p-6 ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <SkeletonAvatar size="md" />
        <div className="flex-1">
          <Skeleton height="h-4" width="w-1/2" className="mb-2" />
          <Skeleton height="h-3" width="w-1/3" />
        </div>
      </div>
      <SkeletonText lines={3} className="mb-4" />
      <div className="flex space-x-2">
        <Skeleton height="h-8" width="w-20" />
        <Skeleton height="h-8" width="w-16" />
      </div>
    </div>
  );
};

export const SkeletonProjects: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <Skeleton height="h-6" width="w-1/2" />
            <Skeleton height="h-4" width="w-4" />
          </div>
          <Skeleton height="h-32" width="w-full" className="mb-4 rounded-lg" />
          <SkeletonText lines={2} className="mb-4" />
          <div className="flex space-x-2">
            <Skeleton height="h-8" width="w-full" />
            <Skeleton height="h-8" width="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const SkeletonProfile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <Skeleton height="h-8" width="w-3/4" className="mb-4" />
          <Skeleton height="h-6" width="w-1/2" className="mb-6" />
          <SkeletonText lines={4} className="mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} height="h-10" width="w-10" />
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <SkeletonAvatar size="lg" className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonNavigation: React.FC = () => {
  return (
    <nav className="glass p-4">
      <div className="flex items-center justify-between">
        <SkeletonAvatar size="sm" />
        <div className="hidden md:flex space-x-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} height="h-4" width="w-16" />
          ))}
        </div>
        <div className="flex space-x-2">
          <Skeleton height="h-8" width="w-8" />
          <Skeleton height="h-8" width="w-8" />
        </div>
      </div>
    </nav>
  );
}; 