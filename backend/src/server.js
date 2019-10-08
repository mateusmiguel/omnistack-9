const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-ihmwn.mongodb.net:27017,cluster0-shard-00-01-ihmwn.mongodb.net:27017,cluster0-shard-00-02-ihmwn.mongodb.net:27017/omnistack9?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query  = Acessa query params (filtros)
// req.params = Acessa route params (edit, delete)
// req.body   = Acessa corpo da requisição (create, edit)

app.use(express.json());
app.use(routes);


app.listen(3333);