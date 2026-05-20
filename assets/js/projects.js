/**
 * projects.js — Renders project cards from data.js.
 */



const grid = document.getElementById('projects-grid');

PROJECTS.forEach((proj, idx) => {
  const card = document.createElement('article');
  card.className = 'project-card reveal';
  card.style.transitionDelay = `${idx * 0.1}s`;
  card.setAttribute('aria-label', proj.title);

  card.innerHTML = `
    <div class="project-card-header">
      <div class="project-icon" style="background:${proj.iconBg}">${proj.icon}</div>
      <span class="project-status ${proj.status}">${proj.status === 'live' ? '● Live' : proj.status}</span>
    </div>
    <h3 class="project-title">${proj.title}</h3>
    <p class="project-desc">${proj.desc}</p>
    <div class="project-tech-stack">
      ${proj.tech.map(t => `
        <span class="tech-pill" style="color:${t.color};background:${t.bg};border-color:${t.color}33">
          ${t.name}
        </span>
      `).join('')}
    </div>
    <div class="project-stats-row">
      ${proj.stats.map(s => `
        <div class="project-stat">
          <span class="project-stat-value">${s.value}</span>
          <span class="project-stat-label">${s.label}</span>
        </div>
      `).join('')}
    </div>
  `;

  // Clicking a project card jumps to its workflow in the visualiser
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    document.getElementById('workflows').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const tab = document.querySelector(`[data-workflow="${proj.workflow}"]`);
      if (tab) tab.click();
    }, 600);
  });

  grid.appendChild(card);
});
