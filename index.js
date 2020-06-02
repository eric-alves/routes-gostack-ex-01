const express = require('express');

const server = express();
server.use(express.json());

const projs = {
    projects: [
    {
        id: "1",
        title: "Proj 01",
        task: ["T 01", "T 02"]
    },
    {
        id: "2",
        title: "Proj 02",
        task: ["T 01"]
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
    projs.push(req.body);
    res.json(req.body);
})

server.delete('/projects/:id', (req, res) => {
    const {id} = req.params;
    let index = findIndex(id);
    console.log(index);
    if(index >= 0){
        projs.projects.splice(index, 1);
        res.send(`Projeto Deletado`);
    } else{
        res.send(`ID não encontrado`);
    }
})

server.listen(3000);