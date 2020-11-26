const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
var config = require('./config/config');
const port = process.env.PORT || 4001;
const index = require("./server");
var database = require('./Database/database');
const app = express();
// app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

var combineDataJson = []
// const axios = require('axios');
// const path = require('path');
var excelToJson = require('convert-excel-to-json');
var Validator = require('jsonschema').Validator;
// const fs = require('fs');
var schema = require('./schema');
var schema101 = require('./schema101');
var moment = require('moment');
var escapeJSON = require('escape-json-node');
// var database = require('./Database/database');
// var config = require('./config/config');
// var async = require('async');
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var observableDiff = require('deep-diff').observableDiff;
var applyChange = require('deep-diff').applyChange;

app.get('/test', (req, res) => {
  console.log("In Test");
  var diff = require('deep-diff').diff;
 
  var lhs = {
    name: 'my object',
    description: 'it\'s an object!',
    details: [{
      it: 'has',
      an: 'array',
      with: ['a', 'few', 'elements']
    }
  
  ]
  };
  
  var rhs = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: [{
      it: 'has',
      an: 'array',
      with: ['a', 'few', 'more', 'elements']
    }
  ]
  };
  
  var differences = diff(lhs, rhs);
  console.log(differences)
  

  // observableDiff(lhs, rhs, function (d) {
  //   // Apply all changes except to the name property...
  //   if (d.path[d.path.length - 1] !== 'name') {
  //     applyChange(lhs, rhs, d);
  //     console.log(rhs);

  //   }
  // });
})



server.listen(port, () => console.log(`Listening on port ${port}`));








