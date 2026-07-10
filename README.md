# Cotaê

Comparador de VET (Valor Efetivo de Troca) entre ofertas de câmbio — descubra em segundos qual oferta vale mais na hora de trocar moeda.

> **Status: alpha.** Em desenvolvimento ativo, sujeito a mudanças.

## O que é

Quem recebe em moeda estrangeira (freelancers, PJs, quem viaja) frequentemente compara mais de uma plataforma de câmbio antes de decidir onde trocar. Cada plataforma cobra uma taxa (spread) diferente sobre a cotação — o **Cotaê** calcula o valor efetivo de cada oferta e mostra qual é a mais vantajosa, na hora.

Fórmula usada: o valor efetivo é a cotação informada, descontada a taxa da oferta.

## Como usar

1. Cadastre uma oferta: nome, taxa (spread) e a cotação do momento.
2. Adicione quantas ofertas quiser comparar.
3. Clique em "Calcular VET" — a melhor oferta é destacada automaticamente.
4. Cada cálculo fica num histórico, visível enquanto a aba estiver aberta.

Não é necessário criar conta. **Nada é salvo nem enviado a nenhum servidor** — os dados ficam só no seu navegador, durante a sessão, e somem ao fechar a aba. Veja o [aviso de privacidade](privacidade.html) para detalhes.

## Eventos rastreados (GoatCounter)

| Evento | Quando dispara |
|---|---|
| `oferta_adicionada` | Clique em "+ Nova oferta" |
| `oferta_duplicada` | Clique no botão de duplicar uma oferta |
| `oferta_removida` | Clique no botão de remover uma oferta |
| `erro_sem_oferta` | Clicou em "Calcular VET" sem nenhuma oferta cadastrada |
| `erro_validacao` | Clicou em "Calcular VET" com ofertas incompletas ou inválidas |
| `calculo_sucesso_1_oferta` | Cálculo bem-sucedido com 1 oferta |
| `calculo_sucesso_2_ofertas` | Cálculo bem-sucedido com 2 ofertas |
| `calculo_sucesso_3_ofertas` | Cálculo bem-sucedido com 3 ofertas |
| `calculo_sucesso_4mais_ofertas` | Cálculo bem-sucedido com 4 ou mais ofertas |
| `historico_limpo` | Clique em "Limpar histórico" |

Todos os eventos são contagens agregadas e anônimas -- nenhum contém dado sobre o conteúdo das ofertas (nome, cotação ou spread).

## Por que "alpha"

O app está em desenvolvimento contínuo — o modelo de dados, o design e as funcionalidades ainda podem mudar bastante. Feedback é bem-vindo através do contato na própria página.

## Stack

HTML, CSS e JavaScript puro — sem frameworks, sem build step, sem dependências de backend.

---

Desenvolvido por Ser Multimídia Soluções Digitais.
