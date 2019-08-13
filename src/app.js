//Exportação dos modulos
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Inicia a instancia APP usando o express
const app = express();

//Conexão do bando de dados
mongoose.connect('mongodb+srv://omni:omnistack@omnistackweek-6gamj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true
})

//Carrega os modelos
const Puppy = require('./models/puppy-model')

//Inicia uma instancia da rota
const storeRoute = require('./routes/store-route');
const father = require('./routes/father');
const puppy = require('./routes/puppy');

//Esqueci para que serve
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Define para o express que na rota principal ele deve usar a constante route
app.use('/', storeRoute);
app.use('/father', father);
app.use('/puppy', puppy);

//Torna possivel a importação do app no arquivo server.js
module.exports = app;