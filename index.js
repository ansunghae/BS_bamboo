const express = require('express');
const app = express();
const port = 80

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/html/login.html')
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/html/register.html')
});

app.listen(port , () => {
  console.log("Server Open at http://localhost:", port);
});