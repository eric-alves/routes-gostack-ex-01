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

module.exports = {
    // Middlewares Local 
    // Chamado apenas para as rotas que recebem o ID como parametro
    checkId(req, res, next){
        for(let i = 0; i < projs.projects.length; i++){
            if(projs.projects[i].id == req.params.id){
                req.indexId = i;
                return next();
            }
        }
        return res.send("Projeto não encontrado.");
    },
    index(req, res){
        return res.send('Este é um projeto feito para o curso do BootCamp GoStack.');
    },
    projectList(req, res){
        return res.json(projs);
    },
    insertProject(req, res) {
        const {id, title} = req.body;
        const nproj = {id: id, title: title, tasks: []};
        projs.projects.push(nproj);
        res.json(projs);
    },
    insertTasks(req, res){
        const {title} = req.body;
        projs.projects[req.indexId].tasks.push(title);
        res.send(`Task Inserido ao Projeto`);    
    },
    updateTitle(req, res) {
        const {title} = req.body;
        projs.projects[req.indexId].title = title;
        res.send(`Projeto Atualizado`);
    },
    projectDelete(req, res){
        projs.projects.splice(req.indexId, 1);
        res.json(projs);
    }
}