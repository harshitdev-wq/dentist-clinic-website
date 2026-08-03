/* ============================================================
   Lumière Dental — main.js
   Navigation, mobile menu, sliders, FAQ, booking form, reveals
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Lucide icons
  ---------------------------------------------------------- */
  function renderIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  /* ----------------------------------------------------------
     Sticky header state
  ---------------------------------------------------------- */
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (backToTop) backToTop.classList.toggle('visible', y > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ----------------------------------------------------------
     Mobile menu (Atelier-style overlay)
  ---------------------------------------------------------- */
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const menuItems = mobileMenu ? mobileMenu.querySelectorAll('.menu-item') : [];

  function setMenuItemDelays(opening) {
    menuItems.forEach(function (item, i) {
      item.style.transitionDelay = opening ? 150 + i * 80 + 'ms' : '0ms';
    });
  }

  function openMenu() {
    if (!mobileMenu) return;
    setMenuItemDelays(true);
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    if (hamburger) {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobileMenu) return;
    setMenuItemDelays(false);
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    if (hamburger) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      mobileMenu && mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
  }
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ----------------------------------------------------------
     Scroll reveal
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ----------------------------------------------------------
     Active section highlighting
  ---------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = [];
  navLinks.forEach(function (link) {
    const section = document.getElementById(link.dataset.section);
    if (section) sections.push(section);
  });

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.toggle('active', link.dataset.section === entry.target.id);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(function (s) {
      sectionObserver.observe(s);
    });
  }

  /* ----------------------------------------------------------
     Back to top
  ---------------------------------------------------------- */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     FAQ accordion
  ---------------------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        const b = openItem.querySelector('.faq-question');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ----------------------------------------------------------
     Testimonials slider
  ---------------------------------------------------------- */
  const track = document.getElementById('testimonial-track');
  const dotsWrap = document.getElementById('testimonial-dots');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (track && dotsWrap) {
    const slides = track.querySelectorAll('.testimonial-slide');
    let current = 0;
    let autoTimer = null;

    slides.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.className =
        'testimonial-dot h-2 w-2 rounded-full bg-stone-300' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', function () {
        goTo(i);
        restartAuto();
      });
      dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll('.testimonial-dot');

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function restartAuto() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(function () {
        goTo(current + 1);
      }, 6000);
    }

    if (prevBtn)
      prevBtn.addEventListener('click', function () {
        goTo(current - 1);
        restartAuto();
      });
    if (nextBtn)
      nextBtn.addEventListener('click', function () {
        goTo(current + 1);
        restartAuto();
      });

    restartAuto();
  }

  /* ----------------------------------------------------------
     Booking form (RESTful Table API)
  ---------------------------------------------------------- */
  const bookingForm = document.getElementById('booking-form');

  function setFieldError(input, message) {
    const errorEl = document.getElementById(input.id + '-error');
    if (message) {
      input.classList.add('input-error');
      input.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
      }
    } else {
      input.classList.remove('input-error');
      input.removeAttribute('aria-invalid');
      if (errorEl) errorEl.classList.remove('visible');
    }
  }

  if (bookingForm) {
    const fields = {
      name: document.getElementById('book-name'),
      email: document.getElementById('book-email'),
      phone: document.getElementById('book-phone'),
      service: document.getElementById('book-service'),
      date: document.getElementById('book-date'),
      time: document.getElementById('book-time'),
      message: document.getElementById('book-message')
    };
    const submitBtn = document.getElementById('booking-submit');
    const successBox = document.getElementById('booking-success');
    const errorBox = document.getElementById('booking-error');

    // Prevent past dates
    if (fields.date) {
      fields.date.min = new Date().toISOString().split('T')[0];
    }

    // Clear error state while typing
    Object.keys(fields).forEach(function (key) {
      const input = fields[key];
      if (!input) return;
      input.addEventListener('input', function () {
        setFieldError(input, '');
      });
    });

    function validate() {
      let ok = true;
      if (!fields.name.value.trim() || fields.name.value.trim().length < 2) {
        setFieldError(fields.name, 'Please enter your full name.');
        ok = false;
      }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRe.test(fields.email.value.trim())) {
        setFieldError(fields.email, 'Please enter a valid email address.');
        ok = false;
      }
      const phoneDigits = fields.phone.value.replace(/\D/g, '');
      if (phoneDigits.length < 7) {
        setFieldError(fields.phone, 'Please enter a valid phone number.');
        ok = false;
      }
      if (!fields.service.value) {
        setFieldError(fields.service, 'Please select a service.');
        ok = false;
      }
      if (!fields.date.value) {
        setFieldError(fields.date, 'Please choose a preferred date.');
        ok = false;
      }
      if (!fields.time.value) {
        setFieldError(fields.time, 'Please choose a time slot.');
        ok = false;
      }
      return ok;
    }

    bookingForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      successBox.classList.add('hidden');
      errorBox.classList.add('hidden');

      if (!validate()) return;

      const payload = {
        full_name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        phone: fields.phone.value.trim(),
        service: fields.service.value,
        preferred_date: fields.date.value,
        preferred_time: fields.time.value,
        message: fields.message.value.trim(),
        status: 'pending'
      };

      const originalLabel = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span><span>Sending…</span>';

      try {
        const res = await fetch('tables/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('Request failed: ' + res.status);
        bookingForm.reset();
        successBox.classList.remove('hidden');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (err) {
        console.error('Booking submission failed:', err);
        errorBox.classList.remove('hidden');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
        renderIcons();
      }
    });
  }

  /* ----------------------------------------------------------
     Newsletter form (client-side confirmation)
  ---------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      const msg = document.getElementById('newsletter-msg');
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRe.test(input.value.trim())) {
        msg.textContent = 'Please enter a valid email address.';
        msg.className = 'mt-3 text-xs text-red-300';
        return;
      }
      msg.textContent = 'Thank you — you are subscribed to our smile tips.';
      msg.className = 'mt-3 text-xs text-emerald-300';
      newsletterForm.reset();
    });
  }

  /* ----------------------------------------------------------
     Footer year
  ---------------------------------------------------------- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     Init icons on load
  ---------------------------------------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderIcons);
  } else {
    renderIcons();
  }
})();
