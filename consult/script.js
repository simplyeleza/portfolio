/**
 * Rama Ken - Consultation Landing Page Interactive Script
 * Handles mobile navigation, smooth scrolling, booking CTA triggers, and accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Mobile Navigation Menu Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    const toggleMenu = () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
    };

    const closeMenu = () => {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    };

    // Toggle menu on click
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu when clicking outside header
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        closeMenu();
        mobileToggle.focus();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. Smooth Scrolling for Internal Anchor Links
  // --------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Ignore empty hashes or javascript links
      if (targetId === '#' || targetId === '#!') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76; // Match CSS --header-height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Centralized Booking Action Handler
  // --------------------------------------------------------------------------
  /**
   * Easily customizable booking action handler.
   * Replace BOOKING_CALENDAR_URL with your actual Calendly, Cal.com, or Stripe checkout link.
   */
  const BOOKING_CALENDAR_URL = ''; // Leave empty for now to use smooth-scroll or mailto fallback

  window.handleBooking = function (planName = 'General Consultation') {
    if (BOOKING_CALENDAR_URL && BOOKING_CALENDAR_URL.trim() !== '') {
      // If a real booking URL exists, open it in a new tab
      window.open(BOOKING_CALENDAR_URL, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback: Scroll to pricing section if not already there, or open mail prompt
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        const headerOffset = 76;
        const elementPosition = pricingSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Highlight selected plan visually if called from pricing button
        console.log(`[Booking Selected] User initiated booking for: ${planName}`);
      }
    }
  };

  // Bind booking CTA buttons to handleBooking function
  const bookingButtons = document.querySelectorAll('[data-booking-plan]');
  bookingButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const planName = btn.getAttribute('data-booking-plan');
      window.handleBooking(planName);
    });
  });
});
