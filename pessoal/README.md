# Cotaê (pessoal)

Comparador de VET (taxa efetiva) entre ofertas de câmbio — versão de uso pessoal, com ofertas salvas e histórico sincronizado entre dispositivos.

## O que é

Calcula o **VET** de cada oferta cadastrada:

```
VET = cotação × (1 − spread)
```

Você cadastra suas ofertas (nome + spread fixo de cada uma) em ⚙ Configurações, insere a cotação do momento sempre que for consultar, e o app mostra o VET de todas lado a lado, destacando a mais vantajosa. Todo cálculo fica registrado num histórico, sincronizado entre dispositivos via Dropbox.

## Funcionalidades

- **Ofertas configuráveis** — cadastre quantas ofertas quiser, cada uma com nome e spread próprios. Duplique uma oferta existente pra criar variações rapidamente.
- **Cálculo instantâneo** — insira a cotação de cada oferta e veja o VET de todas, com a melhor destacada.
- **Histórico persistente** — cada consulta é salva com data e hora, sincronizada entre dispositivos via Dropbox.
- **PWA instalável** — funciona como app no Dock (macOS) ou na Tela de Início (iOS), com ícone próprio e suporte offline pro cálculo (a sincronização exige internet).

## Sincronização com Dropbox

O histórico é salvo como `historico.json` num app do Dropbox (App Folder, acesso isolado). A autenticação usa o fluxo OAuth2 com refresh token (não expira), já que o token de acesso simples da Dropbox expira em ~4 horas.

### Configuração (uma vez só)

1. Crie um app gratuito em [dropbox.com/developers/apps](https://www.dropbox.com/developers/apps):
   - **Scoped access** → **App folder** → dê um nome ao app.
   - Em **Permissions**, marque `files.content.write` e `files.content.read` → **Submit**.
   - Na aba **Settings**, anote o **App key** e o **App secret**.
2. Gere um refresh token (só precisa fazer isso uma vez):
   - Acesse `https://www.dropbox.com/oauth2/authorize?client_id=SEU_APP_KEY&token_access_type=offline&response_type=code`, faça login, copie o código de autorização.
   - No terminal:
     ```bash
     curl https://api.dropboxapi.com/oauth2/token \
       -d code=SEU_CODIGO \
       -d grant_type=authorization_code \
       -u SEU_APP_KEY:SEU_APP_SECRET
     ```
   - Guarde o `refresh_token` da resposta.
3. No app (⚙ Configurações), cole **App key**, **App secret** e **Refresh token**. O app renova o access token sozinho a partir daí, em segundo plano, sem expirar.

Nenhuma dessas credenciais é salva no código-fonte — tudo fica em `localStorage`, só no navegador onde foi colado.

⚠️ **Atenção**: App secret + refresh token juntos equivalem a uma credencial permanente de acesso à pasta do app no Dropbox. Não tire print da tela de Configurações nem compartilhe esses valores.

## Rodando localmente / hospedando

App estático, sem backend. Precisa estar servido em `https://` (não `file://`) por causa de CORS (chamadas à API do Dropbox) e de restrições de service worker. Forma mais simples: GitHub Pages, apontando pra esta pasta.

## Estrutura

```
├── index.html       → app inteiro (HTML, CSS e JS num arquivo só)
├── manifest.json     → metadados do PWA (ícone, nome, cores)
├── sw.js             → service worker (cache do app shell, instalação offline)
└── icons/            → ícones em diferentes resoluções
```

## Roadmap

- [x] **Passo 0** — comparador com ofertas fixas (uso pessoal).
- [x] **Passo 1** — ofertas configuráveis, com histórico sincronizado via Dropbox.
- [ ] **Passo 2** — versão pública, sem necessidade de conta: configurador de ofertas na tela inicial, histórico apenas da sessão.
- [ ] **Passo 3** — modelo com conta de usuário, múltiplas plataformas salvas e histórico persistente na nuvem.
- [ ] **Passo 4** — modelo SaaS: sincronização entre dispositivos, relatórios de qual oferta foi mais vantajosa ao longo do tempo, suporte a múltiplas moedas.


## Stack

HTML, CSS e JavaScript puro — sem frameworks, sem build step. Fontes via Google Fonts (Baloo 2 + IBM Plex Mono).
