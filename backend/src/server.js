//importando o express (require: importar uma dependência externa)
//express: micro framework
const express = require('express');

//importando o mongoose (yarn add mongoose)
const mongoose = require('mongoose');

//importando rotas do arquivo
const routes = require('./routes');

//criando a aplicação (express: função)
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-4n2sw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//requisições utilizarão o formato json
app.use(express.json());
app.use(routes);

//porta para execução da aplicação (localhost:3333)
app.listen(3333);
