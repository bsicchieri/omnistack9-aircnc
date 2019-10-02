//importando o express (require: importar uma dependência externa)
//express: micro framework
const express = require('express');

//importando rotas do arquivo
const routes = require('./routes');

//criando a aplicação (express: função)
const app = express();

//requisições utilizarão o formato json
app.use(express.json());
app.use(routes);

//porta para execução da aplicação (localhost:3333)
app.listen(3333);