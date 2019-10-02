//importando o express
const express = require('express');

//importando o controller
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

//variavel routes
const routes = express.Router();

//GET (buscar info no backend), POST (criar uma nova info no back)
//PUT (editar info), DELETE (deletar info)

//visualizar a aplicação funcionando (rota do usuário)
//req: requisição (informações que o usuário está enviando)
//return: devolver uma resposta ao navegador (estrutura de dados)
//node src/server.js (ctrl+c: stop)
//yarn add nodemon -D (yarn dev)
//(-D: informa p/ o projeto que essa dependência só será usada no desenvolvimento)
//req.query: acessar query params ({idade: req.query.idade}) - filtros
//req.params: acessar route params ({id: req.params.id}) - edição e delete
//req.body: acessar corpo da requisição - criação e edição
/*
routes.post('/users', (req, res) => {
    return res.json(req.body); //({message: "Hello World})"
})
*/

routes.post('/sessions', SessionController.store);
routes.post('/spots', SessionController.store);

//exportando rotas do arquivo
module.exports = routes;