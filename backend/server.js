const express = require('express');
const redis = require('redis');
const WebSocket = require('ws');

const publisherRedis = redis.createClient({host:'127.0.0.1', port:6379});

const app = express();
const server = new WebSocket.Server({ port : 3030 });
const channel = 'user-notify';

publisherRedis.subscribe(channel);


app.get('/',(req,response) => {
    response.send("Welcome ...");
})



server.on('connection', function connection(webSocket) {

    webSocket.on("message", (message) => {
        console.log(`Received message => ${message}`); 
        webSocket.send(`Received message on server=> ${message}`);
    });

    // handle close event
    webSocket.on("close", () => {
        console.log("closed", server.clients.size);
    });

   
    // broadcast on web socket when receving a Redis PUB/SUB Event
    publisherRedis.on('message', function(channel, message){
      console.log(message);
      webSocket.send(message);
    });
})

app.listen(3005,() => {
    console.log(`server is listening on PORT 3005, Redis on 6379 and webSocket on 3030`);
})