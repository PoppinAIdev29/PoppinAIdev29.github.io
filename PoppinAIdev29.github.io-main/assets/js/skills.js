/**
 * skills.js — Renders Skill Sets and Minimalist Radar Chart
 * Light Theme: zero emojis, crisp typography, and robust canvas renderer.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderSkillCards();
  initRadarChart();
});

function renderSkillCards() {
  const container = document.getElementById('skills-grid');
  const categories = window.SKILL_CATEGORIES || (typeof SKILL_CATEGORIES !== 'undefined' ? SKILL_CATEGORIES : []);
  if (!container || !categories.length) return;

  container.innerHTML = categories.map((cat, idx) => `
    <div class="skill-category-card reveal" style="transition-delay: ${idx * 0.08}s">
      <h3 class="skill-cat-title">
        <span>${cat.name}</span>
        <span class="card-badge" style="font-size: 0.72rem;">Production Grade</span>
      </h3>
      <div class="skill-items-list">
        ${cat.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-item-header">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level-tag">${skill.label}</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" data-level="${skill.level}" style="width: ${skill.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Animate skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.classList.add('animated');
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.skill-category-card').forEach(card => observer.observe(card));
}

// ─── RADAR CHART (Light Mode, Zero Emojis) ─────────────────────────
const RADAR_METRICS = [
  { label: 'Edge AI / CV', value: 96 },
  { label: 'Headless n8n', value: 98 },
  { label: 'Shopify APIs', value: 96 },
  { label: 'Programmatic SEO', value: 94 },
  { label: 'Docker Scraping', value: 94 },
  { label: 'LLM Orchestration', value: 95 }
];

function initRadarChart() {
  const canvas = document.getElementById('skill-radar');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const SIZE = 360;

  canvas.width = SIZE * dpr;
  canvas.height = SIZE * dpr;
  canvas.style.width = SIZE + 'px';
  canvas.style.height = SIZE + 'px';
  ctx.scale(dpr, dpr);

  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const maxR = 120;
  const total = RADAR_METRICS.length;
  const levels = 4;

  function draw() {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // Web background rings
    for (let l = levels; l >= 1; l--) {
      const r = (maxR / levels) * l;
      ctx.beginPath();
      for (let i = 0; i < total; i++) {
        const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(15, 23, 42, ${0.05 + l * 0.02})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      if (l === levels) {
        ctx.fillStyle = 'rgba(248, 250, 252, 0.6)';
        ctx.fill();
      }
    }

    // Radial axis lines
    for (let i = 0; i < total; i++) {
      const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Data polygon
    ctx.beginPath();
    RADAR_METRICS.forEach((d, i) => {
      const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
      const r = maxR * (d.value / 100);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();

    // Azure fill & stroke
    ctx.fillStyle = 'rgba(2, 132, 199, 0.12)';
    ctx.fill();
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Node dots & labels
    RADAR_METRICS.forEach((d, i) => {
      const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
      const r = maxR * (d.value / 100);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      // Node dot
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#0284c7';
      ctx.fill();

      // Label
      const labelR = maxR + 24;
      const lx = cx + labelR * Math.cos(angle);
      const ly = cy + labelR * Math.sin(angle);
      ctx.fillStyle = '#090d16';
      ctx.font = `700 12px 'Outfit', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(d.label, lx, ly);
    });
  }

  const radarObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      draw();
      radarObserver.disconnect();
    }
  }, { threshold: 0.2 });

  radarObserver.observe(canvas);
}
