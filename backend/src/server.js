//importando o express (require: importar uma dependência externa)
//express: micro framework
const express = require('express');

//importando o mongoose (yarn add mongoose)
const mongoose = require('mongoose');

//importando o cors
const cors = require('cors');

//importando o path
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

//importando rotas do arquivo
const routes = require('./routes');

//criando a aplicação (express: função)
const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-4n2sw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectedUsers = {};

io.on('connection', socket => {
    //console.log(socket.handshake.query);
    //console.log('Usuário conectado', socket.id);

    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
    
    //setTimeout(() => {
    //    socket.emit('hello', 'World');  
    //}, 4000);

    //socket.on('omni', data => {
    //    console.log(data);
    //})
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

//req.query: acessar query params ({idade: req.query.idade}) - filtros
//req.params: acessar route params ({id: req.params.id}) - edição e delete
//req.body: acessar corpo da requisição - criação e edição

//requisições utilizarão o formato json
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

//porta para execução da aplicação (localhost:3333)
//app.listen(3333);
server.listen(3333);