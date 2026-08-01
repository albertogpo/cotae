# Changelog

Todas as mudanças notáveis do Cotaê são documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e o projeto segue [Versionamento Semântico](https://semver.org/lang/pt-BR/) — enquanto estiver em alpha, a versão principal permanece em `0.x`.

> As versões 0.1.0 e 0.2.0 são retroativas: não foram numeradas no momento em que foram publicadas. O versionamento formal começa a partir da 0.3.0.

## [0.5.2]

### Corrigido
- Card de comparação: quando o valor convertido estava presente, ele ficava centralizado na altura toda do card em vez de alinhado à base junto com o VET. Layout do card virou grid de 2 linhas: nome + "★ melhor" sempre alinhados no topo; cotação/spread/VET à esquerda e valor final à direita, ambos ancorados na mesma base, com ou sem o badge de melhor oferta.
- Tooltip do campo "quanto você vai converter": o clique no ícone de informação abria e fechava o tooltip no mesmo instante, porque o `<label>` associado ao campo disparava um clique automático no input por baixo, que subia até o listener global e fechava o tooltip. Corrigido com `preventDefault()` no clique do ícone.

## [0.5.1]

### Corrigido
- A barra de liderança na aba "Consistência histórica" era desenhada em escala relativa ao líder do ranking, fazendo a oferta em 1º lugar sempre aparecer com a barra 100% cheia, não importa se ela tivesse liderado em 40% ou 90% das comparações. Agora a barra reflete a porcentagem real (0–100%).

### Alterado
- Redesenho do card de ranking: porcentagem de liderança em destaque (com verde reservado só para o 1º lugar), separação visual entre "quem lidera" e os dados de apoio (tendência, VET médio, faixa, variação), e tooltips explicando "liderou em X%" e "variação" para quem ainda não conhece esses termos.
- Sparkline de tendência do VET ampliado (de 84×26px para largura total do card, com linha de base e rótulo do período exibido).
- Ofertas com menos de 3 comparações no período (amostra insuficiente) agora aparecem como um card apagado (borda tracejada, opacidade reduzida) ao final da lista, em vez de uma linha de texto solta — mantém o mesmo formato visual dos demais cards.

## [0.5.0]

### Adicionado
- Modal de feedback (nota de 1 a 5 estrelas + comentário livre opcional), acessível pelo link "Feedback" no rodapé. Gravado numa coleção separada no Firestore (`feedback`), sempre de forma anônima -- nunca associado à conta, mesmo estando logado.
- Modal de feedback também aparece automaticamente (no máximo uma vez até responder ou dispensar, com cooldown de 7 dias após dispensar): depois da segunda comparação bem-sucedida da sessão, ou pouco depois de entrar numa conta. Nunca aparece junto com o card de upsell de conta.
- Auto-scroll até o card de comparação recém-gerado, logo após o cálculo, pra direcionar a atenção pro resultado.
- Destaque visual no botão "+ Nova oferta" (outline colorido) quando ainda não há nenhuma oferta cadastrada -- a ação principal da tela nesse momento, em vez do botão "Comparar" (que seguia mais chamativo mesmo desabilitado).

### Alterado
- Removidas todas as referências a R$ (Real) da interface -- rótulos genéricos agora ("Cotação (na sua moeda)"), com o campo de valor a converter deixando explícito que se refere à moeda estrangeira (USD, EUR, etc.), não à moeda local. Preparação pro público latino-americano além do Brasil.
- Formatação de números (separador decimal, datas e horas) passou a seguir o idioma configurado no navegador da pessoa (`navigator.language`) em vez de fixar `pt-BR`, com esse valor como fallback.

## [0.4.0]

### Adicionado
- Pílulas de oferta na aba "Consistência histórica" — permitem habilitar/desabilitar cada oferta individualmente na comparação (ex: ignorar uma promoção pontual que distorce o ranking). A exclusão fica salva no navegador e persiste entre sessões.

### Alterado
- Ao excluir uma oferta, o "liderou em X%" das demais é recalculado considerando só as ofertas habilitadas em cada consulta, em vez de manter fixo o resultado histórico original (que foi calculado com todas as ofertas, inclusive a que foi excluída depois).

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
