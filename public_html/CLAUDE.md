# CLAUDE.md - Diretrizes e Governança do Projeto

## Pellizzari Advocacia Estratégica - Site Institucional

---

## 1. Objetivo do Documento

Este documento define as convenções, padrões e diretrizes técnicas para o desenvolvimento e manutenção do site institucional da Pellizzari Advocacia Estratégica. Todas as alterações, criações e manutenções devem seguir rigorosamente estas normas.

---

## 2. Estrutura do Projeto

```
Pellizzari/
├── CLAUDE.md (este arquivo)
├── public_html/
│   ├── css/
│   │   └── style.css (CSS centralizado)
│   ├── js/
│   │   └── main.js (JavaScript centralizado)
│   ├── images/
│   │   ├── *.webp (imagens do site)
│   │   ├── instagram-icon.svg
│   │   └── whatsapp-icon.svg
│   ├── blog/
│   │   ├── index.html
│   │   ├── stf-juros-icms/index.html
│   │   ├── multa-qualificada/index.html
│   │   └── planejamento-tributario/index.html
│   ├── index.html (Home)
│   ├── sobre/index.html
│   ├── areas/index.html
│   ├── socios/index.html
│   ├── contato/index.html
│   ├── politica-privacidade/index.html
│   └── termos-uso/index.html
```

---

## 3. Informações de Contato Oficiais

### 3.1 Telefone

**Número oficial:** +55 (31) 99976-7916

**Formato de exibição:** (31) 99976-7916

**Link WhatsApp:**
```
https://wa.me/5531999767916?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Pellizzari
```

**Regras:**
- Sempre que exibir o telefone por extenso, deve ser um hiperlink clicável
- Mensagem pré-pronta: "Olá, vim do site da Pellizzari"
- Nunca exibir e-mail nas páginas (removido por decisão estratégica)

### 3.2 Endereço

Rua Borges de Figueiredo 303, Cjto 804
Átrio Giorno - Mooca
São Paulo - SP
CEP 03110-010

### 3.3 Horário de Atendimento

Segunda a Sexta: 09h00 - 18h00

---

## 4. Conformidade Legal e Publicitária (OAB e Google Ads)

**⚖️ TODAS AS PÁGINAS DO SITE DEVEM ESTAR EM CONFORMIDADE COM:**
- Provimento nº 205/2021 da OAB (Publicidade na Advocacia)
- Políticas do Google Ads para Serviços Jurídicos
- Código de Ética e Disciplina da OAB

### 4.1 Informações Obrigatórias

**Estas informações DEVEM aparecer em TODAS as páginas do site:**

#### CNPJ e Razão Social
```
Razão Social: Medina Serviços Ltda
CNPJ: 09.069.850/0001-10
```
**Localização:** Rodapé do site (footer)

#### Credenciais OAB dos Advogados
```
Reginaldo Pellizzari - OAB/SP 240.274
Viviane Pellizzari - OAB/SP 188.272
```
**Localização:** Sempre que mencionar os advogados (seção equipe, sobre, etc.)

### 4.2 Disclaimer Legal Obrigatório

**TODA página do site DEVE conter o seguinte aviso legal antes do footer:**

```html
<!-- Legal Disclaimer Section -->
<section class="legal-disclaimer section">
    <div class="container">
        <div class="disclaimer-content">
            <p><strong>⚖️ AVISO LEGAL:</strong> As informações contidas neste site são de caráter meramente informativo e não constituem aconselhamento jurídico. O contato inicial através deste site não estabelece relação advogado-cliente. Para orientação específica sobre sua situação, é necessário consultar um advogado diretamente.</p>
        </div>
    </div>
</section>
```

**Posicionamento:** Imediatamente antes da tag `</main>` e antes do `<footer>`

### 4.3 Regras de Linguagem - Provimento 205/2021 da OAB

#### ❌ PROIBIDO - Linguagem NÃO Permitida:

**Promessas de Resultados:**
- ❌ "Transformamos complexidade em vantagem competitiva"
- ❌ "Garantimos resultados excepcionais"
- ❌ "Transformamos desafios em oportunidades"
- ❌ "Reduzimos sua carga tributária em X%"
- ❌ Qualquer garantia implícita ou explícita de resultado

**Linguagem Promocional/Captação:**
- ❌ "Especialista em transformar..."
- ❌ "Melhores resultados do mercado"
- ❌ "Soluções que garantem..."
- ❌ "Ofertas especiais" ou "promoções"
- ❌ Linguagem de marketing agressivo
- ❌ Captação ativa de clientes

**Superlativos Exagerados:**
- ❌ "O melhor escritório..."
- ❌ "Resultados excepcionais garantidos"
- ❌ "Expertise incomparável"

#### ✅ PERMITIDO - Linguagem Adequada:

**Informativa e Descritiva:**
- ✅ "Advocacia empresarial especializada"
- ✅ "Assessoria jurídica qualificada"
- ✅ "Atendimento em direito tributário e empresarial"
- ✅ "Escritório com experiência em..."
- ✅ "Advogado com atuação em..."

**Experiência e Credenciais:**
- ✅ "Mais de X anos de experiência"
- ✅ "Advogado inscrito na OAB/SP nº..."
- ✅ "Atuação especializada em..."
- ✅ "Consultoria jurídica preventiva"

**Áreas de Atuação:**
- ✅ "Planejamento tributário"
- ✅ "Direito empresarial"
- ✅ "Compliance e LGPD"
- ✅ "Consultoria trabalhista"

### 4.4 Depoimentos de Clientes

**Regras obrigatórias para depoimentos:**
- ✅ Identificação completa (nome e empresa/cargo)
- ✅ Consentimento por escrito do cliente
- ❌ Depoimentos genéricos ("CEO, Indústria de Alimentos")
- ❌ Depoimentos inventados ou sem identificação

**Recomendação:** Em caso de dúvida, REMOVER o depoimento completamente.

### 4.5 Casos de Sucesso / Clientes Atendidos

**Título da Seção:**
- ✅ "Clientes Atendidos"
- ✅ "Empresas Assessoradas"
- ❌ "Casos de Sucesso" (evitar para não parecer promessa)

**Descrição:**
- ✅ "Empresas e grupos familiares assessorados pelo escritório"
- ❌ "Resultados que demonstram nossa expertise"

### 4.6 Checklist de Conformidade OAB/Google Ads

**Antes de publicar QUALQUER página, verificar:**

- [ ] CNPJ e Razão Social estão visíveis no rodapé
- [ ] OAB dos advogados está visível onde mencionados
- [ ] Disclaimer legal está presente antes do footer
- [ ] Linguagem é informativa (não promocional)
- [ ] Não há promessas ou garantias de resultados
- [ ] Não há superlativos exagerados
- [ ] Depoimentos estão com identificação completa (ou removidos)
- [ ] Títulos de seções seguem a linguagem permitida
- [ ] Meta description não contém promessas
- [ ] Não há ofertas, promoções ou "urgência" artificial

### 4.7 Exemplo de Estrutura HTML Conforme

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TSLFGWZB');</script>
    <!-- End Google Tag Manager -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pellizzari Advocacia Estratégica | [Nome da Página]</title>
    <meta name="description" content="Advocacia empresarial especializada em [área]. Atendimento qualificado em São Paulo.">
    <!-- CSS e Fontes -->
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSLFGWZB"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- Header -->
    <header class="header">
        <!-- Navegação padrão -->
    </header>

    <!-- Main Content -->
    <main>
        <!-- Conteúdo da página -->
        <!-- SEMPRE usar linguagem informativa, não promocional -->
    </main>

        <!-- Legal Disclaimer Section - OBRIGATÓRIO -->
        <section class="legal-disclaimer section">
            <div class="container">
                <div class="disclaimer-content">
                    <p><strong>⚖️ AVISO LEGAL:</strong> As informações contidas neste site são de caráter meramente informativo e não constituem aconselhamento jurídico. O contato inicial através deste site não estabelece relação advogado-cliente. Para orientação específica sobre sua situação, é necessário consultar um advogado diretamente.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <!-- Conteúdo do footer -->
            <div class="footer-bottom">
                <p>&copy; 2025 Pellizzari Advocacia Estratégica. Todos os direitos reservados.</p>
                <p class="footer-legal-info">Razão Social: Medina Serviços Ltda | CNPJ: 09.069.850/0001-10</p>
            </div>
        </div>
    </footer>
</body>
</html>
```

---

## 5. Padronização de Header e Footer

### 5.1 Header (Cabeçalho)

**O cabeçalho deve ser idêntico em todas as páginas do site.**

Componentes obrigatórios:
- Logo da Pellizzari (lado esquerdo)
- Navegação principal
- Botão "Fale Conosco" (destaque)
- Menu hambúrguer (mobile)

#### Navegação Principal

Links do menu:
1. Início
2. Sobre
3. Áreas de Atuação
4. Sócios
5. Contato
6. Blog

❌ **NÃO incluir:**
- Link direto para WhatsApp no menu principal
- E-mail

#### Menu Hambúrguer (Mobile)

Deve conter os mesmos links da navegação principal, mais:
- Botão "Entrar em contato (WhatsApp)"
- Link para Blog

### 5.2 Footer (Rodapé)

**O rodapé deve ser idêntico em todas as páginas do site.**

Componentes obrigatórios:
- Logo da Pellizzari
- Descrição: "Advocacia empresarial especializada em planejamento tributário, direito empresarial e compliance."
- Ícones de redes sociais (Instagram e WhatsApp em SVG)
- Links de navegação
- Links legais (Política de Privacidade e Termos de Uso)
- Copyright: "© [ano atual] Pellizzari Advocacia Estratégica. Todos os direitos reservados."
- **Informações legais obrigatórias:** "Razão Social: Medina Serviços Ltda | CNPJ: 09.069.850/0001-10"

---

## 6. Sistema de Cores - Identidade Visual

### 6.1 Paleta de Cores Oficial

```css
:root {
    /* Cores Principais */
    --azul-profundo: #001527;      /* Cor primária - Azul Pellizzari */
    --dourado-fosco: #B6A281;      /* Cor secundária - Dourado Pellizzari */
    --branco: #ffffff;             /* Branco puro */

    /* Cores Neutras */
    --cinza-claro: #f8f9fa;        /* Fundos claros */
    --cinza-medio: #6c757d;        /* Textos secundários */
    --cinza-escuro: #343a40;       /* Textos principais */
}
```

### 6.2 Uso das Cores

**Azul Profundo (#001527):**
- Títulos principais
- Header e footer
- Botões primários (background)
- Destaques importantes
- Texto de links hover

**Dourado Fosco (#B6A281):**
- Elementos de destaque
- Bordas e separadores
- Ícones SVG
- Botões secundários
- Hover states

**Branco (#ffffff):**
- Fundo principal do site
- Texto em fundos escuros
- Cartões e cards

**Cinza Claro (#f8f9fa):**
- Fundos de seções alternadas
- Cards e containers
- Backgrounds sutis

**Cinza Médio (#6c757d):**
- Textos secundários
- Legendas e metadados
- Descrições

**Cinza Escuro (#343a40):**
- Texto principal do corpo
- Parágrafos
- Conteúdo geral

### 6.3 Gradientes

```css
/* Hero Section */
background: linear-gradient(135deg, var(--azul-profundo) 0%, #002a4d 100%);
```

---

## 7. Tipografia

### 7.1 Fontes Utilizadas

```css
:root {
    /* Fontes */
    --fonte-principal: 'Inter', sans-serif;
    --fonte-display: 'Playfair Display', serif;
    --fonte-secundaria: 'Libre Baskerville', serif;
}
```

**Import Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 7.2 Hierarquia Tipográfica

**Títulos Principais (H1):**
- Fonte: Playfair Display
- Peso: 700 (Bold)
- Tamanho: 3.5rem (Desktop) / 2.5rem (Mobile)
- Cor: var(--azul-profundo) ou var(--branco) (em fundos escuros)

**Títulos Secundários (H2):**
- Fonte: Playfair Display
- Peso: 600-700
- Tamanho: 2.5rem (Desktop) / 2rem (Mobile)
- Cor: var(--azul-profundo)

**Títulos Terciários (H3):**
- Fonte: Libre Baskerville
- Peso: 600
- Tamanho: 1.8rem (Desktop) / 1.5rem (Mobile)
- Cor: var(--azul-profundo)

**Corpo de Texto:**
- Fonte: Inter
- Peso: 400 (Regular)
- Tamanho: 1.1rem
- Line-height: 1.8
- Cor: var(--cinza-escuro)

**Texto de Destaque:**
- Fonte: Inter
- Peso: 600 (Semi-bold)
- Cor: var(--dourado-fosco)

### 7.3 Tamanhos de Fonte

```css
:root {
    /* Tamanhos de Fonte */
    --tamanho-base: 16px;
    --tamanho-h1: 3.5rem;
    --tamanho-h2: 2.5rem;
    --tamanho-h3: 1.8rem;
}
```

---

## 8. Layout e Espaçamento

### 8.1 Sistema de Espaçamento

```css
:root {
    /* Espaçamento */
    --espacamento-xs: 8px;
    --espacamento-sm: 16px;
    --espacamento-md: 24px;
    --espacamento-lg: 32px;
    --espacamento-xl: 48px;
    --espacamento-xxl: 80px;
}
```

### 8.2 Breakpoints Responsivos

```css
/* Mobile First Approach */

/* Mobile: < 768px (padrão) */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### 8.3 Container

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### 8.4 Bordas e Arredondamentos

```css
:root {
    /* Bordas */
    --border-radius-sm: 8px;
    --border-radius-md: 10px;
    --border-radius-lg: 15px;
    --border-radius-xl: 20px;
    --border-radius-pill: 30px;
}
```

### 8.5 Sombras

```css
:root {
    /* Sombras */
    --sombra-leve: 0 2px 10px rgba(0, 21, 39, 0.1);
    --sombra-media: 0 5px 15px rgba(0, 21, 39, 0.08);
    --sombra-forte: 0 15px 30px rgba(0, 21, 39, 0.1);
    --sombra-hover: 0 15px 40px rgba(0, 21, 39, 0.08);
}
```

---

## 9. Botões e Call-to-Actions

### 9.1 Botão WhatsApp Principal

**Características:**
- Background: var(--dourado-fosco) ou gradiente sutil
- Cor do texto: var(--azul-profundo)
- Padding: 1rem 2rem
- Border-radius: var(--border-radius-pill)
- Font-weight: 600
- Ícone: SVG do WhatsApp nas cores Pellizzari
- Transição suave ao hover
- Sombra ao hover para profundidade

**Estado Hover:**
- Background mais claro ou branco
- Transform: translateY(-3px)
- Box-shadow aumentada

### 9.2 Botões Primários

```css
.btn-primary {
    background: var(--dourado-fosco);
    color: var(--azul-profundo);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-pill);
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--branco);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(182, 162, 129, 0.3);
}
```

### 9.3 Botões Secundários

```css
.btn-secondary {
    background: transparent;
    color: var(--branco);
    border: 2px solid var(--branco);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-pill);
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--branco);
    color: var(--azul-profundo);
}
```

---

## 10. Seção de Clientes

### 10.1 Layout

**Disposição:** Grid fixo (não carrossel)

**Imagens dos clientes:**
- cliente-nytron-pellizzari-advocacia-tecnologia.webp
- cliente-wolf-hacker-pellizzari-advocacia-construcao.webp
- cliente-grupo-autostar-pellizzari-consultoria-empresarial.webp
- cliente-fundacao-lia-maria-aguiar-pellizzari-terceiro-setor.webp
- cliente-familia-pozzoli-pellizzari-blindagem-patrimonial.webp
- cliente-econ-pellizzari-advocacia-estrategica.webp
- cliente-dayco-pellizzari-advocacia-tributaria.webp

### 10.2 Estilização

```css
.clients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    align-items: center;
    justify-items: center;
}

.client-logo {
    max-width: 180px;
    height: auto;
    filter: grayscale(10%);
    opacity: 0.8;
    transition: all 0.3s ease;
    border-radius: var(--border-radius-md);
}

.client-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.05);
}
```

---

## 11. URLs e Navegação

### 11.1 Estrutura de URLs Limpas

**Todas as URLs devem ser limpas, sem extensão .html**

Estrutura de diretórios:
```
/                           → index.html (Home)
/sobre/                     → sobre/index.html
/areas/                     → areas/index.html
/socios/                    → socios/index.html
/contato/                   → contato/index.html
/politica-privacidade/      → politica-privacidade/index.html
/termos-uso/                → termos-uso/index.html
/blog/                      → blog/index.html
/blog/stf-juros-icms/       → blog/stf-juros-icms/index.html
/blog/multa-qualificada/    → blog/multa-qualificada/index.html
/blog/planejamento-tributario/ → blog/planejamento-tributario/index.html
```

### 11.2 Links Internos

**Formato correto:**
```html
<a href="/sobre/">Sobre</a>
<a href="/areas/">Áreas de Atuação</a>
<a href="/blog/">Blog</a>
```

**Formato INCORRETO:**
```html
<a href="sobre.html">Sobre</a>  ❌
<a href="/sobre.html">Sobre</a> ❌
```

---

## 12. Ícones de Redes Sociais

### 12.1 SVGs Personalizados

**Localização:**
- `/images/instagram-icon.svg`
- `/images/whatsapp-icon.svg`

**Características:**
- Tamanho: 40x40px
- Cores: Azul Pellizzari (#001527) e Dourado Pellizzari (#B6A281)
- Background: Dourado fosco com bordas arredondadas
- Ícone: Azul profundo

### 12.2 Uso

```html
<div class="social-links">
    <a href="https://www.instagram.com/pellizzariadv/" target="_blank" aria-label="Instagram">
        <img src="/images/instagram-icon.svg" alt="Instagram Pellizzari Advocacia">
    </a>
    <a href="https://wa.me/5531999767916?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Pellizzari" target="_blank" aria-label="WhatsApp">
        <img src="/images/whatsapp-icon.svg" alt="WhatsApp Pellizzari Advocacia">
    </a>
</div>
```

---

## 13. Arquitetura CSS e JavaScript

### 13.1 Centralização de Código

**Todos os estilos e scripts devem estar centralizados:**

- **CSS:** `public_html/css/style.css`
- **JavaScript:** `public_html/js/main.js`

### 13.2 Proibições Absolutas

❌ **NÃO é permitido:**
- CSS inline (atributo `style=""`)
- JavaScript inline (tags `<script>` no HTML)
- Múltiplos arquivos CSS ou JS nas páginas principais
- Estilos ou scripts duplicados
- E-mails nas páginas (removido por decisão estratégica)

✅ **É obrigatório:**
- Todo CSS deve estar em `style.css`
- Todo JavaScript deve estar em `main.js`
- Referência externa nos arquivos HTML
- Telefones sempre como hiperlinks clicáveis

---

## 14. Transições e Animações

### 14.1 Transições Padrão

```css
:root {
    /* Transições */
    --transicao-rapida: all 0.3s ease;
    --transicao-suave: all 0.6s ease;
}
```

### 14.2 Animações de Entrada

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}
```

### 14.3 Scroll Animations

```javascript
// Intersection Observer para animar seções ao rolar
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
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});
```

---

## 15. Acessibilidade

### 15.1 Atributos Obrigatórios

- Todas as imagens devem ter `alt` descritivo
- Botões devem ter `aria-label` quando necessário
- Links devem ser descritivos
- Contraste de cores adequado (WCAG AA)

### 15.2 Navegação por Teclado

- Todos os elementos interativos devem ser acessíveis por teclado
- Ordem lógica de tabulação
- Estados de foco visíveis

---

## 16. Performance

### 16.1 Otimizações Obrigatórias

- Imagens em formato WebP
- Lazy loading de imagens
- Minificação de CSS e JS (em produção)
- Compressão de imagens
- Código limpo e eficiente

### 16.2 Google Tag Manager

**ID:** GTM-TSLFGWZB

**Status:** ✅ Instalado em todas as páginas do site

O Google Tag Manager deve estar presente em **TODAS as páginas HTML** do site com dois códigos:

#### Código 1 - Script no `<head>`

Deve ser incluído logo após a tag `<meta charset="UTF-8">`:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSLFGWZB');</script>
<!-- End Google Tag Manager -->
```

#### Código 2 - Noscript no `<body>`

Deve ser incluído imediatamente após a tag de abertura `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSLFGWZB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

#### Páginas com GTM Instalado

Todas as páginas do site público já possuem o GTM configurado:

**Páginas Principais:**
- ✅ `/index.html` (Home)
- ✅ `/sobre/index.html`
- ✅ `/areas/index.html`
- ✅ `/socios/index.html`
- ✅ `/contato/index.html`
- ✅ `/politica-privacidade/index.html`
- ✅ `/termos-uso/index.html`

**Blog:**
- ✅ `/blog/index.html`
- ✅ `/blog/multa-qualificada/index.html`
- ✅ `/blog/juros-icms/index.html`
- ✅ `/blog/planejamento-tributario/index.html`

**E-book:**
- ✅ `/ebook/index.html`
- ✅ `/ebook/obrigado.html`

**Login/Dashboard:**
- ✅ `/login/index.html`
- ✅ `/login/geral/index.html`
- ✅ `/login/trafego-pago/index.html`

#### Regra Importante

**Ao criar qualquer nova página HTML**, você DEVE adicionar ambos os códigos GTM (head e body) seguindo o padrão acima. Nunca publique uma página sem o GTM instalado.

---

## 17. Checklist de Qualidade

Antes de considerar qualquer desenvolvimento como "concluído", verificar:

**Técnico:**
- [ ] Header e footer idênticos em todas as páginas
- [ ] CSS e JS centralizados (sem código inline)
- [ ] Variáveis CSS configuradas no `:root`
- [ ] Estrutura HTML semântica
- [ ] Imagens na pasta `/images/`
- [ ] Links com URLs limpas (sem .html)
- [ ] Menu hambúrguer operacional
- [ ] Site responsivo em todos os breakpoints
- [ ] Telefone como hiperlink com mensagem pré-pronta
- [ ] WhatsApp removido do menu principal
- [ ] E-mails removidos de todas as páginas
- [ ] Botão WhatsApp estilizado nas cores Pellizzari
- [ ] SVGs personalizados para redes sociais
- [ ] Logos de clientes exibidos em grid fixo
- [ ] Copyright com ano correto
- [ ] Google Tag Manager configurado
- [ ] Todos os arquivos salvos e organizados

**Conformidade Legal OAB/Google Ads:**
- [ ] CNPJ e Razão Social visíveis no rodapé
- [ ] OAB dos advogados visível onde mencionados (Reginaldo: 240.274 / Viviane: 188.272)
- [ ] Disclaimer legal presente antes do footer
- [ ] Linguagem informativa (sem promessas de resultados)
- [ ] Sem superlativos exagerados ou garantias
- [ ] Sem linguagem promocional ou captação ativa
- [ ] Depoimentos com identificação completa ou removidos
- [ ] Títulos de seções em linguagem neutra
- [ ] Meta description sem promessas
- [ ] Sem ofertas, promoções ou urgência artificial

---

## 18. Manutenção e Atualizações

### 18.1 Alterações de Cores

Para alterar cores do site:
1. Edite APENAS as variáveis no `:root` do `style.css`
2. NUNCA altere valores diretamente nas classes CSS

### 18.2 Novos Conteúdos

Ao adicionar novas páginas:
1. Siga a estrutura de URLs limpas (diretório/index.html)
2. Use o mesmo header e footer
3. Referencie `style.css` e `main.js`
4. Mantenha a identidade visual consistente

### 18.3 Blog

Novos artigos de blog devem:
1. Estar em `/blog/slug-do-artigo/index.html`
2. Seguir o padrão de layout dos artigos existentes
3. Ter meta tags completas
4. Incluir breadcrumbs
5. Manter o mesmo header/footer do site

---

## 19. Informações Técnicas

**Última atualização:** 17 de novembro de 2025
**Versão:** 3.0 (Adicionada seção de Conformidade Legal OAB/Google Ads)
**Responsável:** Claude (IA Assistant)

---

**Este documento é a fonte única de verdade para o projeto. Toda decisão técnica deve estar alinhada com estas diretrizes.**
