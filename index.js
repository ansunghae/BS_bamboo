const express = require('express');
const app = express();
const port = 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/view/html/index.html')
});

app.listen(port , () => {
  console.log("Server Open at http://localhost:", port);
});