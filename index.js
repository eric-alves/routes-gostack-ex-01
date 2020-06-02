import express from 'express';

const server = express();

server.get('/teste', (req, res) => {
    return res.json({message: "Ola mundo"})
})

server.listen(3000);