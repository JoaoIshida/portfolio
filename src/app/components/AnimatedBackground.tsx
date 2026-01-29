'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <LavaLamp />;
}

function LavaLamp() {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial state
    setIsDark(document.documentElement.classList.contains('dark'));
    setIsMobile(window.innerWidth < 768);

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Watch for resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mouse tracking - direct DOM manipulation for instant response (no React re-renders)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (cursorBlobRef.current) {
      cursorBlobRef.current.style.left = `${e.clientX}px`;
      cursorBlobRef.current.style.top = `${e.clientY}px`;
      cursorBlobRef.current.style.opacity = '0.6';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cursorBlobRef.current) {
      cursorBlobRef.current.style.opacity = '0';
    }
  }, []);

  // Touch tracking - direct DOM manipulation for instant response
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0 && cursorBlobRef.current) {
      const touch = e.touches[0];
      cursorBlobRef.current.style.left = `${touch.clientX}px`;
      cursorBlobRef.current.style.top = `${touch.clientY}px`;
      cursorBlobRef.current.style.opacity = '0.6';
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (cursorBlobRef.current) {
      cursorBlobRef.current.style.opacity = '0';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseLeave, handleTouchMove, handleTouchEnd]);

  // Colors based on theme - subtle greys like original
  const colors = isDark
    ? ['#1e3a8a', '#0c4a6e', '#1f2937', '#374151']
    : ['#eff6ff', '#f0f9ff', '#e5e7eb', '#f3f4f6'];

  const cursorColor = isDark ? '#6b7280' : '#d1d5db'; // gray-500 / gray-300
  const bgColor = isDark ? '#0a0a0a' : '#ffffff';
  
  const blobCount = isMobile ? 5 : 8;

  // Generate blob data (stable across renders)
  const [blobs] = useState(() => 
    Array.from({ length: blobCount }, (_, i) => ({
      id: i,
      size: isMobile ? 200 + Math.random() * 150 : 300 + Math.random() * 250,
      duration: 20 + Math.random() * 25,
      delay: Math.random() * -25,
      startX: Math.random() * 100,
      colorIndex: i % 4,
    }))
  );

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ backgroundColor: bgColor }}
    >
      {/* SVG Filter for gooey/metaball effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Lava lamp container with goo filter */}
      <div 
        className="absolute inset-0"
        style={{ filter: 'url(#goo)' }}
      >
        {/* Lava blobs */}
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className="absolute rounded-full lava-blob"
            style={{
              width: blob.size,
              height: blob.size,
              backgroundColor: colors[blob.colorIndex],
              left: `${blob.startX}%`,
              opacity: isDark ? 0.5 : 0.3,
              animation: `lavaMove${blob.id % 3} ${blob.duration}s ease-in-out infinite`,
              animationDelay: `${blob.delay}s`,
            }}
          />
        ))}

        {/* Cursor blob - follows mouse/touch */}
        <div
          ref={cursorBlobRef}
          className="absolute rounded-full cursor-blob"
          style={{
            width: isMobile ? 60 : 80,
            height: isMobile ? 60 : 80,
            backgroundColor: cursorColor,
            left: -200,
            top: -200,
            transform: 'translate(-50%, -50%)',
            opacity: 0,
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes lavaMove0 {
          0%, 100% {
            transform: translateY(100vh) scale(1);
            border-radius: 50%;
          }
          25% {
            transform: translateY(60vh) scale(1.1) translateX(10vw);
            border-radius: 45% 55% 50% 50%;
          }
          50% {
            transform: translateY(20vh) scale(0.9) translateX(-5vw);
            border-radius: 55% 45% 45% 55%;
          }
          75% {
            transform: translateY(50vh) scale(1.05) translateX(15vw);
            border-radius: 50% 50% 55% 45%;
          }
        }
        
        @keyframes lavaMove1 {
          0%, 100% {
            transform: translateY(90vh) scale(0.9);
            border-radius: 50%;
          }
          30% {
            transform: translateY(40vh) scale(1.15) translateX(-10vw);
            border-radius: 45% 55% 55% 45%;
          }
          60% {
            transform: translateY(10vh) scale(1) translateX(10vw);
            border-radius: 55% 45% 45% 55%;
          }
          80% {
            transform: translateY(60vh) scale(0.95) translateX(-5vw);
            border-radius: 50% 50% 50% 50%;
          }
        }
        
        @keyframes lavaMove2 {
          0%, 100% {
            transform: translateY(110vh) scale(1.1);
            border-radius: 50%;
          }
          20% {
            transform: translateY(70vh) scale(0.95) translateX(15vw);
            border-radius: 55% 45% 50% 50%;
          }
          45% {
            transform: translateY(30vh) scale(1.1) translateX(-10vw);
            border-radius: 45% 55% 55% 45%;
          }
          70% {
            transform: translateY(5vh) scale(0.9) translateX(5vw);
            border-radius: 50% 50% 45% 55%;
          }
          90% {
            transform: translateY(80vh) scale(1) translateX(-15vw);
            border-radius: 50%;
          }
        }
        
        .lava-blob {
          will-change: transform, border-radius;
          filter: blur(40px);
        }

        .cursor-blob {
          will-change: left, top, opacity;
          filter: blur(25px);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
