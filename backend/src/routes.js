const express = require('express');

const routes = express.router();

app.post('/users', (req, res) => {
  return res.json(req.body);
});
