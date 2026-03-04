# 🚀 COMO COLOCAR O CARTÃO ONLINE

## ⚠️ IMPORTANTE: O cartão precisa ser enviado para o servidor!

Os arquivos foram criados localmente em:
```
/Users/mateus/Documents/Prestação de Serviços/Pellizzari/public_html/cartao/
```

Mas eles **precisam estar no servidor** para funcionar na internet.

---

## 📁 ARQUIVOS CRIADOS

✅ **index.html** - Página principal do cartão
✅ **style.css** - Estilos CSS
✅ **script.js** - JavaScript interativo
✅ **gerar-qrcode.html** - Gerador de QR Code
✅ **README.md** - Documentação completa
✅ **INSTRUCOES-RAPIDAS-VIVIANE.md** - Guia rápido para Viviane

---

## 🔧 OPÇÕES PARA COLOCAR ONLINE

### **OPÇÃO 1: Via FTP (RECOMENDADO)**

Se você tem acesso FTP ao servidor:

1. Conecte-se ao servidor via FTP (FileZilla, Cyberduck, etc.)
2. Navegue até a pasta `public_html/`
3. **Faça upload da pasta `cartao/` completa**
4. Verifique se todos os arquivos estão lá:
   - cartao/index.html
   - cartao/style.css
   - cartao/script.js
   - cartao/gerar-qrcode.html
5. Teste acessando: `https://pellizzariadvocacia.com/cartao/`

### **OPÇÃO 2: Via cPanel**

Se tem acesso ao cPanel:

1. Acesse o cPanel do site
2. Vá em **Gerenciador de Arquivos**
3. Navegue até `public_html/`
4. Clique em **Upload**
5. Faça upload dos arquivos da pasta `cartao/`
6. Ou compacte a pasta `cartao/` em ZIP e faça upload + extração

### **OPÇÃO 3: Via Git/GitHub**

Se o site tem deploy automático via Git:

1. Adicione os arquivos ao repositório
2. Commit: `git add public_html/cartao/`
3. Commit: `git commit -m "Add: Cartão digital Viviane Pellizzari"`
4. Push: `git push origin main`
5. Aguarde deploy automático

---

## ✅ VERIFICAR SE ESTÁ ONLINE

Após fazer upload, teste:

1. **Cartão principal:**
   ```
   https://pellizzariadvocacia.com/cartao/
   ```

2. **Gerador QR Code:**
   ```
   https://pellizzariadvocacia.com/cartao/gerar-qrcode.html
   ```

3. **Teste no celular:**
   - Abra a câmera
   - Aponte para o QR Code
   - Deve abrir o cartão

---

## 🔐 PERMISSÕES DE ARQUIVOS

Certifique-se de que as permissões estão corretas:

```
Pastas: 755
Arquivos: 644
```

No servidor:
```bash
chmod 755 public_html/cartao/
chmod 644 public_html/cartao/*.html
chmod 644 public_html/cartao/*.css
chmod 644 public_html/cartao/*.js
chmod 644 public_html/cartao/*.md
```

---

## 📋 CHECKLIST DE DEPLOY

- [ ] Pasta `cartao/` criada em `public_html/`
- [ ] Arquivo `index.html` enviado
- [ ] Arquivo `style.css` enviado
- [ ] Arquivo `script.js` enviado
- [ ] Arquivo `gerar-qrcode.html` enviado
- [ ] Permissões configuradas corretamente
- [ ] Testei `pellizzariadvocacia.com/cartao/`
- [ ] Cartão abre corretamente
- [ ] Todos os botões funcionam
- [ ] QR Code gerado funciona

---

## 🆘 PROBLEMAS COMUNS

### **Erro 404 - Not Found**
✅ Verifique se a pasta está em `public_html/cartao/`
✅ Verifique se `index.html` existe
✅ Verifique permissões (755 pasta, 644 arquivos)

### **Cartão abre mas sem estilo**
✅ Verifique se `style.css` foi enviado
✅ Verifique se o caminho está correto no HTML
✅ Limpe o cache do navegador

### **Botões não funcionam**
✅ Verifique se `script.js` foi enviado
✅ Abra o Console do navegador (F12)
✅ Veja se há erros de JavaScript

### **QR Code não gera**
✅ Verifique se `gerar-qrcode.html` foi enviado
✅ Verifique conexão com a biblioteca QRCode
✅ Teste em outro navegador

---

## 🚀 DEPLOY RÁPIDO (LINHA DE COMANDO)

Se você tem acesso SSH ao servidor:

```bash
# Conectar ao servidor
ssh usuario@pellizzariadvocacia.com

# Navegar até public_html
cd public_html/

# Criar pasta cartao se não existir
mkdir -p cartao

# Sair do servidor
exit

# Do seu computador, enviar arquivos via SCP
scp -r "/Users/mateus/Documents/Prestação de Serviços/Pellizzari/public_html/cartao/*" usuario@pellizzariadvocacia.com:~/public_html/cartao/

# Configurar permissões
ssh usuario@pellizzariadvocacia.com "chmod 755 ~/public_html/cartao/ && chmod 644 ~/public_html/cartao/*"
```

---

## 📞 PRECISA DE AJUDA?

Se você **não sabe como fazer upload** ou **não tem acesso ao servidor**:

1. **Entre em contato com o provedor de hospedagem**
   - Pergunte como fazer upload de arquivos
   - Peça as credenciais FTP ou cPanel

2. **Ou peça ajuda ao desenvolvedor/suporte técnico**
   - Envie os arquivos da pasta `cartao/`
   - Peça para colocarem em `public_html/cartao/`

---

## ⏰ URGÊNCIA PARA O EVENTO

**EVENTO É AMANHÃ (27/11)!**

Se você **não conseguir colocar online hoje**:

### **PLANO B: Use apenas no celular**

1. Abra `index.html` diretamente no navegador do celular
2. Funciona offline (mas alguns recursos não)
3. Você pode compartilhar o link local

### **PLANO C: Use serviço temporário**

Use **Netlify Drop** para hospedar rapidamente:

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `cartao/` inteira
3. Netlify vai gerar uma URL temporária
4. Use essa URL no evento
5. Depois migre para o domínio oficial

---

## 🎯 META

Cartão deve estar acessível em:
```
https://pellizzariadvocacia.com/cartao/
```

**Até hoje à noite (26/11) para usar no evento amanhã!**

---

**Boa sorte com o deploy! 🚀**
