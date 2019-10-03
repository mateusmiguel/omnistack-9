const express = require('express');

const app = express();

// GET, POST, PUT, DELETE

// req.query  = Acessa query params (filtros)
// req.params = Acessa route params (edit, delete)
// req.body   = Acessa corpo da requisição (create, edit)

app.use(express.json());


app.listen(3333);