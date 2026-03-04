/**
 * PELLIZZARI ADVOCACIA - CARTÃO DIGITAL
 * Script de Interatividade
 */

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎴 Cartão Digital Pellizzari - Carregado');

    initializeSaveContact();
    initializeShare();
    initializeAnimations();
    trackVisit();
});

// ========================================
// SALVAR CONTATO (VCARD)
// ========================================
function initializeSaveContact() {
    const saveBtn = document.getElementById('saveContactBtn');

    if (!saveBtn) return;

    saveBtn.addEventListener('click', function() {
        const vCardData = generateVCard();
        downloadVCard(vCardData);

        // Analytics tracking (se configurado)
        trackEvent('save_contact', 'engagement', 'Salvou contato da Viviane');
    });
}

function generateVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Viviane Pellizzari
N:Pellizzari;Viviane;;;
ORG:Pellizzari Advocacia Estratégica
TITLE:Advogada Empresarial - Especialista em Gestão Trabalhista para Empresas com Motoristas
TEL;TYPE=CELL,VOICE:+5511991003991
URL:https://pellizzariadvocacia.com
URL;TYPE=INSTAGRAM:https://www.instagram.com/vivianepellizzari/
EMAIL;TYPE=INTERNET:viviane@medinaadv.com.br
ADR;TYPE=WORK:;;Rua Borges de Figueiredo 303, Cjto 804;São Paulo;SP;03110-010;Brasil
NOTE:OAB/SP 188.272 - Especialista em Gestão Trabalhista para Empresas com Motoristas (transporte, logística, distribuição). Autora de e-book sobre Gestão Trabalhista para Empresas com Motoristas. Conhecida no Evento Caminho para o Milhão.
PHOTO;VALUE=URL:https://pellizzariadvocacia.com/images/viviane-pellizzari-advogada-empresarial-trabalhista-sao-paulo.webp
END:VCARD`;

    return vcard;
}

function downloadVCard(vCardData) {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'Viviane-Pellizzari-OAB-SP-188272.vcf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);

    // Feedback visual
    showNotification('✅ Contato salvo com sucesso!', 'success');
}

// ========================================
// COMPARTILHAR
// ========================================
function initializeShare() {
    const shareBtn = document.getElementById('shareBtn');

    if (!shareBtn) return;

    shareBtn.addEventListener('click', async function() {
        const shareData = {
            title: 'Dra. Viviane Pellizzari - OAB/SP 188.272',
            text: 'Advogada Empresarial especialista em Gestão Trabalhista para empresas com motoristas. Conheci no Evento Caminho o Milhão! https://pellizzariadvocacia.com/cartao/',
            url: window.location.href
        };

        try {
            // Verifica se o navegador suporta Web Share API
            if (navigator.share) {
                await navigator.share(shareData);
                trackEvent('share', 'engagement', 'Compartilhou cartão');
                showNotification('✅ Compartilhado com sucesso!', 'success');
            } else {
                // Fallback: copiar link
                copyToClipboard(window.location.href);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Erro ao compartilhar:', err);
                copyToClipboard(window.location.href);
            }
        }
    });
}

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para mobile

    try {
        document.execCommand('copy');
        showNotification('🔗 Link copiado para área de transferência!', 'success');
        trackEvent('copy_link', 'engagement', 'Copiou link do cartão');
    } catch (err) {
        showNotification('❌ Erro ao copiar link', 'error');
    }

    document.body.removeChild(tempInput);
}

// ========================================
// NOTIFICAÇÕES
// ========================================
function showNotification(message, type = 'info') {
    // Remove notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Estilos inline (pode ser movido para CSS se preferir)
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: ${type === 'success' ? '#25D366' : type === 'error' ? '#dc3545' : '#001527'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 600;
        font-size: 0.95rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);

    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// ========================================
// ANIMAÇÕES DE ENTRADA
// ========================================
function initializeAnimations() {
    // Observer para animar elementos quando ficam visíveis
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos animáveis
    const animatableElements = document.querySelectorAll(
        '.contact-item, .expertise-item, .badge'
    );

    animatableElements.forEach(el => observer.observe(el));
}

// ========================================
// TRACKING E ANALYTICS
// ========================================
function trackVisit() {
    const visitData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href
    };

    console.log('📊 Visita rastreada:', visitData);

    // Se tiver Google Analytics configurado
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: 'Cartão Digital Viviane Pellizzari',
            page_location: window.location.href
        });
    }

    // Se tiver Facebook Pixel configurado
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: 'Cartão Digital Viviane Pellizzari',
            content_category: 'Networking'
        });
    }
}

function trackEvent(action, category, label, value) {
    console.log(`📈 Event: ${action} | ${category} | ${label}`);

    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', action, {
            category: category,
            label: label
        });
    }
}

// ========================================
// TRACKING DE CLIQUES NOS LINKS
// ========================================
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');

    if (!link) return;

    const href = link.getAttribute('href');

    if (!href) return;

    // WhatsApp
    if (href.includes('wa.me')) {
        trackEvent('click_whatsapp', 'contact', 'Clicou no WhatsApp da Viviane');
    }

    // Instagram
    if (href.includes('instagram.com')) {
        trackEvent('click_instagram', 'social', 'Clicou no Instagram @vivianepellizzari');
    }

    // Site
    if (href.includes('pellizzariadvocacia.com') && !href.includes('wa.me')) {
        trackEvent('click_website', 'contact', 'Clicou no site Pellizzari');
    }
});

// ========================================
// EASTER EGG: DUPLO CLIQUE NO LOGO
// ========================================
let logoClickCount = 0;
let logoClickTimer = null;

document.querySelector('.footer-logo')?.addEventListener('click', function() {
    logoClickCount++;

    if (logoClickCount === 1) {
        logoClickTimer = setTimeout(() => {
            logoClickCount = 0;
        }, 500);
    }

    if (logoClickCount === 2) {
        clearTimeout(logoClickTimer);
        logoClickCount = 0;
        showEasterEgg();
    }
});

function showEasterEgg() {
    showNotification('🎉 Cartão digital criado por FDJ Digital Marketing!', 'info');
    console.log('%c🚀 Desenvolvido por FDJ Digital Marketing', 'font-size: 16px; font-weight: bold; color: #B6A281;');
    console.log('%c💼 Quer um cartão digital para você também?', 'font-size: 14px; color: #001527;');
    console.log('%c📱 Fale com Mateus da FDJ Digital', 'font-size: 12px; color: #6c757d;');
}

// ========================================
// DETECTAR MODO ESCURO DO SISTEMA
// ========================================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('🌙 Usuário em modo escuro detectado');
    // Pode adicionar ajustes visuais aqui se necessário
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ Cartão carregado em ${Math.round(loadTime)}ms`);

    trackEvent('page_load_time', 'performance', 'Tempo de carregamento', Math.round(loadTime));
});

// ========================================
// INSTALAÇÃO COMO PWA (FUTURO)
// ========================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('📲 Cartão pode ser instalado como app');

    // Pode mostrar um botão "Adicionar à tela inicial" aqui
});

// ========================================
// ERRO HANDLING
// ========================================
window.addEventListener('error', function(e) {
    console.error('❌ Erro no cartão:', e.error);
    trackEvent('javascript_error', 'error', e.message);
});

// ========================================
// CONSOLE BRANDING
// ========================================
console.log('%c📇 Cartão Digital Pellizzari', 'font-size: 20px; font-weight: bold; color: #001527;');
console.log('%c✨ Design profissional e sofisticado', 'font-size: 14px; color: #B6A281;');
console.log('%c🎯 Otimizado para networking em eventos', 'font-size: 12px; color: #6c757d;');
console.log(' ');
console.log('%cDra. Viviane Pellizzari', 'font-size: 16px; font-weight: bold; color: #001527;');
console.log('%cOAB/SP 188.272', 'font-size: 12px; color: #B6A281;');
console.log('%cAdvogada Empresarial | Especialista em Gestão Trabalhista para Empresas com Motoristas', 'font-size: 12px; color: #6c757d;');
console.log(' ');
console.log('%c💼 pellizzariadvocacia.com', 'font-size: 12px; color: #001527;');
console.log('%c📱 (11) 99100-3991', 'font-size: 12px; color: #25D366;');
console.log('%c📸 @vivianepellizzari', 'font-size: 12px; color: #E1306C;');
