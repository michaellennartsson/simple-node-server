const express = require('express');

var app = express();

const port = process.env.port || 3000;

app.use((req, res, next) => {
  var time = new Date().toString();
  console.log(time);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Running on port ' + port);
});