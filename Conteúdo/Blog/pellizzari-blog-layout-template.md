# IDENTIDADE VISUAL E ESTRUTURA TÉCNICA - BLOG PELLIZZARI

## 🎨 PALETA DE CORES

### **CORES PRINCIPAIS**
- **Azul Pellizzari:** #001527 (títulos H1, headers, CTAs primários)
- **Dourado Pellizzari:** #B6A281 (acentos, botões secundários, highlights)
- **Branco:** #FFFFFF (background principal)

### **CORES DE TEXTO**
- **Texto Principal:** #333333
- **Texto Secundário:** #666666 (meta informações, legendas)
- **Texto Claro:** #999999 (timestamps, subtextos)

### **CORES DE BACKGROUND**
- **Background Seções:** #F8F9FA
- **Background Cards:** #FFFFFF
- **Background Callouts:** Variável por tipo

### **CORES POR CATEGORIA**
```css
.category-tributario { background: #001527; color: #FFFFFF; }
.category-blindagem { background: #B6A281; color: #FFFFFF; }
.category-compliance { background: #2E8B57; color: #FFFFFF; }
.category-societario { background: #4682B4; color: #FFFFFF; }
.category-educacao { background: #8B4513; color: #FFFFFF; }
```

---

## 📝 TIPOGRAFIA

### **FONTES PRINCIPAIS**
- **Títulos:** Playfair Display (Google Fonts)
- **Subtítulos:** Libre Baskerville (Google Fonts)
- **Corpo/Texto:** Inter (Google Fonts)

### **HIERARQUIA TIPOGRÁFICA**
```css
/* H1 - Título do Post */
font-family: 'Playfair Display', serif;
font-weight: 700;
font-size: 2.5rem; /* 40px */
line-height: 1.2;
color: #001527;
margin-bottom: 1rem;

/* H2 - Seções Principais */
font-family: 'Playfair Display', serif;
font-weight: 600;
font-size: 2rem; /* 32px */
line-height: 1.3;
color: #001527;
margin: 2rem 0 1rem 0;

/* H3 - Subsecções */
font-family: 'Libre Baskerville', serif;
font-weight: 600;
font-size: 1.5rem; /* 24px */
line-height: 1.4;
color: #001527;
margin: 1.5rem 0 0.75rem 0;

/* H4 - Subtítulos Menores */
font-family: 'Libre Baskerville', serif;
font-weight: 600;
font-size: 1.25rem; /* 20px */
line-height: 1.4;
color: #333333;
margin: 1rem 0 0.5rem 0;

/* Parágrafo Principal */
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 1rem; /* 16px */
line-height: 1.6;
color: #333333;
margin-bottom: 1rem;

/* Parágrafo Lead (Introdução) */
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 1.125rem; /* 18px */
line-height: 1.6;
color: #333333;
margin-bottom: 1.5rem;

/* Texto Pequeno (Meta, Legendas) */
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 0.875rem; /* 14px */
line-height: 1.5;
color: #666666;
```

### **RESPONSIVIDADE TIPOGRÁFICA**
```css
/* Mobile (max-width: 768px) */
@media (max-width: 768px) {
    h1 { font-size: 1.875rem; /* 30px */ }
    h2 { font-size: 1.5rem; /* 24px */ }
    h3 { font-size: 1.25rem; /* 20px */ }
    p { font-size: 0.938rem; /* 15px */ }
}

/* Tablet (769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
    h1 { font-size: 2.25rem; /* 36px */ }
    h2 { font-size: 1.75rem; /* 28px */ }
}
```

---

## 🏗️ ESTRUTURA HTML SEMÂNTICA

### **ESTRUTURA PRINCIPAL**
```html
<article class="blog-post">
    <header class="post-header">
        <nav class="breadcrumb"></nav>
        <div class="category-tag"></div>
        <h1 class="post-title"></h1>
        <div class="post-meta"></div>
        <div class="post-excerpt"></div>
    </header>
    
    <div class="featured-image"></div>
    
    <div class="post-content">
        <section class="introduction"></section>
        <section class="content-section"></section>
        <!-- Repetir content-section conforme necessário -->
        <section class="conclusion"></section>
    </div>
    
    <footer class="post-footer">
        <div class="author-bio"></div>
        <div class="post-tags"></div>
        <div class="related-posts"></div>
    </footer>
</article>
```

### **CLASSES CSS OBRIGATÓRIAS**
```css
.blog-post { /* Container principal */ }
.post-header { /* Cabeçalho do post */ }
.breadcrumb { /* Navegação breadcrumb */ }
.category-tag { /* Tag da categoria */ }
.post-title { /* Título H1 */ }
.post-meta { /* Meta informações */ }
.post-excerpt { /* Resumo do post */ }
.featured-image { /* Imagem destacada */ }
.post-content { /* Conteúdo principal */ }
.introduction { /* Seção introdução */ }
.content-section { /* Seções de conteúdo */ }
.conclusion { /* Seção conclusão */ }
.post-footer { /* Rodapé do post */ }
.author-bio { /* Bio do autor */ }
.post-tags { /* Tags do post */ }
.related-posts { /* Posts relacionados */ }
```

---

## 🖼️ ESPECIFICAÇÕES DE IMAGENS

### **IMAGEM DESTACADA**
- **Dimensões:** 1200x630px (proporção 1.91:1)
- **Formato:** JPG ou WebP
- **Peso máximo:** 500KB
- **Qualidade:** 85-90%
- **Alt text:** Sempre obrigatório

### **IMAGENS NO CONTEÚDO**
- **Largura máxima:** 800px
- **Formato:** JPG, PNG ou WebP
- **Peso máximo:** 300KB por imagem
- **Alt text:** Sempre obrigatório

### **ESTRUTURA HTML IMAGENS**
```html
<figure class="content-image">
    <img src="[url]" alt="[descrição]" width="[largura]" height="[altura]">
    <figcaption>[Legenda se necessário]</figcaption>
</figure>
```

---

## 🔍 ESTRUTURA SEO

### **META TAGS OBRIGATÓRIAS**
```html
<title>[Título do Post] | Blog Pellizzari</title>
<meta name="description" content="[Descrição 150-160 caracteres]">
<meta name="keywords" content="[palavra-chave-principal], [palavra-chave-secundária], pellizzari, advocacia estratégica">

<!-- Open Graph -->
<meta property="og:title" content="[Título do Post]">
<meta property="og:description" content="[Descrição do post]">
<meta property="og:image" content="[URL da imagem destacada]">
<meta property="og:url" content="[URL do post]">
<meta property="og:type" content="article">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título do Post]">
<meta name="twitter:description" content="[Descrição do post]">
<meta name="twitter:image" content="[URL da imagem destacada]">
```

### **SCHEMA MARKUP**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Título do Post]",
  "description": "[Descrição do post]",
  "image": "[URL da imagem destacada]",
  "author": {
    "@type": "Person",
    "name": "[Reginaldo Pellizzari | Viviane Pellizzari]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Pellizzari Advocacia Estratégica",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pellizzari.com.br/logo.png"
    }
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[URL do post]"
  }
}
```

### **ESTRUTURA DE HEADING**
```html
<h1>Título Principal do Post</h1>
    <h2>Seção Principal 1</h2>
        <h3>Subsecção 1.1</h3>
        <h3>Subsecção 1.2</h3>
    <h2>Seção Principal 2</h2>
        <h3>Subsecção 2.1</h3>
            <h4>Detalhamento 2.1.1</h4>
    <h2>Conclusão</h2>
```

---

## 🎨 ELEMENTOS VISUAIS

### **CALLOUTS/DESTAQUES**
```css
.callout {
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 8px;
    border-left: 4px solid;
}

.callout.success {
    background: #d4edda;
    border-color: #28a745;
    color: #155724;
}

.callout.warning {
    background: #fff3cd;
    border-color: #ffc107;
    color: #856404;
}

.callout.info {
    background: #d1ecf1;
    border-color: #17a2b8;
    color: #0c5460;
}
```

### **BOTÕES**
```css
.btn-primary {
    background: #001527;
    color: #FFFFFF;
    padding: 12px 24px;
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    display: inline-block;
}

.btn-secondary {
    background: #B6A281;
    color: #FFFFFF;
    padding: 12px 24px;
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    display: inline-block;
}
```

### **LISTAS**
```css
ul.content-list {
    margin: 1rem 0 1rem 1.5rem;
}

ul.content-list li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #333333;
}

ol.numbered-list {
    margin: 1rem 0 1rem 1.5rem;
}

ol.numbered-list li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
    color: #333333;
}
```

---

## 📱 RESPONSIVIDADE

### **BREAKPOINTS PADRÃO**
```css
/* Mobile First */
.container {
    max-width: 100%;
    padding: 0 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
        padding: 0 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 800px;
        padding: 0;
    }
}

/* Large Desktop */
@media (min-width: 1200px) {
    .container {
        max-width: 900px;
    }
}
```

### **ESPAÇAMENTOS RESPONSIVOS**
```css
/* Mobile */
.post-header { margin-bottom: 2rem; }
.content-section { margin-bottom: 2rem; }

/* Tablet e Desktop */
@media (min-width: 768px) {
    .post-header { margin-bottom: 3rem; }
    .content-section { margin-bottom: 3rem; }
}
```

---

## 🔗 LINKS INTERNOS E EXTERNOS

### **ESTILO DE LINKS**
```css
a {
    color: #001527;
    text-decoration: underline;
}

a:hover {
    color: #B6A281;
    text-decoration: none;
}

/* Links no conteúdo */
.post-content a {
    font-weight: 500;
    border-bottom: 1px solid #B6A281;
    text-decoration: none;
}

.post-content a:hover {
    border-bottom-color: #001527;
    color: #001527;
}
```

### **BREADCRUMB**
```css
.breadcrumb {
    font-size: 0.875rem;
    color: #666666;
    margin-bottom: 1rem;
}

.breadcrumb a {
    color: #666666;
    text-decoration: none;
}

.breadcrumb a:hover {
    color: #001527;
}

.breadcrumb span:not(:last-child)::after {
    content: " > ";
    margin: 0 0.5rem;
}
```

---

## ✅ ESPECIFICAÇÕES TÉCNICAS

### **PERFORMANCE**
- **Imagens:** Sempre otimizadas e comprimidas
- **Fonts:** Preload das fontes principais
- **CSS:** Minificado em produção
- **HTML:** Semântico e validado

### **ACESSIBILIDADE**
- **Contraste:** Mínimo 4.5:1 para texto normal
- **Alt text:** Sempre presente em imagens
- **Focus:** Estados de foco visíveis
- **Heading:** Estrutura hierárquica correta

### **COMPATIBILIDADE**
- **Browsers:** Chrome, Firefox, Safari, Edge (últimas 2 versões)
- **Dispositivos:** Mobile, Tablet, Desktop
- **Sistemas:** iOS, Android, Windows, macOS