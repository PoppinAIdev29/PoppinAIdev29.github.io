/**
 * data.js — Single Source of Truth for Operations Architect Portfolio
 * Senior-level architectures bridging Marketing, Engineering, and Operations.
 * Zero Emojis — Strictly professional typography.
 */

// Global Portfolio Information
window.PORTFOLIO_INFO = {
  name: 'Arman',
  title: 'Operations Architect',
  specialization: 'AI Automation & Performance Marketing Architecture',
  tagline: 'Bridging Marketing, Engineering, and Operations to Drive Scale',
  overview:
    'Currently driving R&D, Branding, and Marketing Operations. My core focus is engineering decentralized AI pipelines, headless automation, and computer vision systems that eliminate operational bottlenecks, reduce CAPEX, and drive measurable performance marketing KPIs.',
  education: 'Bachelors of Fashion Technology (NIFT)',
  stats: [
    { value: '4', label: 'Enterprise Systems' },
    { value: '$0', label: 'SaaS Scraper Overhead' },
    { value: '100%', label: 'Programmatic SEO' },
    { value: '~35K', label: 'Edge CV Dataset' }
  ]
};

// 3 Domains and 4 Comprehensive Case Studies
window.DOMAINS = [
  {
    id: 'performance-marketing',
    domainNumber: '01',
    name: 'Performance Marketing & Creative Automation',
    focus: 'Eliminating creative fatigue and reducing acquisition costs through autonomous, AI-driven asset generation.',
    projects: [
      {
        id: 'meta-ad-intelligence',
        domainId: 'performance-marketing',
        domainLabel: 'Performance Marketing',
        title: 'Cost-Optimized Meta Ad Intelligence & Autonomous Video Pipeline',
        type: 'Case Study',
        status: 'production',
        badge: 'Zero-Cost Hybrid Pipeline',
        summary:
          'Hybrid-cloud automation architecture replacing expensive SaaS scrapers with a local Docker/Playwright container, bridging via ngrok to cloud n8n for LLM reverse-engineering and automated video generation via File AI API.',
        
        problem: {
          statement:
            'In the highly competitive traditional wear market, local competitors achieve high ROAS by catering to highly specific audience nuances. To capture market share, we needed deep, continuous competitor analysis of their Meta ads. Initially, I integrated n8n with third-party APIs (Apify) to scrape ad data, but given our high daily volume, SaaS API costs quickly became prohibitive.',
          flowNodes: [
            { step: '1', title: 'High-Volume Ad Tracking', desc: 'Daily competitor campaigns monitored across regional Meta markets' },
            { step: '2', title: 'Third-Party SaaS APIs', desc: 'High recurring Apify API bills and rate-limit friction' },
            { step: '3', title: 'Prohibitive Unit Cost', desc: 'Continuous deep monitoring financially unviable at scale' },
            { step: '4', title: 'Creative Fatigue & High CPR', desc: 'Slow asset turnaround causing audience fatigue and rising ad costs' }
          ]
        },

        solution: {
          points: [
            {
              title: 'Cost-Optimized Extraction',
              desc: 'Built a custom Meta Ads scraper hosted in a local Docker container using Playwright/Chromium to handle mass data extraction without SaaS fees.'
            },
            {
              title: 'Local-to-Cloud Bridge',
              desc: 'Utilized ngrok to securely expose the local Docker program, triggering it via HTTPS requests from our cloud-based n8n orchestrator.'
            },
            {
              title: 'AI Intelligence Layer',
              desc: 'Configured n8n (using Custom JS and LLMs) to reverse-engineer competitor hook lines, CTAs, and emotional drivers, synthesizing 5 highly optimized script variations.'
            },
            {
              title: 'Autonomous Production',
              desc: 'After a streamlined human-in-the-loop (HITL) approval by the Creative Head, n8n routes the winning script to the File AI API, which dynamically generates the final video creative.'
            }
          ],
          flowchart: {
            name: 'Meta Ad Intelligence & Autonomous Video Pipeline',
            archType: 'Hybrid-Cloud & Edge Trigger',
            stages: [
              {
                label: 'Trigger',
                nodes: [{ name: 'n8n Cron Trigger', type: 'trigger', desc: 'Cloud scheduled run' }]
              },
              {
                label: 'Scrape Engine',
                nodes: [
                  { name: 'ngrok Tunnel', type: 'integration', desc: 'Secure HTTPS bridge' },
                  { name: 'Docker / Playwright', type: 'code', desc: 'Local Chromium scraper' }
                ]
              },
              {
                label: 'AI Synthesis',
                nodes: [
                  { name: 'LLM Hook Analyzer', type: 'ai', desc: 'Reverse-engineer CTAs & angles' },
                  { name: '5x Script Generator', type: 'ai', desc: 'Synthesize winning scripts' }
                ]
              },
              {
                label: 'HITL Review',
                nodes: [{ name: 'Creative Head HITL', type: 'logic', desc: '1-click approval UI' }]
              },
              {
                label: 'Production',
                nodes: [{ name: 'File AI API', type: 'integration', desc: 'Autonomous video rendering' }]
              }
            ]
          }
        },

        impact: [
          {
            title: 'Massive Cost Avoidance',
            desc: 'Brought scraping costs down to near zero by replacing expensive SaaS queries with a custom local program.'
          },
          {
            title: 'Infinite Creative Velocity',
            desc: 'Established an unbreakable creative supply chain. We generate mass video variations on demand, stabilizing our Cost Per Result (CPR) by combating audience fatigue.'
          }
        ],

        tech: ['Playwright', 'Docker', 'ngrok', 'n8n', 'Custom JS', 'LLMs', 'File AI API'],
        metrics: [
          { value: 'Near $0', label: 'Scraping Cost' },
          { value: '5 Variations', label: 'Per Script Run' },
          { value: 'Stabilized', label: 'Meta CPR' }
        ]
      }
    ]
  },
  {
    id: 'ecommerce-catalog-operations',
    domainNumber: '02',
    name: 'E-Commerce & Catalog Operations',
    focus: 'Accelerating new product time-to-market while autonomously overhauling the SEO and visual presentation of legacy inventory at scale.',
    projects: [
      {
        id: 'programmatic-seo-engine',
        domainId: 'ecommerce-catalog-operations',
        domainLabel: 'E-Commerce Operations',
        title: 'Autonomous Multi-Channel Cataloging & Programmatic SEO Engine',
        type: 'Project A',
        status: 'production',
        badge: 'Zero-Touch Publishing',
        summary:
          'A zero-touch cataloging engine utilizing n8n, Custom JS, and Shopify GraphQL Admin API to autonomously research search terms, generate SEO copy, shape payloads, and publish SKUs instantly.',
        
        problem: {
          statement:
            'Our product cataloging pipeline suffered from a fragmented, manual bottleneck: keyword research, copywriting, and data-entry uploading to Shopify were all done by hand. This caused severe launch delays during high-volume drops and led to inconsistent SEO quality.',
          flowNodes: [
            { step: '1', title: 'New SKU Drop Batches', desc: 'Hundreds of new SKUs arriving with raw manufacturer specs' },
            { step: '2', title: 'Manual Keyword & Copy', desc: 'Human copywriters manually researching root terms per SKU' },
            { step: '3', title: 'Fragmented Data Entry', desc: 'Manual CSV/Shopify backend entry prone to broken tags' },
            { step: '4', title: 'Multi-Day Launch Delays', desc: 'Products stuck in staging, missing high-traffic sales windows' }
          ]
        },

        solution: {
          points: [
            {
              title: 'Algorithmic Intelligence & Copy Synthesis',
              desc: 'An automated workflow extracts high-intent search terms for every new SKU, routing them through LLM prompt chains to dynamically output search-optimized H1s and multi-channel descriptions.'
            },
            {
              title: 'Payload Shaping & Ingestion',
              desc: 'Custom JS functions sanitize formatting and construct GraphQL payloads. HTTPS Request nodes then execute authenticated productCreate mutations directly to the Shopify Admin API, publishing the products instantly.'
            }
          ],
          flowchart: {
            name: 'Autonomous Multi-Channel Cataloging Engine',
            archType: 'Direct Programmatic Ingestion',
            stages: [
              {
                label: 'Ingest',
                nodes: [{ name: 'Google Sheets / Drive', type: 'data', desc: 'Raw SKU & specs' }]
              },
              {
                label: 'Search Extraction',
                nodes: [{ name: 'High-Intent Extractor', type: 'code', desc: 'Algorithm keyword parsing' }]
              },
              {
                label: 'LLM Synthesis',
                nodes: [
                  { name: 'SEO H1 Generator', type: 'ai', desc: 'Search-optimized headings' },
                  { name: 'Multi-Channel Copy', type: 'ai', desc: 'Structured HTML copy' }
                ]
              },
              {
                label: 'Payload Shaping',
                nodes: [{ name: 'Custom JS Sanitizer', type: 'code', desc: 'GraphQL payload validator' }]
              },
              {
                label: 'Zero-Touch Publish',
                nodes: [{ name: 'Shopify GraphQL API', type: 'integration', desc: 'Authenticated productCreate' }]
              }
            ]
          }
        },

        impact: [
          {
            title: 'Reduced Time-to-Market',
            desc: 'Reduced time-to-market per catalog from days to seconds.'
          },
          {
            title: '100% SEO Compliance',
            desc: 'Guaranteed 100% on-page SEO compliance and eradicated manual data-entry errors (broken tags, missing fields).'
          }
        ],

        tech: ['n8n', 'Custom JavaScript', 'Shopify GraphQL API', 'Claude / LLMs', 'Google Sheets'],
        metrics: [
          { value: 'Days to Secs', label: 'Time-to-Market' },
          { value: '100%', label: 'SEO Compliance' },
          { value: '0 Errors', label: 'Manual Field Flaws' }
        ]
      },
      {
        id: 'legacy-inventory-revitalization',
        domainId: 'ecommerce-catalog-operations',
        domainLabel: 'E-Commerce Operations',
        title: 'Multi-Modal Legacy Inventory Revitalization Engine',
        type: 'Project B',
        status: 'production',
        badge: 'Multi-Modal AI Pipeline',
        summary:
          'Retroactive multi-modal automation systematically pulling legacy SKUs via REST, rewriting outdated copy with LLMs, synthesizing new high-res image angles with Image-to-Image AI, and updating Shopify via GraphQL.',
        
        problem: {
          statement:
            'Our database contained a massive backlog of legacy inventory suffering from unstructured, poor-SEO descriptions and sparse visual galleries (only 2–3 images per SKU). Manually auditing, copywriting, and executing fresh photoshoots for thousands of historical products was financially unviable.',
          flowNodes: [
            { step: '1', title: 'Thousands of Backlog SKUs', desc: 'Historical products buried with poor formatting and outdated copy' },
            { step: '2', title: 'Sparse Visual Galleries', desc: 'Only 2-3 low-res flat photos per product depressing conversion' },
            { step: '3', title: 'Cost Barrier to Reshoot', desc: 'Studio photography and copy auditing financially unviable' },
            { step: '4', title: 'Depressed Catalog Organic ROAS', desc: 'High potential inventory left completely invisible to search' }
          ]
        },

        solution: {
          points: [
            {
              title: 'Mass Extraction & Text Restructuring',
              desc: 'The n8n workflow pages through the Shopify REST API, systematically pulling down legacy SKUs. Old descriptions are fed into an LLM that strips outdated formatting and rewrites the copy to match modern SEO architecture.'
            },
            {
              title: 'AI Vision Asset Expansion',
              desc: 'Simultaneously, base images are processed through an AI image-to-image pipeline, synthesizing new, high-resolution image variations without physical reshoots.'
            },
            {
              title: 'Precision Updating',
              desc: 'Using HTTP Request nodes, the workflow fires precise Shopify GraphQL mutations to overwrite old descriptions and attach the expanded image arrays seamlessly.'
            }
          ],
          flowchart: {
            name: 'Multi-Modal Legacy Inventory Revitalization',
            archType: 'Parallel Text & Vision Pipeline',
            stages: [
              {
                label: 'Extract',
                nodes: [{ name: 'Shopify REST API', type: 'integration', desc: 'Paginated legacy SKU sweep' }]
              },
              {
                label: 'Parallel Branch',
                nodes: [
                  { name: 'LLM Copy Reformatter', type: 'ai', desc: 'Strip legacy formats & SEO rewrite' },
                  { name: 'Img2Img AI Engine', type: 'ai', desc: 'Synthesize expanded image angles' }
                ]
              },
              {
                label: 'Payload Merge',
                nodes: [{ name: 'JS Mutation Shaper', type: 'code', desc: 'Validate HTML & image arrays' }]
              },
              {
                label: 'Precision Mutation',
                nodes: [{ name: 'Shopify GraphQL API', type: 'integration', desc: 'Batch update description & gallery' }]
              }
            ]
          }
        },

        impact: [
          {
            title: 'Eliminated Manual Photography',
            desc: 'Eliminated the need for expensive manual photography for thousands of existing SKUs.'
          },
          {
            title: 'Massive Search & Conversion Uplift',
            desc: 'Massively improved search visibility and on-page conversion probability for older, buried products, achieving an overhaul that would have taken a dedicated team months to complete.'
          }
        ],

        tech: ['Shopify REST API', 'Shopify GraphQL API', 'Image-to-Image AI', 'Claude / LLMs', 'n8n'],
        metrics: [
          { value: '1000s', label: 'SKUs Revitalized' },
          { value: '$0 Studio Cost', label: 'Asset Synthesis' },
          { value: '4x', label: 'Gallery Density' }
        ]
      }
    ]
  },
  {
    id: 'industrial-qa-computer-vision',
    domainNumber: '03',
    name: 'Industrial QA & Computer Vision',
    focus: 'Deploying edge AI and decentralized computer vision to enforce quality control across physical manufacturing pipelines.',
    projects: [
      {
        id: 'fabric-defect-detection',
        domainId: 'industrial-qa-computer-vision',
        domainLabel: 'Industrial Edge AI',
        title: 'Decentralized AI Fabric Defect Detection System',
        type: 'Case Study',
        status: 'production',
        badge: 'Edge Computer Vision',
        summary:
          'End-to-end Edge AI telemetry pipeline utilizing smartphones (4 FPS capture) streaming via ngrok to local desktop hosts with SQLite queues, scanning through a custom YOLOv8 model trained on ~35,000 defect images.',
        
        problem: {
          statement:
            'Across our decentralized production network, the head office faced persistent quality control issues with yellow fabric manufacturing (stains, holes, weaving mistakes). We lacked a standardized way to track which corporate production house was responsible for specific defects. Deploying enterprise-grade industrial camera rigs to every location was cost-prohibitive; the only common infrastructure was standard PCs and smartphones.',
          flowNodes: [
            { step: '1', title: 'Decentralized Factories', desc: 'Multiple independent production houses weaving yellow fabric' },
            { step: '2', title: 'Undetected Defects', desc: 'Stains, holes, and weaving flaws slipping into final rolls' },
            { step: '3', title: 'Zero Supply Accountability', desc: 'No verifiable telemetry tracking which unit generated the defect' },
            { step: '4', title: 'Mass Fabric Spoilage', desc: 'Expensive industrial rigs cost-prohibitive; high material loss' }
          ]
        },

        solution: {
          points: [
            {
              title: 'Custom Computer Vision Model',
              desc: 'Trained a YOLOv8 model on a proprietary dataset of ~35,000 images categorized by specific fabric defects, optimized for consumer GPUs.'
            },
            {
              title: 'Edge-Server Deployment',
              desc: 'Packaged the backend into a one-click desktop installer file, allowing non-technical managers to instantly turn their local PC into the host server.'
            },
            {
              title: 'Mobile Capture Layer',
              desc: 'Developed a custom Flutter mobile application. Mounted phones capture and stream 4 frames per second during the fabric inspection phase.'
            },
            {
              title: 'Secure Telemetry & Inference',
              desc: 'The app transmits frames over HTTP via an ngrok tunnel to the local desktop host. A custom Python backend queues payloads in a SQLite database, where YOLOv8 sequentially scans them. Results are pushed to a local UI dashboard and echoed to the mobile app.'
            }
          ],
          flowchart: {
            name: 'Decentralized AI Fabric Defect Detection Pipeline',
            archType: 'Edge Telemetry & Inference',
            stages: [
              {
                label: 'Mobile Capture',
                nodes: [{ name: 'Flutter Mobile App', type: 'trigger', desc: 'Mounted phone streaming 4 FPS' }]
              },
              {
                label: 'Telemetry Bridge',
                nodes: [{ name: 'ngrok Secure Tunnel', type: 'integration', desc: 'Encrypted local PC bridge' }]
              },
              {
                label: 'Local Host Queue',
                nodes: [{ name: 'Python SQLite Buffer', type: 'data', desc: 'Local FIFO frame buffer' }]
              },
              {
                label: 'Edge AI Inference',
                nodes: [{ name: 'YOLOv8 Edge Model', type: 'ai', desc: '~35,000 defect image dataset' }]
              },
              {
                label: 'Dashboard & Alert',
                nodes: [
                  { name: 'PyQt Desktop Dashboard', type: 'code', desc: 'Live defect telemetry for HQ' },
                  { name: 'Mobile Halt Alert', type: 'logic', desc: 'Instant machine halt trigger' }
                ]
              }
            ]
          }
        },

        impact: [
          {
            title: 'Complete Supply Chain Traceability',
            desc: 'HQ now has a unified dashboard mapping exact defect counts directly to the responsible corporate house.'
          },
          {
            title: 'Zero Hardware CAPEX',
            desc: 'Bypassed expensive industrial sensors by leveraging existing smartphones and desktop graphics cards.'
          },
          {
            title: 'Actionable Accountability',
            desc: 'Production houses can immediately halt machinery upon seeing real-time quality degradation, preventing mass fabric spoilage.'
          }
        ],

        tech: ['YOLOv8', 'PyTorch', 'Flutter', 'ngrok', 'Python', 'SQLite', 'PyQt', 'Consumer GPUs'],
        metrics: [
          { value: '~35,000', label: 'Trained Defect Images' },
          { value: '4 FPS', label: 'Stream Inference' },
          { value: '$0 Sensor', label: 'Hardware CAPEX' }
        ]
      }
    ]
  }
];

window.ALL_PROJECTS = window.DOMAINS.flatMap(d => d.projects);

// 3 Technical Skill Sets (Zero Emojis)
window.SKILL_CATEGORIES = [
  {
    id: 'ai-edge-automation',
    name: 'AI, Edge & Automation Architecture',
    skills: [
      { name: 'Decentralized AI Pipelines & Edge CV', level: 96, label: 'Expert' },
      { name: 'n8n & Headless Workflow Architecture', level: 98, label: 'Expert' },
      { name: 'Playwright / Docker / Headless Scraping', level: 94, label: 'Expert' },
      { name: 'Advanced LLM Prompt Chains & Vision APIs', level: 95, label: 'Expert' }
    ]
  },
  {
    id: 'ecommerce-seo-systems',
    name: 'E-Commerce & Programmatic Systems',
    skills: [
      { name: 'Shopify GraphQL & REST Admin APIs', level: 96, label: 'Expert' },
      { name: 'Programmatic SEO & Search Ingestion', level: 94, label: 'Expert' },
      { name: 'Multi-Modal Asset Generation (Img2Img / Vision)', level: 92, label: 'Expert' },
      { name: 'Data Pipeline Sanitization & GraphQL Shaping', level: 95, label: 'Expert' }
    ]
  },
  {
    id: 'operations-performance',
    name: 'Operations & Performance Engineering',
    skills: [
      { name: 'Supply Chain Traceability & QA/QC Telemetry', level: 95, label: 'Expert' },
      { name: 'Performance Marketing Meta Intelligence', level: 92, label: 'Expert' },
      { name: 'Zero-CAPEX Hardware Repurposing', level: 90, label: 'Advanced' },
      { name: 'Flutter & Desktop PyQT Interface Integration', level: 88, label: 'Advanced' }
    ]
  }
];

// Experience Timeline Data
window.EXPERIENCES = [
  {
    period: 'July 2025 - Present',
    role: 'Marketing & Business Operations Trainee',
    company: 'Laxmipati Group, Surat',
    summary:
      'Spearheading R&D, digital advertising intelligence, and marketing operations. Architected complete decentralized n8n automation pipelines, the Shopify GraphQL Programmatic Cataloging Engine, and the Meta Ad Reverse-Engineering Video Pipeline.',
    tags: ['Decentralized AI', 'n8n', 'Shopify GraphQL', 'Meta Intelligence', 'Programmatic SEO']
  },
  {
    period: 'Jan 2025 - April 2025',
    role: 'Intern',
    company: 'Marketplace India, Mumbai',
    summary:
      'Engineered the Decentralized AI Garment Defect Detection System. Built the Flutter mobile streaming layer, ngrok telemetry bridge, and SQLite-backed YOLOv8 inference engine for zero-CAPEX quality control across cooperative production houses.',
    tags: ['YOLOv8', 'Computer Vision', 'Flutter', 'PyQt', 'Edge Telemetry', 'SQLite']
  }
];
