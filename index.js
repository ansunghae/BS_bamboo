var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const port = 80;

app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/html/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/html/register.html');
});

io.on('connection', (socket) => {
    socket.emit('usercount', io.engine.clientsCount);

    socket.on('message', (msg) => {
        console.log('Message Received : '+ msg);

        io.emit('message', msg);
    });
});

server.listen(port, () => {
    console.log('Listening on https://localhost:/' + port);
});