# Guia de Publicação do Site Wachholz

Este documento contém instruções detalhadas para publicar o site institucional da Wachholz em seu domínio registrado, além de orientações para manutenção e atualizações futuras.

## Estrutura do Site

O site Wachholz foi desenvolvido como um site estático, composto por:

- Arquivos HTML (estrutura)
- Arquivos CSS (estilo)
- Arquivos JavaScript (interatividade)
- Imagens (recursos visuais)

Esta estrutura foi escolhida para garantir velocidade de carregamento, facilidade de manutenção e compatibilidade com qualquer serviço de hospedagem.

## Requisitos para Hospedagem

Para hospedar o site Wachholz, você precisará de:

1. Um serviço de hospedagem web (recomendações abaixo)
2. Acesso ao gerenciamento do seu domínio registrado
3. Acesso FTP ou painel de controle para upload de arquivos

## Opções de Hospedagem Recomendadas

### Opção 1: Hospedagem Tradicional (cPanel, Plesk)
- **Exemplos**: Hostgator, Locaweb, GoDaddy, HostPapa
- **Vantagens**: Suporte técnico, painéis de controle intuitivos, opções de e-mail
- **Processo**: Upload via FTP ou gerenciador de arquivos do painel

### Opção 2: Hospedagem Moderna (Netlify, Vercel)
- **Exemplos**: Netlify, Vercel, GitHub Pages
- **Vantagens**: Gratuito para sites estáticos, deploy automático, certificado SSL gratuito
- **Processo**: Conectar a um repositório Git ou fazer upload direto dos arquivos

### Opção 3: Serviços Brasileiros
- **Exemplos**: Hostinger Brasil, Umbler, KingHost
- **Vantagens**: Suporte em português, servidores no Brasil (melhor velocidade)
- **Processo**: Similar à hospedagem tradicional

## Passo a Passo para Publicação

### 1. Preparação dos Arquivos
- Todos os arquivos necessários estão na pasta `wachholz-site`
- Não é necessário modificar nenhum arquivo antes do upload

### 2. Upload dos Arquivos

#### Via FTP:
1. Conecte-se ao seu servidor FTP usando as credenciais fornecidas pelo seu provedor de hospedagem
2. Navegue até a pasta raiz do seu site (geralmente `/public_html/` ou `/www/`)
3. Faça upload de todos os arquivos e pastas da pasta `wachholz-site`
4. Certifique-se de que o arquivo `index.html` esteja na raiz do diretório

#### Via Painel de Controle:
1. Acesse o painel de controle da sua hospedagem
2. Localize o gerenciador de arquivos
3. Navegue até a pasta raiz do seu site
4. Faça upload de todos os arquivos e pastas da pasta `wachholz-site`

#### Via Netlify/Vercel:
1. Crie uma conta no serviço escolhido
2. Escolha a opção de upload manual (drag & drop)
3. Arraste a pasta `wachholz-site` para a área indicada
4. Siga as instruções para configurar o domínio

### 3. Configuração do Domínio

#### Se você usa hospedagem tradicional:
1. Acesse o painel de gerenciamento do seu domínio
2. Configure os nameservers para apontar para sua hospedagem
3. Aguarde a propagação DNS (pode levar até 48 horas)

#### Se você usa Netlify/Vercel:
1. No painel do serviço, vá para configurações de domínio
2. Adicione seu domínio personalizado
3. Siga as instruções para configurar os registros DNS
4. Ative o certificado SSL/HTTPS

## Integrações

### Google Analytics

Para integrar o Google Analytics:

1. Crie ou acesse sua conta no [Google Analytics](https://analytics.google.com/)
2. Crie uma nova propriedade para o site Wachholz
3. Obtenha o código de acompanhamento (começa com UA- ou G-)
4. Abra o arquivo `index.html`
5. Localize a seção comentada `<!-- Google Analytics (placeholder) -->`
6. Substitua o comentário pelo código fornecido pelo Google Analytics

Exemplo:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Meta Pixel (Facebook)

Para integrar o Meta Pixel:

1. Acesse o [Gerenciador de Eventos do Facebook](https://business.facebook.com/events_manager)
2. Crie um novo pixel para o site Wachholz
3. Obtenha o código do pixel
4. Abra o arquivo `index.html`
5. Localize a seção comentada `<!-- Meta Pixel (placeholder) -->`
6. Substitua o comentário pelo código fornecido pelo Meta

Exemplo:
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'XXXXXXXXXXXXXXXXX');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXXX&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

## Formulário de Contato

O formulário de contato atual é um protótipo e precisa ser conectado a um serviço de processamento de formulários. Opções recomendadas:

### Opção 1: Formspree
1. Crie uma conta em [Formspree](https://formspree.io/)
2. Crie um novo formulário
3. Substitua a ação do formulário no HTML:
```html
<form id="contato-form" class="contato-form" action="https://formspree.io/f/seu-codigo" method="POST">
```

### Opção 2: Netlify Forms (se hospedar no Netlify)
1. Adicione o atributo `data-netlify="true"` ao formulário:
```html
<form id="contato-form" class="contato-form" data-netlify="true" name="contato">
```

### Opção 3: Serviço de e-mail da hospedagem
1. Crie um script PHP para processar o formulário (consulte sua hospedagem)
2. Configure o formulário para enviar para esse script

## Manutenção e Atualizações

### Atualizando Conteúdo

Para atualizar o conteúdo do site:

1. Faça as alterações necessárias nos arquivos HTML
2. Para textos: localize a seção relevante no arquivo `index.html`
3. Para imagens: substitua os arquivos na pasta `assets/images/`
4. Faça upload dos arquivos modificados para o servidor

### Atualizando Estilos

Para modificar a aparência do site:

1. Edite o arquivo `assets/css/styles.css`
2. As cores principais estão definidas como variáveis CSS no início do arquivo
3. Faça upload do arquivo modificado para o servidor

### Adicionando Funcionalidades

Para adicionar novas funcionalidades:

1. Edite o arquivo `assets/js/main.js` para interatividade
2. Crie novos arquivos JS conforme necessário
3. Atualize o HTML para incluir as novas funcionalidades

### Backup Regular

Recomendamos fazer backup regular dos arquivos do site:

1. Baixe todos os arquivos do servidor periodicamente
2. Armazene em local seguro (nuvem ou disco externo)
3. Documente as alterações realizadas

## Considerações para o Futuro

### Blog
Para implementar o blog no futuro, recomendamos:

1. WordPress com tema personalizado baseado no design atual
2. Ghost como plataforma de blog mais leve
3. Solução headless CMS + front-end estático

### Painel de Gerenciamento
Para facilitar atualizações futuras:

1. Considere migrar para WordPress ou outro CMS
2. Implemente um headless CMS como Strapi ou Contentful
3. Desenvolva um painel administrativo personalizado

## Suporte e Dúvidas

Para dúvidas técnicas sobre o site, entre em contato com o desenvolvedor.

---

© 2025 Wachholz. Todos os direitos reservados.
