# cotaê

Comparador de VET (taxa efetiva) entre ofertas de câmbio — feito pra decidir, em segundos, qual plataforma vale mais na hora de sacar.

## Estrutura deste repositório

Este repo hospeda **duas versões** do cotaê, lado a lado:

```
├── index.html         → (raiz/main) versão pública -- em construção
└── pessoal/
    ├── index.html      → versão pessoal, uso próprio, ofertas + histórico sincronizado via Dropbox
    ├── manifest.json
    ├── sw.js
    └── icons/
```

- **Raiz (`/`)** — pensada pra versão pública futura: configuração de ofertas na própria tela inicial, sem conta, histórico só daquela sessão (sem sincronização). Ainda em construção.
- **`/pessoal/`** — a versão original, pra uso próprio: ofertas salvas, histórico persistente sincronizado entre dispositivos via Dropbox. Instalada como PWA no Dock (Mac) e Tela de Início (iPhone) apontando pra essa subpasta.

As duas compartilham o mesmo motor de cálculo (`VET = cotação × (1 − spread)`), mas divergem em tudo que envolve persistência de dados.

## O que é

O **cotaê** calcula o **VET** (Valor Efetivo de Troca) de cada oferta cadastrada, a partir da fórmula:

```
VET = cotação × (1 − spread)
```

Você cadastra suas ofertas (nome + spread fixo de cada uma), insere a cotação do momento em cada uma sempre que for consultar, e o app mostra o VET de todas lado a lado, destacando a mais vantajosa.

Todo cálculo fica registrado num histórico, sincronizado entre dispositivos via Dropbox.

## Funcionalidades

- **Ofertas configuráveis** — cadastre quantas ofertas quiser, cada uma com nome e spread próprios. Duplique uma oferta existente pra criar variações rapidamente (ex: "tabela promocional" vs "tabela normal" da mesma plataforma).
- **Cálculo instantâneo** — insira a cotação de cada oferta e veja o VET de todas, com a melhor opção destacada.
- **Histórico persistente** — cada consulta é salva com data e hora, sincronizada entre Mac, iPhone ou qualquer navegador via Dropbox.
- **PWA instalável** — funciona como app no Dock (macOS) ou na Tela de Início (iOS), com ícone próprio e suporte offline pro cálculo (a sincronização exige internet).

## Como funciona a sincronização

O histórico é salvo como um arquivo `historico.json` num app do Dropbox (App Folder, acesso isolado — o app não tem acesso ao resto do seu Dropbox). O token de acesso fica salvo só no `localStorage` do navegador local, nunca no código-fonte.

### Configurando o Dropbox

1. Crie um app gratuito em [dropbox.com/developers/apps](https://www.dropbox.com/developers/apps):
   - **Scoped access** → **App folder** → dê um nome ao app.
   - Em **Permissions**, marque `files.content.write` e `files.content.read`, depois **Submit**.
   - Em **Settings**, gere um **Generated access token**.
2. No app (⚙ Configurações), cole o token gerado. Repita em cada dispositivo onde for usar o cotaê.

## Rodando localmente / hospedando

Este é um app estático (`index.html` + `manifest.json` + `sw.js`), sem backend. Pra funcionar de verdade (sincronização via Dropbox e instalação como PWA), ele precisa estar servido em `https://` — não funciona abrindo o arquivo direto (`file://`), por causa de CORS e de restrições de service worker.

Forma mais simples: **GitHub Pages**.
1. Faça push deste repositório.
2. Em **Settings → Pages**, selecione a branch principal.
3. A versão pessoal fica em `https://usuario.github.io/cotae/pessoal/` — acesse essa URL no Safari (Mac ou iPhone) e use "Adicionar ao Dock" / "Adicionar à Tela de Início".
4. A raiz (`https://usuario.github.io/cotae/`) fica reservada pra versão pública.

## Estrutura do projeto

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

---

Feito pra uso pessoal. Sinta-se à vontade pra clonar e adaptar pra suas próprias ofertas.
