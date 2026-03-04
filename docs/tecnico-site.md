# Especificacoes Tecnicas do Site - Pellizzari

## Estrutura de Diretorios

```
public_html/
├── css/
│   └── style.css (CSS centralizado)
├── js/
│   └── main.js (JavaScript centralizado)
├── images/
│   ├── *.webp (imagens do site)
│   ├── instagram-icon.svg
│   └── whatsapp-icon.svg
├── blog/
│   └── [artigos]
├── index.html (Home)
├── sobre/index.html
├── areas/index.html
├── socios/index.html
├── contato/index.html
├── politica-privacidade/index.html
└── termos-uso/index.html
```

## URLs Limpas

**Formato correto:**
```html
<a href="/sobre/">Sobre</a>
<a href="/areas/">Areas de Atuacao</a>
<a href="/blog/">Blog</a>
```

**Formato INCORRETO:**
```html
<a href="sobre.html">Sobre</a>  <!-- ERRADO -->
```

## Regras Tecnicas Absolutas

**PROIBIDO:**
- CSS inline (atributo `style=""`)
- JavaScript inline
- Multiplos arquivos CSS/JS
- E-mails nas paginas

**OBRIGATORIO:**
- Todo CSS em `style.css`
- Todo JavaScript em `main.js`
- Telefones como hiperlinks clicaveis
- Imagens em formato WebP

## Google Tag Manager

**ID:** GTM-TSLFGWZB

```html
<!-- Google Tag Manager (HEAD) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSLFGWZB');</script>
<!-- End Google Tag Manager -->
```

## Documentacao Tecnica Detalhada

Para regras completas do site (header, footer, responsividade, animacoes, acessibilidade):
Consultar `public_html/CLAUDE.md`
