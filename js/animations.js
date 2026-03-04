/**
 * ANIMATIONS.JS — Pellizzari Advocacia Estratégica v3.0
 * Blur-fade, clip-path reveal
 */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================
  // BLUR FADE (data-blur-fade)
  // ============================================
  function initBlurFade() {
    var elements = document.querySelectorAll('[data-blur-fade]');
    if (!elements.length) return;

    if (reducedMotion) {
      elements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseFloat(entry.target.dataset.blurFade) || 0;
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, delay * 1000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ============================================
  // CLIP-PATH REVEAL (data-clip-reveal)
  // ============================================
  function initClipReveal() {
    if (typeof gsap === 'undefined') return;

    var elements = document.querySelectorAll('[data-clip-reveal]');
    elements.forEach(function (el) {
      if (reducedMotion) {
        el.classList.add('is-revealed');
        return;
      }

      gsap.to(el, {
        clipPath: 'inset(0 0 0 0)',
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: function () {
            el.classList.add('is-revealed');
          },
        },
      });
    });
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    initBlurFade();
    initClipReveal();
  }

  window.addEventListener('load', function () {
    setTimeout(init, 100);
  });
})();
