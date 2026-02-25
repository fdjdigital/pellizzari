/**
 * COMPONENTS.JS — Pellizzari Advocacia Estratégica v2.0
 * Header glassmorphism, mobile menu, smooth anchors,
 * WhatsApp tracking, copyright
 */

(function () {
  'use strict';

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;

    var threshold = 50;

    function onScroll() {
      if (window.scrollY > threshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================
  // MOBILE MENU — Animated hamburger
  // ============================================
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var navMenu = document.querySelector('.nav-menu');
    if (!toggle || !navMenu) return;

    // Replace emoji content with animated hamburger lines
    toggle.textContent = '';
    for (var i = 0; i < 3; i++) {
      var line = document.createElement('span');
      line.className = 'hamburger-line';
      toggle.appendChild(line);
    }

    toggle.addEventListener('click', function () {
      var isOpen = toggle.classList.toggle('is-active');
      navMenu.classList.toggle('active', isOpen);

      // Lock/unlock scroll
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        if (window.__lenis) window.__lenis.stop();
      } else {
        document.body.style.overflow = '';
        if (window.__lenis) window.__lenis.start();
      }
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('is-active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        if (window.__lenis) window.__lenis.start();
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !toggle.contains(e.target) && navMenu.classList.contains('active')) {
        toggle.classList.remove('is-active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        if (window.__lenis) window.__lenis.start();
      }
    });

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggle.click();
      }
    });
  }

  // ============================================
  // SMOOTH ANCHOR SCROLLING
  // ============================================
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href.length <= 1) return;

        var target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { offset: -headerHeight });
        } else {
          var pos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================
  // WHATSAPP TRACKING
  // ============================================
  function initWhatsAppTracking() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'whatsapp_click',
            button_text: this.textContent.trim(),
            page_url: window.location.pathname,
          });
        }
      });
    });
  }

  // ============================================
  // DYNAMIC COPYRIGHT YEAR
  // ============================================
  function initCopyright() {
    var el = document.querySelector('.footer-bottom p');
    if (!el) return;

    var year = new Date().getFullYear();
    el.innerHTML = '&copy; ' + year + ' Pellizzari Advocacia Estrat\u00e9gica. Todos os direitos reservados.';
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    initHeader();
    initMobileMenu();
    initSmoothAnchors();
    initWhatsAppTracking();
    initCopyright();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
