/**
 * =====================================================
 * PELLIZZARI ADVOCACIA ESTRATÉGICA - MAIN.JS
 * Arquivo centralizado de JavaScript do site
 * =====================================================
 */

// =====================================================
// SMOOTH SCROLLING - Rolagem suave para links âncora
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================================
// MENU HAMBÚRGUER - Toggle para mobile
// =====================================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Altera o ícone entre hambúrguer e X
        if (navMenu.classList.contains('active')) {
            mobileMenuToggle.textContent = '✕';
        } else {
            mobileMenuToggle.textContent = '☰';
        }
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        }
    });
}

// =====================================================
// INTERSECTION OBSERVER - Animações ao rolar página
// =====================================================
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: descomenta a linha abaixo para animar apenas uma vez
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// =====================================================
// HEADER SCROLL - Efeito de header ao rolar página
// =====================================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Adiciona sombra ao header quando rolar
    if (currentScroll > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// =====================================================
// WHATSAPP BUTTON - Funcionalidade do botão WhatsApp
// =====================================================
function openWhatsApp(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// =====================================================
// ANO DINÂMICO NO COPYRIGHT
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${currentYear} Pellizzari Advocacia Estratégica. Todos os direitos reservados.`;
    }
});

// =====================================================
// PERFORMANCE - Lazy loading de imagens (opcional)
// =====================================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser suporta lazy loading nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback para browsers antigos
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// =====================================================
// CONSOLE MESSAGE - Mensagem para desenvolvedores
// =====================================================
console.log('%c🏛️ Pellizzari Advocacia Estratégica', 'font-size: 20px; font-weight: bold; color: #001527;');
console.log('%cSite desenvolvido seguindo as diretrizes do CLAUDE.md', 'font-size: 12px; color: #B6A281;');
console.log('%cVersão: 1.0 | 2025', 'font-size: 10px; color: #6c757d;');
