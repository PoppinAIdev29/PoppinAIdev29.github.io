/**
 * data.js — Single source of truth for all portfolio content.
 * Extracted from Arman's real n8n workflows and CV.
 * All modules import from here — zero duplication.
 */

// ─── SKILLS (derived from n8n workflow node types & professional background) ───
const SKILL_CATEGORIES = [
  {
    id: 'fashion-tech',
    name: 'Fashion Tech Skills',
    icon: '🧵',
    color: '#00d4ff',
    colorDim: 'rgba(0, 212, 255, 0.12)',
    skills: [
      { name: 'Quality Systems (QA/QC)', level: 95, label: 'Expert' },
      { name: 'Apparel Workflow Optimization', level: 90, label: 'Expert' },
      { name: 'Manufacturing Analytics', level: 85, label: 'Advanced' },
      { name: 'Operations Coordination', level: 88, label: 'Advanced' },
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation Skills',
    icon: '⚡',
    color: '#7c3aed',
    colorDim: 'rgba(124, 58, 237, 0.12)',
    skills: [
      { name: 'Advanced LLM Prompting', level: 95, label: 'Expert' },
      { name: 'Terminal / CLI Automation', level: 92, label: 'Expert' },
      { name: 'n8n Architecture', level: 97, label: 'Expert' },
      { name: 'API Integrations', level: 95, label: 'Expert' },
    ],
  },
  {
    id: 'performance-marketing',
    name: 'Performance Marketing',
    icon: '📈',
    color: '#f59e0b',
    colorDim: 'rgba(245, 158, 11, 0.12)',
    skills: [
      { name: 'Digital Advertising (Meta)', level: 90, label: 'Expert' },
      { name: 'SEO Automation', level: 92, label: 'Expert' },
      { name: 'Product Positioning', level: 85, label: 'Advanced' },
      { name: 'Campaign Structuring', level: 88, label: 'Advanced' },
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'yolo-defect-detection',
    title: 'AI Garment Defect Detection System',
    icon: '👁️',
    iconBg: 'rgba(59, 130, 246, 0.15)',
    status: 'live',
    desc:
      'Developed an automated QA/QC computer vision system for garment defect classification. A custom Flutter app auto-captures images every 4 seconds and uploads them to a database. A trained YOLOv8 model processes these images, and results are displayed live on a PyQt dashboard.',
    tech: [
      { name: 'YOLOv8', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
      { name: 'Flutter App', color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
      { name: 'PyQt Dashboard', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
      { name: 'FastAPI / DB', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
    ],
    stats: [
      { value: '95%', label: 'Accuracy' },
      { value: '30%', label: 'Time Saved' },
      { value: 'Live', label: 'Dashboard' },
    ],
    workflow: 'QA/QC Automation',
  },
  {
    id: 'arm-description-generator',
    title: 'AI Product Description Generator',
    icon: '🧠',
    iconBg: 'rgba(124, 58, 237, 0.15)',
    status: 'live',
    desc:
      'End-to-end pipeline that discovers product images in Google Drive, runs LLM Vision analysis on each saree image, merges SEO sheet data, generates structured marketing descriptions via Claude and Claude Code, and pushes finalised content back to Google Sheets — completely autonomously using CLI tools.',
    tech: [
      { name: 'Claude Vision', color: '#7c3aed', bg: 'rgba(124,58,237,0.15)' },
      { name: 'Claude Code', color: '#7c3aed', bg: 'rgba(124,58,237,0.15)' },
      { name: 'CLI', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      { name: 'Google Sheets', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      { name: 'n8n Code JS', color: '#f43f5e', bg: 'rgba(244,63,94,0.1)' },
    ],
    stats: [
      { value: '40+', label: 'Nodes' },
      { value: 'SEO', label: 'Optimised' },
      { value: '100%', label: 'Automated' },
    ],
    workflow: 'AI Description Generator',
  },
  {
    id: 'arm-shopify-upload',
    title: 'Shopify Product Upload Engine',
    icon: '🛒',
    iconBg: 'rgba(0, 212, 255, 0.12)',
    status: 'live',
    desc:
      'Enterprise-grade pipeline that merges marketing content, image assets, pricing, and metafields into a Shopify-ready payload. Handles SEO title generation, smart alt-text distribution, dynamic collection assignment, HTML formatting, and variant/inventory updates via both REST and GraphQL.',
    tech: [
      { name: 'Shopify REST', color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
      { name: 'Shopify GraphQL', color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
      { name: 'Google Sheets', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      { name: 'Claude 3.5', color: '#7c3aed', bg: 'rgba(124,58,237,0.15)' },
      { name: 'HTTP API', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    ],
    stats: [
      { value: '50+', label: 'Nodes' },
      { value: '15s', label: 'Bulk Upload' },
      { value: '5', label: 'Image slots' },
    ],
    workflow: 'Shopify Product Upload',
  },
  {
    id: 'seo-search-engine',
    title: 'AI SEO Research Engine',
    icon: '🔍',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    status: 'live',
    desc:
      'Multi-agent SEO pipeline with a Vault Auditor agent (checks existing keyword coverage), a Seed Commander agent (extracts color-washed root keywords), and a Site Auditor agent (runs live SerpAPI searches). Generates SEO titles, H1s, meta descriptions, and alt texts — all backed by real competitor data.',
    tech: [
      { name: 'Claude Agent', color: '#7c3aed', bg: 'rgba(124,58,237,0.15)' },
      { name: 'LLM Orchestration', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      { name: 'SerpAPI', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
      { name: 'DataForSEO', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
      { name: 'n8n DataTable', color: '#f43f5e', bg: 'rgba(244,63,94,0.1)' },
    ],
    stats: [
      { value: '3', label: 'AI Agents' },
      { value: 'Live', label: 'SERP data' },
      { value: '15+', label: 'KW per SKU' },
    ],
    workflow: 'AI SEO Research Engine',
  },
  {
    id: 'shopify-error-workflow',
    title: 'Shopify Error & Safety Guard',
    icon: '🛡',
    iconBg: 'rgba(244, 63, 94, 0.1)',
    status: 'live',
    desc:
      'Production safety net triggered on any workflow failure. Reads recently published product IDs from Google Sheets, filters for products published in the last 15 minutes, fetches live Shopify data, runs a price safety filter (deletes products under ₹1000), and cleans up bad uploads automatically.',
    tech: [
      { name: 'Shopify API', color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
      { name: 'Error Trigger', color: '#f43f5e', bg: 'rgba(244,63,94,0.1)' },
      { name: 'Google Sheets', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
      { name: 'Price Filter JS', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    ],
    stats: [
      { value: '15min', label: 'Response' },
      { value: 'API', label: 'Error Guard' },
      { value: 'Auto', label: 'Cleanup' },
    ],
    workflow: 'Shopify Error Guard',
  },
];

// ─── RADAR CHART DATA ─────────────────────────────────────────────
const RADAR_DATA = [
  { label: 'AI/LLM Prompting', value: 95 },
  { label: 'n8n & CLI', value: 97 },
  { label: 'Performance Marketing', value: 92 },
  { label: 'Quality Systems', value: 90 },
  { label: 'Fashion Tech', value: 90 },
  { label: 'Workflow Optimization', value: 88 },
];
