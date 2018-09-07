const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/chat.html');
});

//聊天记录
let chatrecord = new Array();
io.on('connection', function(socket) {
  console.log('>>>>> -------- connected');
  socket.emit('news', { //传递前端news 事件及参数
    msg: chatrecord
  });
  socket.on('zero', function(data) { //接受前端传来 zero 事件,及回调
    console.log(data);
    chatrecord.push(data);
    io.emit('broadcast', {
      "Id": 14042
    }); // emit an event to all connected sockets
    socket.emit('news', { //传递前端news 事件及参数
      msg: data
    });
  });

});



http.listen(3500, function() {
  console.log('listening on *:3500');
});
