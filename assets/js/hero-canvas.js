/**
 * hero-canvas.js — Animated particle network on the hero background.
 * Draws nodes (representing workflow nodes) that drift and connect
 * when close — a subtle metaphor for n8n's node graph.
 */

const canvas = document.getElementById('hero-canvas');
const ctx    = canvas.getContext('2d');

let W, H, dpr, particles, animId;

const CONFIG = {
  particleCount:    90,
  maxSpeed:         0.35,
  connectDistance:  140,
  lineOpacityMax:   0.15,
  nodeSizeRange:    [1.5, 3.5],
  colors: ['#00f0ff', '#a855f7', '#00f5a0', '#ffaa00'],
};

class Particle {
  constructor() { this.reset(true); }

  reset(randomY = false) {
    this.x  = Math.random() * W;
    this.y  = randomY ? Math.random() * H : H + 10;
    this.vx = (Math.random() - 0.5) * CONFIG.maxSpeed;
    this.vy = (Math.random() - 0.5) * CONFIG.maxSpeed;
    this.r  = CONFIG.nodeSizeRange[0] + Math.random() * (CONFIG.nodeSizeRange[1] - CONFIG.nodeSizeRange[0]);
    this.color  = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
    this.alpha  = 0.2 + Math.random() * 0.5;
    this.pulseOffset = Math.random() * Math.PI * 2;
  }

  update(t) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset();

    // Gentle pulse in opacity
    this.currentAlpha = this.alpha * (0.75 + 0.25 * Math.sin(t * 0.001 + this.pulseOffset));
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.currentAlpha;
    ctx.fillStyle   = this.color;
    ctx.shadowBlur  = 8;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.connectDistance) {
        const opacity = CONFIG.lineOpacityMax * (1 - dist / CONFIG.connectDistance);
        // Gradient line
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, a.color);
        grad.addColorStop(1, b.color);
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 0.75;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

function resize() {
  dpr    = window.devicePixelRatio || 1;
  W      = window.innerWidth;
  H      = window.innerHeight;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  ctx.scale(dpr, dpr);
}

function init() {
  resize();
  particles = Array.from({ length: CONFIG.particleCount }, () => new Particle());
}

function loop(t) {
  ctx.clearRect(0, 0, W, H);
  drawConnections();
  particles.forEach(p => { p.update(t); p.draw(); });
  animId = requestAnimationFrame(loop);
}

// Init
init();
loop(0);

window.addEventListener('resize', () => {
  cancelAnimationFrame(animId);
  init();
  loop(0);
});

// Subtle mouse interaction — particles gently flee
let mx = -9999, my = -9999;
window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

// Stat number counters
function animateCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = +el.dataset.target;
    let current  = 0;
    const step   = Math.max(1, Math.floor(target / 40));
    const id     = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (el.dataset.suffix || '');
      if (current >= target) clearInterval(id);
    }, 30);
  });
}

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: 0.5 });

heroObserver.observe(document.getElementById('hero'));
