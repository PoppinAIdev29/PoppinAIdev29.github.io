/**
 * main.js — App shell: navigation scroll, reveal animations,
 * contact form, custom cursor, and section spy.
 */

// ─── NAVBAR SCROLL ────────────────────────────────────────────────
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveSectionLink();
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

// Close menu when a nav link is clicked on mobile
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ─── SECTION SPY ──────────────────────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navAnchor  = document.querySelectorAll('.nav-link[data-section]');

function updateActiveSectionLink() {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navAnchor.forEach(a => {
        a.classList.toggle('active', a.dataset.section === sec.id);
      });
    }
  });
}

// ─── REVEAL ON SCROLL ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target); // Only once
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));

// ─── DYNAMIC CONTACT CARD FEEDBACK ────────────────────────────────
const contactCards = document.querySelectorAll('.contact-link');
contactCards.forEach(card => {
  card.addEventListener('click', () => {
    // Add a temporary dynamic flash glow feedback to the clicked card
    card.style.borderColor = 'var(--clr-cyan)';
    card.style.boxShadow = '0 0 35px var(--clr-cyan-glow), var(--shadow-lg)';
    card.style.transform = 'translateY(-2px) scale(0.98)';
    
    setTimeout(() => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
      card.style.transform = '';
    }, 600);
  });
});

// ─── CUSTOM CURSOR ────────────────────────────────────────────────
const isTouchDevice = window.matchMedia('(hover: none)').matches;

if (!isTouchDevice) {
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    // Dot snaps instantly
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';

    // Ring lags behind for smoothness
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Expand ring on interactive elements
  const interactables = 'a, button, .project-card, .skill-category-card, .wf-node, .wf-card, .contact-link';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactables)) {
      ring.style.width  = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(0,212,255,0.8)';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactables)) {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0,212,255,0.5)';
    }
  });
}

// ─── 3D CARD TILT ────────────────────────────────────────────────
document.getElementById('about-card').addEventListener('mousemove', e => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x    = (e.clientX - rect.left) / rect.width  - 0.5;
  const y    = (e.clientY - rect.top ) / rect.height - 0.5;
  card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
});

document.getElementById('about-card').addEventListener('mouseleave', e => {
  e.currentTarget.style.transform = '';
  e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
});

// ─── SMOOTH SCROLL (fallback for old browsers) ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── INITIAL STATE ────────────────────────────────────────────────
updateActiveSectionLink();
