var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('usuário entrou');
  socket.on('disconnect', function(){
    console.log('usuário saiu');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('mensagem: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('ouvindo na porta *:3000');
});