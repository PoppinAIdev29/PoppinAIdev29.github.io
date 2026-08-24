/**
 * projects.js — Renders Wide Full-Space Domain Architectures with Vertical Flowcharts
 * Zero emojis — Pure clean SVG and typography, high contrast, clean flat plates.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderDomainSections();
});

function renderDomainSections() {
  const container = document.getElementById('domains-container');
  const domainsData = window.DOMAINS || (typeof DOMAINS !== 'undefined' ? DOMAINS : []);
  if (!container || !domainsData.length) return;

  container.innerHTML = domainsData.map(domain => `
    <div class="domain-block reveal" id="${domain.id}">
      <div class="domain-header">
        <div class="domain-index">Domain ${domain.domainNumber}</div>
        <h2 class="domain-title">${domain.name}</h2>
        <p class="domain-focus"><strong>Strategic Focus:</strong> ${domain.focus}</p>
      </div>

      <div class="case-studies-list">
        ${domain.projects.map(proj => renderCaseStudyCard(proj)).join('')}
      </div>
    </div>
  `).join('');
}

function renderCaseStudyCard(proj) {
  // Flatten stages for clean vertical sequence
  const solutionNodes = [];
  proj.solution.flowchart.stages.forEach(stage => {
    stage.nodes.forEach(node => {
      solutionNodes.push({
        stageLabel: stage.label,
        name: node.name,
        desc: node.desc,
        type: node.type
      });
    });
  });

  return `
    <article class="case-study-card reveal" id="project-${proj.id}">
      <!-- Top Meta -->
      <div class="card-top-meta">
        <span class="card-type-tag">${proj.type}</span>
        <span class="card-badge">
          <span class="badge-dot"></span>
          ${proj.badge}
        </span>
      </div>

      <h3 class="case-study-title">${proj.title}</h3>
      <p class="case-study-summary">${proj.summary}</p>

      <!-- 2-Column Side-by-Side: Problem vs. Solution -->
      <div class="case-study-grid-2col">
        
        <!-- Column 1: The Problem & Vertical Problem Flowchart -->
        <div class="detail-column">
          <div class="block-header">
            <span class="block-tag problem-tag">The Problem</span>
            <h4 class="block-title">Operational Bottleneck</h4>
          </div>
          <p class="block-narrative">${proj.problem.statement}</p>

          <!-- Vertical Problem Flowchart -->
          <div class="vertical-flowchart-plate" aria-label="Vertical Problem Flowchart">
            <div class="flowchart-header">
              <span class="flowchart-title">Problem Bottleneck Sequence</span>
              <span class="flowchart-badge" style="color: #475569; background: #e2e8f0;">Friction Cascade</span>
            </div>
            <div class="vertical-flow-sequence">
              ${proj.problem.flowNodes.map((node, idx) => `
                <div class="v-problem-step">
                  <span class="v-step-num">Step ${node.step}</span>
                  <div class="v-step-body">
                    <span class="v-step-title">${node.title}</span>
                    <span class="v-step-desc">${node.desc}</span>
                  </div>
                </div>
                ${idx < proj.problem.flowNodes.length - 1 ? '<div class="v-arrow-marker problem-arrow">&darr;</div>' : ''}
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Column 2: The Solution & Vertical Architecture Flowchart -->
        <div class="detail-column">
          <div class="block-header">
            <span class="block-tag solution-tag">The Solution</span>
            <h4 class="block-title">Engineered Architecture</h4>
          </div>

          <div class="solution-points-vertical">
            ${proj.solution.points.map(pt => `
              <div class="solution-point-card">
                <h5 class="solution-point-title">${pt.title}</h5>
                <p class="solution-point-desc">${pt.desc}</p>
              </div>
            `).join('')}
          </div>

          <!-- Vertical Solution Architecture Flowchart -->
          <div class="vertical-flowchart-plate" aria-label="Vertical Solution Pipeline">
            <div class="flowchart-header">
              <span class="flowchart-title">Architecture Pipeline Flow</span>
              <span class="flowchart-badge">${proj.solution.flowchart.archType}</span>
            </div>
            <div class="vertical-flow-sequence">
              ${solutionNodes.map((node, idx) => `
                <div class="v-solution-node">
                  <span class="v-node-stage-label">${node.stageLabel}</span>
                  <div class="v-node-body">
                    <span class="v-node-title">${node.name}</span>
                    <span class="v-node-desc">${node.desc}</span>
                  </div>
                </div>
                ${idx < solutionNodes.length - 1 ? '<div class="v-arrow-marker">&darr;</div>' : ''}
              `).join('')}
            </div>
          </div>
        </div>

      </div>

      <!-- Measurable Impact & Metrics Row -->
      <div class="impact-metrics-row">
        <div class="impact-points-list">
          <div class="block-header" style="margin-bottom: var(--space-2);">
            <span class="block-tag impact-tag">The Measurable Impact</span>
          </div>
          ${proj.impact.map(imp => `
            <div class="impact-point-item">
              <span class="impact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <p class="impact-point-text"><strong>${imp.title}:</strong> ${imp.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="metrics-capsule-grid">
          ${proj.metrics.map(m => `
            <div class="metric-capsule">
              <span class="metric-cap-val">${m.value}</span>
              <span class="metric-cap-lbl">${m.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="tech-pills-row">
        ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </article>
  `;
}
