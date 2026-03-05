# Pellizzari Advocacia Estrategica

**Versao:** 7.0 | **Atualizado:** Marco 2026

## Resumo do Projeto

- **Cliente:** Pellizzari Advocacia Estrategica (Medina Servicos Ltda)
- **CNPJ:** 09.069.850/0001-10
- **Foco:** Viviane Pellizzari (OAB/SP 188.272) - advocacia empresarial preventiva
- **Nicho:** Empresas com motoristas (Lei 13.103/2015)
- **WhatsApp:** (11) 99100-3991
- **Instagram:** @pellizzariadvocacia / @vivianepellizzari
- **GTM:** GTM-TSLFGWZB

## Regras Criticas (sempre aplicar)

1. **ZERO informacoes falsas** — nunca inventar casos, depoimentos, estatisticas ou resultados. Viola o Codigo de Etica da OAB
2. **Sem promessas de resultados** — proibido por Provimento 205/2021 da OAB
3. **Dados juridicos obrigatorios** em toda pagina: CNPJ, OAB dos socios, disclaimer legal
4. **Rodape:** "Desenvolvido por @vanttmkt" com link para https://vanttmkt.com
5. **Sem email nas paginas** — contato exclusivamente via WhatsApp
6. **CSS/JS centralizados** — zero inline, tudo em style.css e main.js
7. **Imagens WebP** com lazy loading
8. **Meta Pixel SOMENTE via GTM** — NUNCA inserir codigo do Meta Pixel (fbq, noscript pixel) no HTML. Todo tracking Meta Ads (Pixel base, eventos Lead, Purchase, etc.) deve ser configurado exclusivamente dentro do GTM. No codigo-fonte, usar apenas `dataLayer.push()` para enviar dados ao GTM
9. **Meta Pixel ID:** 1485457385957624

## Cores Rapidas

| Cor | Hex |
|-----|-----|
| Azul Profundo (primaria) | #001527 |
| Dourado Fosco (secundaria) | #B6A281 |
| Cinza Claro (fundo) | #f8f9fa |
| Cinza Escuro (texto) | #343a40 |

## Fontes

- **H1/H2:** Playfair Display 700
- **H3:** Libre Baskerville 600
- **Corpo:** Inter 400

## Documentacao Detalhada (consultar quando necessario)

| Tema | Arquivo |
|------|---------|
| Socios, escritorio, contato completo | docs/socios-e-escritorio.md |
| Identidade visual, paleta, tipografia, tom de voz | docs/identidade-visual.md |
| Publico-alvo, personas, nicho estrategico | docs/publico-alvo.md |
| Conformidade OAB, linguagem permitida/proibida | docs/conformidade-oab.md |
| Especificacoes tecnicas do site, GTM, estrutura | docs/tecnico-site.md |
| Estrategia, valores da Viviane, principios | docs/estrategia-e-valores.md |
| IDs Asana, secoes, membros da equipe | docs/asana.md |
| Regras tecnicas detalhadas do site | Site/CLAUDE.md |

## Automacoes e Envio de Emails

- **Automacoes:** N8N (padrao Vantt — nao usamos ActiveCampaign)
- **Envio de emails:** Resend (via N8N)
- **Fluxo:** N8N orquestra tudo (formularios, webhooks, sequencias) e dispara emails via API do Resend
- **WhatsApp:** ZAPI (instancia Vantt compartilhada)

## Credenciais e Integracoes

### N8N (Automacoes)
- **URL:** https://n8n.srv1139867.hstgr.cloud
- **API Key:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYjRmY2EwYi02ZWVhLTRlN2UtODQ4MS1jNzAzOTVlMzlkMGEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzcxMDE5MDY0fQ.Mxy2MRpBRFq0z6YSTojYx0uFmvu-CamoDodqaGhbKt8
- **API Base:** https://n8n.srv1139867.hstgr.cloud/api/v1

### Resend (Email)
- **API Key Pellizzari:** re_5Ex1cHnu_NP6vgwdoY1sWturmspku8Dih (send-only)
- **Dominio verificado:** pellizzariadvocacia.com
- **Remetente:** Viviane Pellizzari <viviane@pellizzariadvocacia.com>

### ZAPI (WhatsApp)
- **Instancia:** 3EB800025498B2EE69CEAE390B3F85C2
- **Token:** 4C8863D29769B6B2D64B1E48
- **Client-Token:** F1b19a9719b3d42d7b0a4d4f7c33e9132S
- **URL base:** https://api.z-api.io/instances/3EB800025498B2EE69CEAE390B3F85C2/token/4C8863D29769B6B2D64B1E48

### Contatos da Equipe (alertas e testes)

| Nome | Telefone | Email | Papel |
|------|----------|-------|-------|
| Mateus | 5531986715469 | mateusmendesribeiro@gmail.com | Estrategia |
| Barbara | 5531999767916 | bah_torres27@hotmail.com | Atendimento/SDR |
| Viviane | 5511991003991 | viviane@medinaadv.com.br | Advogada principal |

### Workflows N8N — Funil Ebook

**Principal (Qualificacao + Entrega)**
- **ID:** js40IAsPb5UcCyEH
- **URL:** https://n8n.srv1139867.hstgr.cloud/workflow/js40IAsPb5UcCyEH
- **Webhook:** POST https://n8n.srv1139867.hstgr.cloud/webhook/pellizzari-ebook
- **Ebook PDF:** https://pellizzariadvocacia.com/ebook/guia-trabalhista.pdf
- **Tiers:** A (decisor + 5+ motoristas), B (decisor + 1-4), Bloqueio (motorista/outro)
- **Alertas WhatsApp:** Mateus + Barbara + Viviane (todos os tiers qualificados)
- **Fluxo:** Webhook → Classificar Lead → Enviar Ebook (Email + WA) → Alertas → Disparar Follow-up

**Follow-up (Soap Opera Sequence)**
- **ID:** O4n9Zm2l14ojPwRm
- **URL:** https://n8n.srv1139867.hstgr.cloud/workflow/O4n9Zm2l14ojPwRm
- **Webhook interno:** POST https://n8n.srv1139867.hstgr.cloud/webhook/pellizzari-followup
- **Emails:** 7 emails ao longo de 21 dias (dia 1, 3, 5, 7, 10, 14, 21)
- **WhatsApp:** 4 mensagens (dia 2, 5, 8, 15)
- **Tier A:** todos os 7 emails + 4 WA
- **Tier B:** 5 emails (pula dia 3 e dia 10) + 4 WA
- **Estrutura:** Webhook → Preparar Dados → Wait → Email/WA → Recover → Wait → ...

## Sincronizacao com GitHub (OBRIGATORIO)

- **SOMENTE Mateus pode editar este CLAUDE.md**
- Apos qualquer atualizacao, fazer commit e push imediatamente

```bash
cd "/Users/mateus/Documents/Vantt/Clientes/Pellizzari" && git add CLAUDE.md docs/ && git commit -m "atualiza CLAUDE.md e docs" --no-gpg-sign && git push origin main 2>/dev/null || git push
```
