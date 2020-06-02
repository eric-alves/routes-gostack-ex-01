const express = require('express');
const ProjectsController = require('./ProjectController');

const routes = express.Router();

// Middlewares Global (chamado por todas as requisições)
// Retorna o numero de requisições feitas até o momento
let num_req = 0;
routes.use((req, res, next) => {
    num_req++;
    console.log("Numero de requisicoes = " + num_req);
    return next();
})

routes.get('/', ProjectsController.index );
routes.get('/projects', ProjectsController.projectList);
routes.post('/projects', ProjectsController.insertProject);
routes.put('/projects/:id', ProjectsController.checkId, ProjectsController.updateTitle);
routes.post('/projects/:id/tasks', ProjectsController.checkId, ProjectsController.insertTasks);
routes.delete('/projects/:id', ProjectsController.checkId, ProjectsController.projectDelete);

module.exports = routes;