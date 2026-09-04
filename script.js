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

// Current year in footer
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// Scroll reveal animations
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

// Contact form
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('.form-submit');
    const status = document.getElementById('form-status');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    if (status) {
      status.textContent = '';
      status.classList.remove('visible');
    }

    const formData = new FormData(contactForm);

    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/Keith.LeMontang@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      if (status) {
        status.textContent =
          'Thanks — your message has been sent. Keith will get back to you soon.';
        status.classList.add('visible');
      }

      contactForm.reset();

    } catch (error) {
      if (status) {
        status.textContent =
          'Something went wrong. Please try again or email Keith directly at Keith.LeMontang@gmail.com.';
        status.classList.add('visible');
      }

    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    }
  });
}
