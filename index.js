const express = require('express');

const server = express();
server.use(express.json());

let num_req = 0;

const projs = {
    projects: [
    {
        id: "1",
        title: "Proj 01",
        tasks: ["T 01", "T 02"]
    },
    {
        id: "2",
        title: "Proj 02",
        tasks: ["T 01"]
    },
    {
        id: "3",
        title: "Proj 03",
        tasks: ["T 03"]
    }
]}

// Middlewares Global (chamado por todas as requisições)
// Retorna o numero de requisições feitas até o momento
server.use((req, res, next) => {
    num_req++;
    console.log("Numero de requisicoes = " + num_req);
    return next();
})
// Middlewares Local 
// Chamado apenas para as rotas que recebem o ID como parametro
function checkId(req, res, next){
    for(let i = 0; i < projs.projects.length; i++){
        if(projs.projects[i].id == req.params.id){
            req.indexId = i;
            return next();
        }
    }
    return res.send("Projeto não encontrado.");
}

server.get('/', (req, res) => {
    return res.send('Este é um projeto feito para o curso do BootCamp GoStack.');
})

server.get('/projects', (req, res) => {
    return res.json(projs);
})

server.post('/projects', (req, res) => {
    const {id, title} = req.body;
    const nproj = {id: id, title: title, tasks: []};
    projs.projects.push(nproj);
    res.json(projs);
})

server.put('/projects/:id', checkId, (req, res) => {
    const {title} = req.body;
    projs.projects[req.indexId].title = title;
    res.send(`Projeto Atualizado`);
})

server.post('/projects/:id/tasks', checkId, (req, res) => {
    const {title} = req.body;
    projs.projects[req.indexId].tasks.push(title);
    res.send(`Tsck Inserido ao Projeto`);    
})

server.delete('/projects/:id', checkId, (req, res) => {
    projs.projects.splice(req.indexId, 1);
    res.json(projs);
})

server.listen(3000);