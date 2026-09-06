/**
 * Rama Ken - Consultation Landing Page Interactive Script
 * Handles navigation, booking selection, and the accessible contact slider.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const scrollToElement = (element) => {
    if (!element) return;

    const headerHeight = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height')
    ) || 76;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
    });
  };

  // --------------------------------------------------------------------------
  // 1. Mobile Navigation Menu Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    const toggleMenu = () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
    };

    const closeMenu = () => {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    };

    mobileToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMenu();
    });

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
        closeMenu();
        mobileToggle.focus();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. Booking Selection & Dynamic Contact Links  
  // --------------------------------------------------------------------------
  const whatsAppNumber = ['254', '706', '077', '807'].join('');
  const emailAddress = 'ramakenkenya@gmail.com';

  const selectedPackageNameEl = document.getElementById('selected-package-name');
  const whatsAppButton = document.getElementById('whatsapp-booking-btn');
  const emailButton = document.getElementById('email-booking-btn');
  const contactSection = document.getElementById('contact');

  const getBookingDetails = (planName) => {
    const normalizedPlan = typeof planName === 'string' ? planName : 'General Consultation';

    if (normalizedPlan.includes('30')) {
      return {
        displayName: '30 Minutes — $20',
        whatsAppMessage: 'Hi Rama, I would like to book the 30-minute consultation for $20.',
        emailSubject: '30-Minute Consultation Inquiry',
        emailBody: 'Hi Rama, I would like to book the 30-minute consultation for $20 regarding...'
      };
    }

    if (normalizedPlan.includes('60')) {
      return {
        displayName: '60 Minutes — $35',
        whatsAppMessage: 'Hi Rama, I would like to book the 60-minute consultation for $35.',
        emailSubject: '60-Minute Consultation Inquiry',
        emailBody: 'Hi Rama, I would like to book the 60-minute consultation for $35 regarding...'
      };
    }

    if (normalizedPlan.includes('90')) {
      return {
        displayName: '90 Minutes — $50',
        whatsAppMessage: 'Hi Rama, I would like to book the 90-minute consultation for $50.',
        emailSubject: '90-Minute Consultation Inquiry',
        emailBody: 'Hi Rama, I would like to book the 90-minute consultation for $50 regarding...'
      };
    }

    return {
      displayName: 'General Consultation',
      whatsAppMessage: 'Hi Rama, I would like to book a consultation.',
      emailSubject: 'Consultation Inquiry',
      emailBody: 'Hi Rama, I would like to book a consultation regarding...'
    };
  };

  const updateBookingDetails = (planName) => {
    const details = getBookingDetails(planName);

    if (selectedPackageNameEl) {
      selectedPackageNameEl.textContent = details.displayName;
    }

    if (whatsAppButton) {
      whatsAppButton.href = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(details.whatsAppMessage)}`;
    }

    if (emailButton) {
      emailButton.href = `mailto:${emailAddress}?subject=${encodeURIComponent(details.emailSubject)}&body=${encodeURIComponent(details.emailBody)}`;
    }

    return details;
  };

  window.handleBooking = (planName = 'General Consultation') => {
    updateBookingDetails(planName);
    scrollToElement(contactSection);
  };

  // Make both contact actions valid even when a visitor opens Contact directly.
  updateBookingDetails('General Consultation');

  document.querySelectorAll('[data-booking-plan]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.handleBooking(button.getAttribute('data-booking-plan'));
    });
  });

  // --------------------------------------------------------------------------
  // 3. Smooth Scrolling for Other Internal Anchor Links
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]:not([data-booking-plan])').forEach((link) => {
    link.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');

      if (!targetId || targetId.length < 2 || !targetId.startsWith('#')) return;

      const targetElement = document.getElementById(targetId.slice(1));
      if (!targetElement) return;

      event.preventDefault();
      scrollToElement(targetElement);
    });
  });

  // --------------------------------------------------------------------------
  // 4. Contact Method Slider
  // --------------------------------------------------------------------------
  const contactTrack = document.getElementById('contact-slider-track');
  const contactViewport = document.getElementById('contact-slider-viewport');
  const contactTabs = Array.from(document.querySelectorAll('.contact-tab-btn'));
  const contactSlides = Array.from(document.querySelectorAll('.contact-slide'));
  const contactDots = Array.from(document.querySelectorAll('.contact-dot-btn'));
  const footerWhatsAppLink = document.getElementById('footer-whatsapp-link');

  if (
    contactTrack &&
    contactViewport &&
    contactTabs.length === contactSlides.length &&
    contactDots.length === contactSlides.length
  ) {
    let activeSlideIndex = 0;

    const setActiveSlide = (requestedIndex, focusControl = null) => {
      const parsedIndex = Number.parseInt(requestedIndex, 10);
      const nextIndex = Number.isNaN(parsedIndex)
        ? 0
        : Math.min(Math.max(parsedIndex, 0), contactSlides.length - 1);

      activeSlideIndex = nextIndex;
      contactTrack.style.transform = `translate3d(-${nextIndex * 100}%, 0, 0)`;

      contactTabs.forEach((tab, index) => {
        const isActive = index === nextIndex;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });

      contactSlides.forEach((slide, index) => {
        const isActive = index === nextIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.toggleAttribute('inert', !isActive);

        slide.querySelectorAll('a, button').forEach((control) => {
          control.tabIndex = isActive ? 0 : -1;
        });
      });

      contactDots.forEach((dot, index) => {
        const isActive = index === nextIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', String(isActive));
      });

      if (focusControl === 'tab') {
        contactTabs[nextIndex].focus();
      } else if (focusControl === 'dot') {
        contactDots[nextIndex].focus();
      }
    };

    const handleDirectionalKey = (event, source, focusControl) => {
      const currentIndex = Number.parseInt(source.dataset.index, 10) || 0;
      let nextIndex = null;

      if (event.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % contactSlides.length;
      } else if (event.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + contactSlides.length) % contactSlides.length;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = contactSlides.length - 1;
      }

      if (nextIndex === null) return;

      event.preventDefault();
      setActiveSlide(nextIndex, focusControl);
    };

    contactTabs.forEach((tab) => {
      tab.addEventListener('click', () => setActiveSlide(tab.dataset.index));
      tab.addEventListener('keydown', (event) => handleDirectionalKey(event, tab, 'tab'));
    });

    contactDots.forEach((dot) => {
      dot.addEventListener('click', () => setActiveSlide(dot.dataset.index));
      dot.addEventListener('keydown', (event) => handleDirectionalKey(event, dot, 'dot'));
    });

    if (footerWhatsAppLink) {
      footerWhatsAppLink.addEventListener('click', () => setActiveSlide(0));
    }

    let touchStartX = null;
    let touchStartY = null;

    const resetTouch = () => {
      touchStartX = null;
      touchStartY = null;
    };

    contactViewport.addEventListener('touchstart', (event) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    }, { passive: true });

    contactViewport.addEventListener('touchend', (event) => {
      if (touchStartX === null || touchStartY === null || event.changedTouches.length !== 1) {
        resetTouch();
        return;
      }

      const deltaX = event.changedTouches[0].clientX - touchStartX;
      const deltaY = event.changedTouches[0].clientY - touchStartY;
      resetTouch();

      if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

      setActiveSlide(activeSlideIndex + (deltaX < 0 ? 1 : -1));
    }, { passive: true });

    contactViewport.addEventListener('touchcancel', resetTouch, { passive: true });

    setActiveSlide(0);
  }
});
