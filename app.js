const express = require('express');
const socketio = require('socket.io');
const config = require('./config.js');

const app = express();

/*app.get('/', (request, response) => {
    //codcie eseguito quando il server riceve la richiesta
    response.sendFile(__dirname + '/public/index.html')
})*/
app.use(express.static);

const server = app.listen(config.localport, ()=> {
    console.log('Server in ascolto sulla porta ' + config.localport);
});

