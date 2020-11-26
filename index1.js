const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./server");

const app = express();
// app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;








var amqp = require('amqplib/callback_api');
var combineDataJson = []
const axios = require('axios');
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        combineDataJson = []
        if (error1) {
            throw error1;
        }
        var queue = 'rpc_queue1';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        channel.consume(queue, function reply(msg) {
            console.log(msg)
            console.log("HEaders")
            console.log(msg.properties.headers)
            console.log(JSON.parse(msg.content));
            
            var n = msg.content.toString();
            var jsonVal = JSON.parse(msg.content)
            console.log('---------------------------------------------------');
            console.log('-----')
            io.on("connection", (socket) => {
                console.log("New client connected");
                if (interval) {
                  clearInterval(interval);
                }
                interval = setInterval(() => getApiAndEmit(socket), 1000);
                socket.on("disconnect", () => {
                  console.log("Client disconnected");
                  clearInterval(interval);
                });
              });
              
              const getApiAndEmit = socket => {
                const response = new Date();
                // Emitting a new message. Will be consumed by the client
                socket.emit("FromAPI", response);
              };
               
        
            // channel.sendToQueue(msg.properties.replyTo,
            //     Buffer.from(JSON.stringify('test')), {
            //         correlationId: msg.properties.correlationId
            //     });
      


            // channel.ack(msg);
        });
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));








