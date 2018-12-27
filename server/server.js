const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const {user1, user2} = require('./serverObj.js');

connectUser(user1);
connectUser(user2);

function connectUser(server) {
    let nsp = io.of(server.namespace);
    nsp.on('connection', (socket) => {

        console.log(`user: ${socket.id} connected to ns: ${server.namespace}`);

        socket.on('con-event', (event) => {
            console.log(`connection event: ${JSON.stringify(event)}`);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('chat message', (msg) => {
            console.log(`msg received: ${msg}`);
            nsp.emit('chat message', msg);
        });

        server.rooms.public.forEach((room) => {
            socket.join(room, () => {
                console.log(`socket id: ${socket.id} joined room: ${room}`);
            });
        });

        server.rooms.private.forEach((room) => {
            socket.join(room, () => {
                console.log(`socket id: ${socket.id} joined room: ${room}`);
            });
        });


    });
}


http.listen(3001, function(){
    console.log('listening on *:3001');
});
