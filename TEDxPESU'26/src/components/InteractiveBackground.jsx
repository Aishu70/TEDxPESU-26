import React, { useEffect, useRef } from 'react';

const TAU = Math.PI * 2;
const MAX_DPR = 1.5;
const TARGET_FPS = 30;

/** Pre-renders a soft radial glow so we never touch shadowBlur per particle. */
function createGlowSprite(rgb) {
  const size = 64;
  const sprite = document.createElement('canvas');
  sprite.width = size;
  sprite.height = size;
  const spriteCtx = sprite.getContext('2d');
  const gradient = spriteCtx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, `rgba(${rgb}, 1)`);
  gradient.addColorStop(0.32, `rgba(${rgb}, 0.5)`);
  gradient.addColorStop(1, `rgba(${rgb}, 0)`);
  spriteCtx.fillStyle = gradient;
  spriteCtx.fillRect(0, 0, size, size);
  return sprite;
}

function createSpotlightSprite() {
  const size = 128;
  const sprite = document.createElement('canvas');
  sprite.width = size;
  sprite.height = size;
  const spriteCtx = sprite.getContext('2d');
  const gradient = spriteCtx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(235, 0, 40, 0.16)');
  gradient.addColorStop(0.35, 'rgba(235, 0, 40, 0.06)');
  gradient.addColorStop(0.7, 'rgba(120, 0, 20, 0.02)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  spriteCtx.fillStyle = gradient;
  spriteCtx.fillRect(0, 0, size, size);
  return sprite;
}

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return undefined;

    let dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;

    const redGlow = createGlowSprite('235, 0, 40');
    const whiteGlow = createGlowSprite('255, 255, 255');
    const spotlightSprite = createSpotlightSprite();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Mouse tracking with smooth lerp
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
      isActive: false,
      radius: 180,
    };
    mouse.radiusSq = mouse.radius * mouse.radius;

    // Click shockwave ripples
    const ripples = [];

    // Fewer particles than before, capped so 4K displays do not melt the GPU.
    const particleCount = Math.min(Math.floor((width * height) / 36000), 38);
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = -(Math.random() * 0.35 + 0.15);
        this.size = Math.random() < 0.25 ? Math.random() * 2 + 1.8 : Math.random() * 1.5 + 0.8;
        this.isRed = Math.random() < 0.72;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.baseAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * TAU;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.18;

        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;

          if (distSq > 0.01 && distSq < mouse.radiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouse.radius) * 0.8;
            this.x += (dx / dist) * force * 1.2;
            this.y += (dy / dist) * force * 1.2;
            this.alpha = Math.min(1, this.baseAlpha + 0.4);
          }
        }

        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.reset();
      }

      draw() {
        const glow = this.isRed ? redGlow : whiteGlow;
        const radius = this.size * (this.isRed ? 4.5 : 3.2);
        const alpha = Math.max(0, Math.min(1, this.alpha));

        ctx.globalAlpha = alpha;
        ctx.drawImage(glow, this.x - radius, this.y - radius, radius * 2, radius * 2);

        // Crisp core keeps small particles from looking blurry.
        ctx.globalAlpha = Math.min(1, alpha * 1.1);
        ctx.fillStyle = this.isRed ? '#ff3355' : '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.6, this.size * 0.45), 0, TAU);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i += 1) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      resize();
    };

    const handlePointerMove = (event) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
    };

    const handlePointerDown = (event) => {
      ripples.push({
        x: event.clientX,
        y: event.clientY,
        radius: 10,
        maxRadius: Math.min(width, height) * 0.35,
        alpha: 0.75,
        speed: 6.5,
      });

      particles.forEach((particle) => {
        const dx = particle.x - event.clientX;
        const dy = particle.y - event.clientY;
        const distSq = dx * dx + dy * dy;
        if (distSq > 0.01 && distSq < 40000) {
          const dist = Math.sqrt(distSq);
          const push = ((200 - dist) / 200) * 8;
          particle.x += (dx / dist) * push;
          particle.y += (dy / dist) * push;
        }
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    const frameInterval = 1000 / TARGET_FPS;
    const maxDistSq = 95 * 95;
    let lastFrame = 0;

    const render = (now) => {
      animationFrameId = window.requestAnimationFrame(render);

      if (document.hidden || now - lastFrame < frameInterval) return;
      lastFrame = now;

      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.085;
      mouse.y += (mouse.targetY - mouse.y) * 0.085;

      // 1. Interactive crimson spotlight (pre-rendered sprite, no gradient alloc)
      if (mouse.isActive) {
        ctx.globalAlpha = 1;
        ctx.drawImage(spotlightSprite, mouse.x - 380, mouse.y - 380, 760, 760);
      }

      // 2. Convergence filaments between nearby particles
      ctx.lineWidth = 0.85;
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.18;
            ctx.strokeStyle = `rgba(235, 0, 40, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 3. Filaments converging on the observer
      if (mouse.isActive) {
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i += 1) {
          const particle = particles[i];
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radiusSq) {
            const alpha = (1 - distSq / mouse.radiusSq) * 0.35;
            ctx.strokeStyle = `rgba(235, 0, 40, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        }
      }

      // 4. Particles
      for (let i = 0; i < particles.length; i += 1) {
        particles[i].update();
        particles[i].draw();
      }
      ctx.globalAlpha = 1;

      // 5. Click shockwaves
      for (let r = ripples.length - 1; r >= 0; r -= 1) {
        const ripple = ripples[r];
        ripple.radius += ripple.speed;
        ripple.alpha -= 0.016;

        if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, TAU);
        ctx.strokeStyle = `rgba(235, 0, 40, ${ripple.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#eb0028';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
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
