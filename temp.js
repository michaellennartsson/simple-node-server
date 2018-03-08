const express = require('express');
const hbs = require('hbs');

var app = express();

// Use view engines to render dynamic content
app.set('view engine', 'hbs');

// Use middleware to use static folders
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen('3000', () => {
  console.log('Sever is running at: http://localhost:3000');
});