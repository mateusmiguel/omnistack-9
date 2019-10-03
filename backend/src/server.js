const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ihmwn.mongodb.net/admin?retryWrites=true&w=majority', {
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