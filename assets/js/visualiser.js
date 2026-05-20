/**
 * visualiser.js — Workflow Architecture Showcase
 *
 * Renders pure HTML/CSS flow diagrams for each workflow.
 * Each card shows: project name, architecture type, tech stack,
 * and a horizontal node-flow diagram with animated connectors.
 */

// ─── WORKFLOW DEFINITIONS ─────────────────────────────────────────

const WORKFLOWS = [
  {
    name: 'AI Product Description Generator',
    archType: 'Fork & Merge',
    archIcon: '⑂',
    archDesc: 'Parallel data sources fork from trigger, then merge before AI processing and output.',
    tech: ['Claude Vision', 'Claude Code', 'CLI', 'Google Sheets', 'n8n Code'],
    stages: [
      {
        label: 'Trigger',
        nodes: [{ name: 'Form Trigger', type: 'trigger', desc: 'User submits batch' }],
      },
      {
        label: 'Ingest',
        nodes: [
          { name: 'Google Sheets', type: 'data', desc: 'Product metadata' },
          { name: 'Google Drive', type: 'integration', desc: 'Image discovery' },
        ],
      },
      {
        label: 'Merge',
        nodes: [{ name: 'Image ↔ SKU Merge', type: 'logic', desc: 'Match images to products by SKU' }],
      },
      {
        label: 'AI Analysis',
        nodes: [
          { name: 'Claude Vision', type: 'ai', desc: 'Analyse patterns, colors, fabric' },
          { name: 'SEO Lookup', type: 'data', desc: 'Pull keywords & alt text' },
        ],
      },
      {
        label: 'Generate',
        nodes: [{ name: 'Claude Code', type: 'ai', desc: 'Structured marketing copy' }],
      },
      {
        label: 'Output',
        nodes: [
          { name: 'JS Formatter', type: 'code', desc: 'HTML cleanup & validation' },
          { name: 'Write to Sheets', type: 'data', desc: 'Push final descriptions' },
        ],
      },
    ],
  },
  {
    name: 'Shopify Product Upload Engine',
    archType: 'Multi-Merge Pipeline',
    archIcon: '⫘',
    archDesc: 'Triple data sources converge, then branch into parallel code processors before dual API output.',
    tech: ['Shopify REST', 'Shopify GraphQL', 'Google Sheets', 'CLI', 'Claude 3.5'],
    stages: [
      {
        label: 'Trigger',
        nodes: [{ name: 'Manual Trigger', type: 'trigger', desc: 'Operator starts batch' }],
      },
      {
        label: 'Data Sources',
        nodes: [
          { name: 'Marketing Sheet', type: 'data', desc: 'Titles, descriptions, tags' },
          { name: 'Pricing Sheet', type: 'data', desc: 'MRP & variant pricing' },
          { name: 'Image Assets', type: 'integration', desc: '5 images from Drive' },
        ],
      },
      {
        label: 'Merge & Process',
        nodes: [
          { name: 'Triple Merge', type: 'logic', desc: 'Unified product payload' },
          { name: 'SKU Parser', type: 'code', desc: 'Extract collection & color' },
        ],
      },
      {
        label: 'AI Enrich',
        nodes: [
          { name: 'Claude SEO Titles', type: 'ai', desc: 'SEO-optimised titles' },
          { name: 'Alt Text Gen', type: 'ai', desc: 'Unique alt per image' },
        ],
      },
      {
        label: 'Build',
        nodes: [
          { name: 'HTML Builder', type: 'code', desc: 'Responsive tables' },
          { name: 'Payload Builder', type: 'code', desc: 'Shopify JSON + metafields' },
        ],
      },
      {
        label: 'Publish',
        nodes: [
          { name: 'Shopify REST', type: 'integration', desc: 'Create product & images' },
          { name: 'Shopify GraphQL', type: 'integration', desc: 'Metafields & inventory' },
        ],
      },
    ],
  },
  {
    name: 'AI SEO Research Engine',
    archType: 'Multi-Agent',
    archIcon: '🤖',
    archDesc: 'Parallel AI agents research independently, converge into SERP analysis, then output structured SEO.',
    tech: ['Claude Agent', 'LLMs', 'SerpAPI', 'DataForSEO', 'Google Sheets'],
    stages: [
      {
        label: 'Input',
        nodes: [{ name: 'Form Input', type: 'trigger', desc: 'Product name & category' }],
      },
      {
        label: 'AI Agents',
        nodes: [
          { name: 'Vault Auditor', type: 'ai', desc: 'Check keyword vault for gaps' },
          { name: 'Seed Commander', type: 'ai', desc: 'Extract root keywords' },
        ],
      },
      {
        label: 'Research',
        nodes: [
          { name: 'SerpAPI', type: 'integration', desc: 'Live Google SERP data' },
          { name: 'DataForSEO', type: 'integration', desc: 'Autocomplete suggestions' },
        ],
      },
      {
        label: 'Analyse',
        nodes: [{ name: 'SERP Analyser', type: 'code', desc: 'Parse competitor SEO' }],
      },
      {
        label: 'Generate',
        nodes: [{ name: 'Site Auditor Agent', type: 'ai', desc: 'Final SEO copy & meta' }],
      },
      {
        label: 'Output',
        nodes: [{ name: 'Write to Sheets', type: 'data', desc: '15+ keywords per SKU' }],
      },
    ],
  },
  {
    name: 'Shopify Error & Safety Guard',
    archType: 'Linear Guard',
    archIcon: '🛡',
    archDesc: 'Sequential pipeline: detect error → fetch suspects → validate → branch cleanup or keep.',
    tech: ['Error Trigger', 'Shopify API', 'Google Sheets', 'JS Price Filter'],
    stages: [
      {
        label: 'Detect',
        nodes: [{ name: 'Error Trigger', type: 'trigger', desc: 'Auto-fires on failure' }],
      },
      {
        label: 'Fetch',
        nodes: [
          { name: 'Read Published IDs', type: 'data', desc: 'Recent products from log' },
          { name: 'Time Filter', type: 'code', desc: 'Last 15 minutes only' },
        ],
      },
      {
        label: 'Validate',
        nodes: [
          { name: 'Get Product', type: 'integration', desc: 'Live Shopify data' },
          { name: 'Price Guard', type: 'code', desc: 'Flag if under ₹1000' },
        ],
      },
      {
        label: 'Decision',
        nodes: [{ name: 'Cleanup Router', type: 'logic', desc: 'Delete bad / keep valid' }],
      },
      {
        label: 'Action',
        nodes: [
          { name: 'Shopify Delete', type: 'integration', desc: 'Unpublish bad products' },
          { name: 'Log to Sheets', type: 'data', desc: 'Record cleanup actions' },
        ],
      },
    ],
  },
  {
    name: 'AI Garment Defect Detection System',
    archType: 'Mobile-to-Cloud Pipeline',
    archIcon: '👁️',
    archDesc: 'Flutter mobile app auto-captures images periodically, uploading them to a database for YOLOv8 visual inference and live PyQt dashboard validation.',
    tech: ['Flutter', 'YOLOv8', 'Database', 'PyQt', 'FastAPI'],
    stages: [
      {
        label: 'Capture',
        nodes: [{ name: 'Flutter App', type: 'trigger', desc: 'Auto-captures image every 4 sec' }],
      },
      {
        label: 'Ingest',
        nodes: [
          { name: 'Database Upload', type: 'data', desc: 'Sync image to central database' },
        ],
      },
      {
        label: 'AI Inspect',
        nodes: [
          { name: 'Fetch Image', type: 'integration', desc: 'Pull pending image' },
          { name: 'YOLOv8 Inference', type: 'ai', desc: 'Detect defects (stains, holes)' },
        ],
      },
      {
        label: 'Dashboard',
        nodes: [
          { name: 'PyQt App', type: 'logic', desc: 'Live monitoring & result display' },
        ],
      },
    ],
  },
];

// ─── CATEGORY COLORS ──────────────────────────────────────────────
const CAT = {
  trigger:     { color: '#ffaa00', bg: 'rgba(255,170,0,0.08)',  icon: '⚡' },
  ai:          { color: '#a855f7', bg: 'rgba(168,85,247,0.08)', icon: '🧠' },
  data:        { color: '#00f5a0', bg: 'rgba(0,245,160,0.06)',  icon: '📊' },
  integration: { color: '#00f0ff', bg: 'rgba(0,240,255,0.08)',   icon: '🔗' },
  code:        { color: '#ff007f', bg: 'rgba(255,0,127,0.08)',   icon: '{ }' },
  logic:       { color: '#64748b', bg: 'rgba(100,116,139,0.08)', icon: '⑂' },
};

// ─── RENDER ───────────────────────────────────────────────────────
const showcase = document.getElementById('wf-showcase');

WORKFLOWS.forEach((wf, wfIdx) => {
  const card = document.createElement('div');
  card.className = 'wf-card reveal';
  card.style.transitionDelay = `${wfIdx * 0.1}s`;

  // Header: name + arch type + tech
  const techPills = wf.tech.map(t => `<span class="wf-tech-pill">${t}</span>`).join('');

  card.innerHTML = `
    <div class="wf-card-header">
      <div class="wf-card-info">
        <h3 class="wf-card-title">${wf.name}</h3>
        <p class="wf-card-desc">${wf.archDesc}</p>
        <div class="wf-card-meta">
          <span class="wf-arch-badge">
            <span class="wf-arch-icon">${wf.archIcon}</span>
            ${wf.archType}
          </span>
          <span class="wf-node-count">${wf.stages.reduce((s, st) => s + st.nodes.length, 0)} nodes</span>
          <span class="wf-stage-count">${wf.stages.length} stages</span>
        </div>
        <div class="wf-tech-row">${techPills}</div>
      </div>
    </div>
    <div class="wf-flow-container">
      <div class="wf-flow">
        ${wf.stages.map((stage, si) => `
          <div class="wf-stage">
            <div class="wf-stage-label">${stage.label}</div>
            <div class="wf-stage-nodes">
              ${stage.nodes.map(node => {
                const c = CAT[node.type] || CAT.logic;
                return `
                  <div class="wf-node" style="--node-color:${c.color};--node-bg:${c.bg}" title="${node.desc}">
                    <span class="wf-node-icon">${c.icon}</span>
                    <span class="wf-node-name">${node.name}</span>
                    <span class="wf-node-desc">${node.desc}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
          ${si < wf.stages.length - 1 ? '<div class="wf-arrow"><div class="wf-arrow-line"></div><div class="wf-arrow-head">›</div></div>' : ''}
        `).join('')}
      </div>
    </div>
    <div class="wf-flow-legend">
      ${Object.entries(CAT).map(([k, v]) => `<div class="wf-legend-item"><span class="wf-legend-dot" style="background:${v.color}"></span>${k}</div>`).join('')}
    </div>
  `;

  showcase.appendChild(card);
});
