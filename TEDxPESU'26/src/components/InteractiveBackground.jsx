import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth lerp
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
      isActive: false,
      radius: 180,
    };

    // Click shockwave ripples
    const ripples = [];

    // Particle setup for "Contrast in Convergence" theme
    // Mixture of glowing crimson nodes and subtle white contrast sparks
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = -(Math.random() * 0.35 + 0.15); // gentle upward drift
        this.size = Math.random() < 0.25 ? Math.random() * 2 + 1.8 : Math.random() * 1.5 + 0.8;
        this.isRed = Math.random() < 0.72; // 72% crimson, 28% crisp contrast white
        this.alpha = Math.random() * 0.5 + 0.3;
        this.baseAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        // Floating movement
        this.x += this.vx;
        this.y += this.vy;

        // Subtle alpha pulsing
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.18;

        // Mouse interactive force (convergence attraction / subtle repulse)
        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.8;
            // Gentle orbital attraction toward cursor
            this.x += (dx / dist) * force * 1.2;
            this.y += (dy / dist) * force * 1.2;
            this.alpha = Math.min(1, this.baseAlpha + 0.4);
          }
        }

        // Screen boundary wrap
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        if (this.isRed) {
          ctx.fillStyle = `rgba(235, 0, 40, ${this.alpha})`;
          ctx.shadowColor = '#eb0028';
          ctx.shadowBlur = this.size > 2 ? 10 : 5;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.9})`;
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse and touch movement handlers
    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
    };

    // Click / Tap creates a crimson convergence shockwave
    const handlePointerDown = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.min(width, height) * 0.35,
        alpha: 0.75,
        speed: 6.5,
      });

      // Give nearby particles a small interactive push
      particles.forEach((p) => {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const push = ((200 - dist) / 200) * 8;
          p.x += (dx / dist) * push;
          p.y += (dy / dist) * push;
        }
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    // Animation Loop
    const render = () => {
      // Clear with transparent void so CSS background shows underneath
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.085;
      mouse.y += (mouse.targetY - mouse.y) * 0.085;

      // 1. Draw Dynamic Interactive Mouse Spotlight (Crimson Ambient Flare)
      if (mouse.isActive) {
        const spotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          380
        );
        spotlight.addColorStop(0, 'rgba(235, 0, 40, 0.16)');
        spotlight.addColorStop(0.35, 'rgba(235, 0, 40, 0.06)');
        spotlight.addColorStop(0.7, 'rgba(120, 0, 20, 0.02)');
        spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Convergence Filaments (Connecting Lines between nearby particles)
      const maxDist = 95;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(235, 0, 40, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // 3. Draw Filaments to Mouse Cursor (Convergence with Observer)
      if (mouse.isActive) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);

            const lineGrad = ctx.createLinearGradient(
              mouse.x,
              mouse.y,
              particles[i].x,
              particles[i].y
            );
            lineGrad.addColorStop(0, `rgba(255, 60, 90, ${alpha * 0.8})`);
            lineGrad.addColorStop(1, `rgba(235, 0, 40, ${alpha * 0.2})`);

            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 4. Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // 5. Update and Draw Click Shockwave Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += ripple.speed;
        ripple.alpha -= 0.016;

        if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(235, 0, 40, ${ripple.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#eb0028';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
}
