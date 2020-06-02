const express = require('express');

const server = express();
server.use(express.json());

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

function findIndex(id){
    for(let i = 0; i < projs.projects.length; i++){
        if(projs.projects[i].id == id){
            return i;
        }
    }
    return -1;
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

server.put('/projects/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    let index = findIndex(id);
    if(index >= 0){
        projs.projects[index].title = title;
        res.send(`Projeto Atualizado`);
    } else{
        res.send(`ID não Atualizado`);
    }
})

server.post('/projects/:id/tasks', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    let index = findIndex(id);
    if(index >= 0){
        projs.projects[index].tasks.push(title);
        res.send(`Projeto Atualizado (Task)`);
    } else{
        res.send(`ID não Atualizado (Task)`);
    }
})

server.delete('/projects/:id', (req, res) => {
    const {id} = req.params;
    let index = findIndex(id);
    if(index >= 0){
        projs.projects.splice(index, 1);
        res.send(`Projeto Deletado`);
    } else{
        res.send(`ID não encontrado`);
    }
})

server.listen(3000);