const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const reveals = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  reveals.forEach((item) => observer.observe(item));
}

const formNext = document.getElementById('form-next');

if (formNext) {
  formNext.value =
    `${window.location.origin}${window.location.pathname}?sent=1#contact`;
}

const params = new URLSearchParams(window.location.search);
const formStatus = document.getElementById('form-status');

if (params.get('sent') === '1' && formStatus) {
  formStatus.textContent =
    'Thanks — your message has been sent. Keith will get back to you soon.';

  formStatus.classList.add('visible');

  if (window.history.replaceState) {
    const cleanUrl =
      `${window.location.pathname}${window.location.hash || '#contact'}`;

    window.history.replaceState({}, document.title, cleanUrl);
  }
}
