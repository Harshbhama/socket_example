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





// var amqp = require('amqplib/callback_api');
// var combineDataJson = []
// const axios = require('axios');
// amqp.connect('amqp://localhost', function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         combineDataJson = []
//         if (error1) {
//             throw error1;
//         }
//         var queue = 'rpc_queue1';

//         channel.assertQueue(queue, {
//             durable: false
//         });
//         channel.prefetch(1);
//         console.log(' [x] Awaiting RPC requests');
//         channel.consume(queue, function reply(msg) {
//             console.log(msg)
//             console.log("HEaders")
//             console.log(msg.properties.headers)
//             console.log(JSON.parse(msg.content));
            
//             var n = msg.content.toString();
//             var jsonVal = JSON.parse(msg.content)
//             console.log('---------------------------------------------------');
//             console.log('-----')
            
            

               
//          axios({
//           method: 'post',
//           url: 'https://api.mastergst.com/einvoice/type/GENERATE/version/V1_1',
//            data: jsonVal,
//           params: {
//             email: 'parikshit.jain@in.gt.com'
//           },
//           headers: { 
//             username: 'MGSTTEST',
//             'auth-token': msg.properties.headers.auth,
//             ip_address: msg.properties.headers.ipAdd,
//             client_id: 'cd4c831b-cc9b-471d-bf82-6bf9ff2ebc61',
//             client_secret: '82df3098-6487-43f5-a14a-06c6b8b29eea',
//             gstin: '36AABCT1332L011' 
  
//           }
//         }).then(response => {
//             console.log(response.data)
//             // combineDataJson.push({"txn_id": msg.properties.headers.txnVal , "error": response.data})
//             // console.log('------------')
//             // console.log('-----------------------------')
//             // console.log(combineDataJson);
//             channel.sendToQueue(msg.properties.replyTo,
//                 Buffer.from(JSON.stringify(response.data)), {
//                     correlationId: msg.properties.correlationId
//                 });
            
            
//         }).catch(error => {
//           console.log(error)
//         }); 


//             channel.ack(msg);
//         });
//     });
// });

server.listen(port, () => console.log(`Listening on port ${port}`));























// const express = require('express');
// const cors = require('cors');
// const http = require("http");
// const socketIo = require("socket.io");
// const bodyParser = require('body-parser')
// const mysql = require('mysql');

// const app = express();
// var port = process.env.PORT || 4001;
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())

// var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');

// var async = require('async');


// // const fs = require("fs");
// const path = require("path");
// // const puppeteer = require('puppeteer');
// // const handlebars = require("handlebars");

// // var pdf = require("pdf-creator-node");
// var fs = require('fs');
 
// // Read HTML Template

// const server = http.createServer(app);

// const io = socketIo(server);

// let interval;





// // console.log(connection)

// app.use(cors());
// app.use(bodyParser.json())


// app.get('/', (req, res) => {
    
//     io.on("connection", (socket) => {
//         console.log("New client connected");
//         if (interval) {
//           clearInterval(interval);
//         }
//         interval = setInterval(() => getApiAndEmit(socket), 1000);
//         socket.on("disconnect", () => {
//           console.log("Client disconnected");
//           clearInterval(interval);
//         });
//       });
      
//       const getApiAndEmit = socket => {
//         const response = new Date();
//         // Emitting a new message. Will be consumed by the client
//         socket.emit("FromAPI", response);
//       };
      
// })


// app.listen(port, function () {
//   console.log("Server is running on port: " + port);
// })