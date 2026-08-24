/**
 * main.js — App Shell, Section Spy, Timeline Renderer & Smooth Scroll
 * Zero emojis, clean execution, no runtime errors.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSectionSpy();
  initRevealAnimations();
  renderExperienceTimeline();
  initSmoothScroll();
});

// ─── NAVBAR ───────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// ─── SECTION SPY ──────────────────────────────────────────────────
function initSectionSpy() {
  const sections = document.querySelectorAll('section[id], .domain-block[id]');
  const navAnchors = document.querySelectorAll('.nav-link[data-section]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.dataset.section === sec.id);
        });
      }
    });
  }, { passive: true });
}

// ─── REVEAL ANIMATIONS ────────────────────────────────────────────
function initRevealAnimations() {
  const revealEls = document.querySelectorAll('.reveal');

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach(el => revealObs.observe(el));
}

// ─── EXPERIENCE TIMELINE ──────────────────────────────────────────
function renderExperienceTimeline() {
  const container = document.getElementById('experience-timeline');
  const expData = window.EXPERIENCES || (typeof EXPERIENCES !== 'undefined' ? EXPERIENCES : []);
  if (!container || !expData.length) return;

  container.innerHTML = expData.map(exp => `
    <div class="exp-card reveal">
      <div class="exp-header-row">
        <div>
          <h3 class="exp-role-title">${exp.role}</h3>
          <h4 class="exp-company">${exp.company}</h4>
        </div>
        <span class="exp-period">${exp.period}</span>
      </div>
      <p class="exp-summary">${exp.summary}</p>
      <div class="exp-tags-row">
        ${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Observe newly inserted reveal elements
  document.querySelectorAll('.exp-card.reveal').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

// ─── SMOOTH SCROLL ────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
