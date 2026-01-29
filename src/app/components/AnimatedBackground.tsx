'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Detect device
    const isMobile = () => window.innerWidth < 768;
    const isDark = () => document.documentElement.classList.contains('dark');

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Colors - subtle greys like original
    const getColors = () => isDark()
      ? ['#1e3a8a', '#0c4a6e', '#1f2937', '#374151']
      : ['#bfdbfe', '#bae6fd', '#e5e7eb', '#f3f4f6'];

    const getBgColor = () => isDark() ? '#0a0a0a' : '#ffffff';

    // Blob class with physics
    class Blob {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
      angle: number;
      angleSpeed: number;
      floatAmplitudeX: number;
      floatAmplitudeY: number;
      floatSpeedX: number;
      floatSpeedY: number;

      constructor(color: string) {
        const width = canvas!.width;
        const height = canvas!.height;
        const mobile = isMobile();

        this.radius = mobile
          ? 100 + Math.random() * 80
          : 150 + Math.random() * 120;

        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.vx = 0;
        this.vy = 0;

        this.color = color;
        this.opacity = isDark() ? 0.25 : 0.2;

        // Floating animation parameters
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = 0.005 + Math.random() * 0.01;
        this.floatAmplitudeX = 50 + Math.random() * 100;
        this.floatAmplitudeY = 100 + Math.random() * 150;
        this.floatSpeedX = 0.3 + Math.random() * 0.5;
        this.floatSpeedY = 0.2 + Math.random() * 0.4;
      }

      update(mouse: { x: number; y: number; active: boolean }) {
        // Natural floating motion
        this.angle += this.angleSpeed;
        const targetX = this.baseX + Math.sin(this.angle * this.floatSpeedX) * this.floatAmplitudeX;
        const targetY = this.baseY + Math.cos(this.angle * this.floatSpeedY) * this.floatAmplitudeY;

        // Mouse/touch repulsion
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = isMobile() ? 150 : 250;
          const repelStrength = isMobile() ? 8 : 12;

          if (dist < repelRadius && dist > 0) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            this.vx += Math.cos(angle) * force * repelStrength;
            this.vy += Math.sin(angle) * force * repelStrength;
          }
        }

        // Apply velocity with damping
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.92;
        this.vy *= 0.92;

        // Smoothly return to floating path
        this.x += (targetX - this.x) * 0.02;
        this.y += (targetY - this.y) * 0.02;

        // Keep in bounds with soft bounce
        const padding = this.radius;
        if (this.x < -padding) this.baseX += canvas!.width + padding * 2;
        if (this.x > canvas!.width + padding) this.baseX -= canvas!.width + padding * 2;
        if (this.y < -padding) this.baseY += canvas!.height + padding * 2;
        if (this.y > canvas!.height + padding) this.baseY -= canvas!.height + padding * 2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Create soft gradient blob
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );

        // Parse color to RGB
        const hex = this.color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create blobs
    const createBlobs = () => {
      const colors = getColors();
      const count = isMobile() ? 6 : 10;
      return Array.from({ length: count }, (_, i) =>
        new Blob(colors[i % colors.length])
      );
    };

    let blobs = createBlobs();

    // Mouse/touch tracking
    const updateMouse = (x: number, y: number) => {
      mouseRef.current = { x, y, active: true };
    };

    const clearMouse = () => {
      mouseRef.current.active = false;
    };

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);
    const handleMouseLeave = () => clearMouse();
    const handleMouseEnter = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => clearMouse();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    const animate = () => {
      const bgColor = getBgColor();
      
      // Parse background color
      const hex = bgColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      // Clear with background
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach(blob => {
        blob.update(mouseRef.current);
        blob.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Theme change observer
    const observer = new MutationObserver(() => {
      blobs = createBlobs();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        blobs = createBlobs();
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ touchAction: 'none' }}
    />
  );
}
