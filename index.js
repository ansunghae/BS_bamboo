const express = require('express');
const app = express();
const port = 80

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/public/html/chat.html')
})

app.listen(port , () => {
  console.log("Server Open at http://localhost:", port);
});