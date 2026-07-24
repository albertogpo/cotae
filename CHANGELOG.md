# Changelog

Todas as mudanças notáveis do Cotaê são documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e o projeto segue [Versionamento Semântico](https://semver.org/lang/pt-BR/) — enquanto estiver em alpha, a versão principal permanece em `0.x`.

> As versões 0.1.0 e 0.2.0 são retroativas: não foram numeradas no momento em que foram publicadas. O versionamento formal começa a partir da 0.3.0.

## [0.3.1]

### Corrigido
- Cálculo quebrava ao digitar cotação ou spread com vírgula decimal (ex: `5,42`) — os campos aceitavam apenas ponto, embora os próprios placeholders sugerissem vírgula.

### Adicionado
- Botão de salvar oferta (💾) agora também remove ("des-salva") a oferta da conta, com confirmação.
- Paginação no histórico de comparações: mostra 5 consultas por vez, com botão "Carregar mais".
- Validação visual de campo inválido nos inputs de cotação e spread (borda vermelha + mensagem), quando o texto digitado não é reconhecido como número.

### Alterado
- Histórico e estatísticas históricas foram unificados em abas dentro do mesmo painel ("Comparações" / "Consistência histórica"), em vez de dois painéis separados.

## [0.3.0]

### Adicionado
- Painel de estatísticas históricas ("Consistência histórica"), com ranking de ofertas por taxa de liderança, VET médio, faixa (min–max) e indicador de variação (baixa/média/alta).
- Filtro de período nas estatísticas: Hoje, 7 dias, 15 dias, 30 dias, Sempre (padrão: 30 dias).
- Aviso explicando que apenas ofertas com nome preenchido entram na comparação histórica.

## [0.2.0]

### Alterado
- Ajustes no fluxo de comparação de ofertas para evitar os erros de cálculo introduzidos na versão anterior.
- Otimizações de layout na tela de comparação.

## [0.1.0]

### Adicionado
- Primeira versão pública com criação de conta (login com Google), ofertas salvas e histórico sincronizado na nuvem.

### Corrigido conhecido
- Essa versão apresentava erros no cálculo de algumas ofertas, corrigidos na 0.2.0.
