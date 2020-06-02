# Projeto realizado para o curso Bootcamp GoStack

O objetivo deste projeto é demonstrar uma utilização simples do Express utilizando Node.Js.

### Rotas criadas neste projeto

* GET /: Rota inicial do projeto. Mostra apenas uma mensagem;

* GET /projects: Lista todos projetos com suas respectivas tarefas cadastradas;

* POST /projects: A rota recebe id e title dentro do corpo e cadastra um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };

* PUT /projects/:id: A rota altera apenas o título do projeto com o id presente nos parâmetros da rota;

* POST /projects/:id/tasks: A rota receber um campo title e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

* DELETE /projects/:id: A rota deletar o projeto com o id presente nos parâmetros da rota;

### Middlewares

 Neste projeto estão presentes dois middlewares, são eles:

* Middleware utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário a requisição continua normalmente;

* Middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;
