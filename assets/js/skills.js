/**
 * skills.js — Renders the skill category cards with animated bars
 * and the radar chart canvas.
 */



// ─── RENDER SKILL CARDS ───────────────────────────────────────────
const container = document.getElementById('skill-categories');

SKILL_CATEGORIES.forEach((cat, catIdx) => {
  const card = document.createElement('div');
  card.className = 'skill-category-card reveal';
  card.style.setProperty('--cat-color', cat.color);
  card.style.transitionDelay = `${catIdx * 0.08}s`;
  card.style.borderColor     = 'rgba(255,255,255,0.08)';

  card.innerHTML = `
    <div class="skill-cat-header">
      <div class="skill-cat-icon" style="background:${cat.colorDim};color:${cat.color}">
        ${cat.icon}
      </div>
      <span class="skill-cat-name">${cat.name}</span>
    </div>
    <div class="skill-items">
      ${cat.skills.map(skill => `
        <div class="skill-item">
          <div class="skill-item-top">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level-label" style="color:${cat.color}">${skill.label}</span>
          </div>
          <div class="skill-bar-track">
            <div
              class="skill-bar-fill"
              data-level="${skill.level}"
              style="background:linear-gradient(90deg,${cat.color}99,${cat.color});width:${skill.level}%"
            ></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Hover tint border
  card.addEventListener('mouseenter', () => { card.style.borderColor = cat.color + '55'; });
  card.addEventListener('mouseleave', () => { card.style.borderColor = 'rgba(255,255,255,0.08)'; });

  container.appendChild(card);
});

// ─── SKILL BAR ANIMATION ON SCROLL ───────────────────────────────
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-category-card').forEach(card => barObserver.observe(card));

// ─── RADAR CHART ──────────────────────────────────────────────────
const radarCanvas = document.getElementById('skill-radar');
const rctx        = radarCanvas.getContext('2d');

function drawRadar() {
  const dpr    = window.devicePixelRatio || 1;
  const SIZE   = 400;
  radarCanvas.width  = SIZE * dpr;
  radarCanvas.height = SIZE * dpr;
  radarCanvas.style.width  = SIZE + 'px';
  radarCanvas.style.height = SIZE + 'px';
  rctx.scale(dpr, dpr);

  const cx     = SIZE / 2;
  const cy     = SIZE / 2;
  const maxR   = 150;
  const total  = RADAR_DATA.length;
  const levels = 5;

  rctx.clearRect(0, 0, SIZE, SIZE);

  // Web lines (background)
  for (let l = levels; l >= 1; l--) {
    const r = (maxR / levels) * l;
    rctx.beginPath();
    for (let i = 0; i < total; i++) {
      const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? rctx.moveTo(x, y) : rctx.lineTo(x, y);
    }
    rctx.closePath();
    rctx.strokeStyle = `rgba(255,255,255,${0.04 + l * 0.015})`;
    rctx.lineWidth   = 1;
    rctx.stroke();
    if (l === levels) {
      rctx.fillStyle = 'rgba(255,255,255,0.02)';
      rctx.fill();
    }
  }

  // Axis lines
  for (let i = 0; i < total; i++) {
    const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
    rctx.beginPath();
    rctx.moveTo(cx, cy);
    rctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
    rctx.strokeStyle = 'rgba(255,255,255,0.08)';
    rctx.lineWidth   = 1;
    rctx.stroke();
  }

  // Data polygon — filled gradient
  rctx.beginPath();
  RADAR_DATA.forEach((d, i) => {
    const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
    const r = maxR * (d.value / 100);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    i === 0 ? rctx.moveTo(x, y) : rctx.lineTo(x, y);
  });
  rctx.closePath();

  const grad = rctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
  grad.addColorStop(0, 'rgba(0,240,255,0.35)');
  grad.addColorStop(1, 'rgba(168,85,247,0.15)');
  rctx.fillStyle   = grad;
  rctx.fill();
  rctx.strokeStyle = '#00f0ff';
  rctx.lineWidth   = 2;
  rctx.shadowBlur  = 16;
  rctx.shadowColor = '#00f0ff';
  rctx.stroke();
  rctx.shadowBlur  = 0;

  // Data points
  RADAR_DATA.forEach((d, i) => {
    const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
    const r = maxR * (d.value / 100);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);

    rctx.beginPath();
    rctx.arc(x, y, 4, 0, Math.PI * 2);
    rctx.fillStyle   = '#00f0ff';
    rctx.shadowBlur  = 12;
    rctx.shadowColor = '#00f0ff';
    rctx.fill();
    rctx.shadowBlur  = 0;

    // Labels
    const labelR   = maxR + 24;
    const lx       = cx + labelR * Math.cos(angle);
    const ly       = cy + labelR * Math.sin(angle);
    rctx.fillStyle = '#a1a1aa';
    rctx.font      = `500 12px 'Outfit', sans-serif`;
    rctx.textAlign = 'center';
    rctx.textBaseline = 'middle';
    rctx.fillText(d.label, lx, ly);
  });
}

// Animate radar in on scroll
const radarObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { drawRadar(); radarObserver.disconnect(); }
}, { threshold: 0.3 });

radarObserver.observe(radarCanvas);
