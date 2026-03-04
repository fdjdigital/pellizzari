/* =====================================================
   PELLIZZARI — PAGINA DE CAPTURA EBOOK
   Formulario + Validacao + Mascara + DataLayer + Edge Cases
   ===================================================== */

(function () {
    'use strict';

    // ---- CONFIG ----
    var WEBHOOK_URL = 'https://n8n.srv1139867.hstgr.cloud/webhook/pellizzari-ebook';
    var SUBMIT_TIMEOUT = 10000; // 10s
    var DEBOUNCE_MS = 300;
    var SESSION_KEY = 'pellizzari_ebook_sent';
    var RETRY_KEY = 'pellizzari_ebook_retry';

    // ---- UTILS ----
    function getUTMs() {
        var params = new URLSearchParams(window.location.search);
        return {
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_content: params.get('utm_content') || '',
            utm_term: params.get('utm_term') || ''
        };
    }

    function pushEvent(event, data) {
        window.dataLayer = window.dataLayer || [];
        var obj = { event: event };
        if (data) {
            for (var k in data) {
                if (data.hasOwnProperty(k)) obj[k] = data[k];
            }
        }
        window.dataLayer.push(obj);
    }

    // ---- MASCARA TELEFONE ----
    function maskPhone(value) {
        var digits = value.replace(/\D/g, '');
        if (digits.length <= 2) return '(' + digits;
        if (digits.length <= 7) return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
        return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7, 11);
    }

    // ---- INIT ----
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('capturaForm');
        if (!form) return;

        // Check if already submitted this session
        if (sessionStorage.getItem(SESSION_KEY)) {
            showAlreadySent();
            return;
        }

        // Retry failed submissions
        retryPending();

        var fields = {
            nome: form.querySelector('[name="nome"]'),
            email: form.querySelector('[name="email"]'),
            whatsapp: form.querySelector('[name="whatsapp"]'),
            cargo: form.querySelector('[name="cargo"]'),
            motoristas: form.querySelector('[name="motoristas"]')
        };

        var submitBtn = form.querySelector('.js-submit');
        var networkError = form.querySelector('.js-network-error');
        var cargoAlert = form.querySelector('.js-cargo-alert');
        var motoristasGroup = form.querySelector('.js-motoristas-group');
        var submitting = false;
        var formStarted = false;

        // ---- PHONE MASK ----
        if (fields.whatsapp) {
            fields.whatsapp.addEventListener('input', function () {
                var pos = this.selectionStart;
                var prev = this.value.length;
                this.value = maskPhone(this.value);
                var diff = this.value.length - prev;
                this.setSelectionRange(pos + diff, pos + diff);
            });
        }

        // ---- CARGO REACTIVE BEHAVIOR ----
        if (fields.cargo) {
            fields.cargo.addEventListener('change', function () {
                var val = this.value;
                if (val === 'motorista' || val === 'outro') {
                    if (cargoAlert) cargoAlert.classList.add('is-visible');
                    if (motoristasGroup) motoristasGroup.style.display = 'none';
                    updateSubmitButton(true);
                } else {
                    if (cargoAlert) cargoAlert.classList.remove('is-visible');
                    if (motoristasGroup) motoristasGroup.style.display = 'block';
                    updateSubmitButton(false);
                }
                validateForm();
            });
        }

        function updateSubmitButton(isBlocked) {
            var textEl = submitBtn.querySelector('.btn__text');
            if (isBlocked) {
                textEl.textContent = 'ENVIAR PARA MEU GESTOR';
            } else {
                textEl.textContent = 'ENVIAR E RECEBER MEU GUIA AGORA';
            }
        }

        // ---- FORM START TRACKING ----
        Object.keys(fields).forEach(function (key) {
            if (fields[key]) {
                fields[key].addEventListener('focus', function () {
                    if (!formStarted) {
                        formStarted = true;
                        pushEvent('form_start', { field: key });
                    }
                });
                fields[key].addEventListener('change', function () {
                    pushEvent('form_field_complete', { field: key });
                });
            }
        });

        // ---- VALIDATION ----
        var errorMessages = {
            nome: 'Precisamos do seu nome para personalizar o guia',
            email: 'Verifique o formato do email (ex: nome@empresa.com)',
            whatsapp: 'Informe seu WhatsApp com DDD para receber o guia',
            cargo: 'Selecione seu cargo para receber o material adequado',
            motoristas: 'Informe o porte da sua operação'
        };

        function validateField(name) {
            var field = fields[name];
            if (!field) return true;
            var errorEl = form.querySelector('.js-error-' + name);
            var valid = true;

            if (name === 'email') {
                valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
            } else if (name === 'whatsapp') {
                var digits = field.value.replace(/\D/g, '');
                valid = digits.length >= 10 && digits.length <= 11;
            } else if (name === 'cargo' || name === 'motoristas') {
                // motoristas not required if cargo is motorista/outro
                if (name === 'motoristas') {
                    var cargoVal = fields.cargo ? fields.cargo.value : '';
                    if (cargoVal === 'motorista' || cargoVal === 'outro') return true;
                }
                valid = field.value !== '';
            } else {
                valid = field.value.trim().length >= 2;
            }

            if (valid) {
                field.classList.remove('is-error');
                field.classList.add('is-valid');
                if (errorEl) errorEl.classList.remove('is-visible');
            } else {
                field.classList.remove('is-valid');
                field.classList.add('is-error');
                if (errorEl) {
                    errorEl.textContent = errorMessages[name] || 'Campo obrigatório';
                    errorEl.classList.add('is-visible');
                }
            }
            return valid;
        }

        function validateForm() {
            var cargoVal = fields.cargo ? fields.cargo.value : '';
            var isBlocked = cargoVal === 'motorista' || cargoVal === 'outro';

            var allValid = validateField('nome') &
                validateField('email') &
                validateField('whatsapp') &
                validateField('cargo');

            if (!isBlocked) {
                allValid = allValid & validateField('motoristas');
            }

            if (submitBtn) {
                submitBtn.disabled = !allValid;
            }
            return !!allValid;
        }

        // Validate on blur
        Object.keys(fields).forEach(function (key) {
            if (fields[key]) {
                fields[key].addEventListener('blur', function () {
                    validateField(key);
                    validateForm();
                });
            }
        });

        // Validate on input (for real-time feedback after first blur)
        Object.keys(fields).forEach(function (key) {
            if (fields[key]) {
                fields[key].addEventListener('input', function () {
                    if (this.classList.contains('is-error') || this.classList.contains('is-valid')) {
                        validateField(key);
                        validateForm();
                    }
                });
            }
        });

        // ---- SUBMIT ----
        var lastSubmitTime = 0;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Debounce
            var now = Date.now();
            if (now - lastSubmitTime < DEBOUNCE_MS) return;
            lastSubmitTime = now;

            if (submitting) return;
            if (!validateForm()) return;

            pushEvent('form_submit_attempt');

            submitting = true;
            submitBtn.classList.add('btn--loading');
            submitBtn.disabled = true;
            if (networkError) networkError.classList.remove('is-visible');

            var cargoVal = fields.cargo.value;
            var isBlocked = cargoVal === 'motorista' || cargoVal === 'outro';

            var payload = {
                nome: fields.nome.value.trim(),
                email: fields.email.value.trim(),
                whatsapp: fields.whatsapp.value.trim(),
                cargo: cargoVal,
                motoristas: isBlocked ? '' : (fields.motoristas ? fields.motoristas.value : ''),
                origem: 'pagina-captura-ebook',
                bloqueado: isBlocked,
                timestamp: new Date().toISOString()
            };

            // Add UTMs
            var utms = getUTMs();
            for (var k in utms) {
                if (utms.hasOwnProperty(k) && utms[k]) {
                    payload[k] = utms[k];
                }
            }

            var controller = new AbortController();
            var timeoutId = setTimeout(function () {
                controller.abort();
            }, SUBMIT_TIMEOUT);

            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            })
                .then(function (response) {
                    clearTimeout(timeoutId);
                    if (response.ok) {
                        sessionStorage.setItem(SESSION_KEY, '1');
                        pushEvent('form_submit_success', { tier: isBlocked ? 'blocked' : 'qualified' });

                        if (isBlocked) {
                            window.location.href = '/guia-trabalhista/bloqueio/';
                        } else {
                            window.location.href = '/guia-trabalhista/obrigado/';
                        }
                    } else {
                        throw new Error('Server error: ' + response.status);
                    }
                })
                .catch(function (err) {
                    clearTimeout(timeoutId);
                    pushEvent('form_submit_error', { error: err.message || 'network_error' });

                    // Save to localStorage for retry
                    try {
                        localStorage.setItem(RETRY_KEY, JSON.stringify(payload));
                    } catch (e) { /* ignore */ }

                    if (networkError) {
                        networkError.classList.add('is-visible');
                    }

                    submitting = false;
                    submitBtn.classList.remove('btn--loading');
                    submitBtn.disabled = false;
                });
        });

        // ---- RETRY PENDING ----
        function retryPending() {
            try {
                var stored = localStorage.getItem(RETRY_KEY);
                if (!stored) return;
                var payload = JSON.parse(stored);
                fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }).then(function (res) {
                    if (res.ok) {
                        localStorage.removeItem(RETRY_KEY);
                    }
                }).catch(function () { /* will retry next page load */ });
            } catch (e) { /* ignore */ }
        }

        // ---- ALREADY SENT ----
        function showAlreadySent() {
            var card = document.querySelector('.form-card');
            if (!card) return;
            card.innerHTML =
                '<div class="form-already-sent">' +
                '<p class="form-already-sent__title">Você já solicitou o guia</p>' +
                '<p class="form-already-sent__text">Verifique seu email e WhatsApp. O material foi enviado nos dados informados anteriormente.</p>' +
                '</div>';
        }

        // ---- SCROLL TRACKING ----
        var scrollTracked = {};
        var sections = {
            beneficios: document.querySelector('.beneficios'),
            filtragem: document.querySelector('.filtragem'),
            formulario: document.querySelector('.formulario-section')
        };

        if (window.IntersectionObserver) {
            var scrollObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = entry.target.dataset.track;
                        if (id && !scrollTracked[id]) {
                            scrollTracked[id] = true;
                            pushEvent('scroll_section', { section: id });
                        }
                    }
                });
            }, { threshold: 0.2 });

            Object.keys(sections).forEach(function (key) {
                if (sections[key]) {
                    sections[key].dataset.track = key;
                    scrollObserver.observe(sections[key]);
                }
            });
        }

        // ---- HERO CTA TRACKING ----
        var heroCta = document.querySelector('.js-hero-cta');
        if (heroCta) {
            heroCta.addEventListener('click', function () {
                pushEvent('cta_click', { location: 'hero' });
            });
        }

        // ---- SCROLL INTO VIEW ON KEYBOARD ----
        Object.keys(fields).forEach(function (key) {
            if (fields[key]) {
                fields[key].addEventListener('focus', function () {
                    var self = this;
                    setTimeout(function () {
                        self.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                });
            }
        });
    });

    // ---- OBRIGADO PAGE: CTA TRACKING ----
    document.addEventListener('DOMContentLoaded', function () {
        var whatsappCta = document.querySelector('.js-obrigado-whatsapp');
        if (whatsappCta) {
            whatsappCta.addEventListener('click', function () {
                pushEvent('cta_click', { location: 'obrigado_whatsapp' });
            });
        }

        // ---- BLOQUEIO PAGE: SHARE TRACKING ----
        var bloqueioEnviar = document.querySelector('.js-bloqueio-enviar');
        if (bloqueioEnviar) {
            bloqueioEnviar.addEventListener('click', function () {
                pushEvent('cta_click', { location: 'bloqueio_enviar_gestor' });
            });
        }
    });
})();
