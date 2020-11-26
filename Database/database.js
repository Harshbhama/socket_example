
// var mysql = require('mysql');
var mysqlx = require('@mysql/xdevapi');

var config = require('../config/config');
console.log(config.dbname);
// var connection = mysql.createPool({
//     connectionLimit: config.connectionLimit,
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.dbname,
//     port: config.port,
//     debug: false,
//     multipleStatements: true,
//     timezone: 'UTC'
// });


var client = mysqlx.getClient({host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    schema: config.database},
    { pooling:{ enabled:true, maxIdleTime:30000, maxSize:25, queueTimeout:10000}});


// var connection = mysqlx
//     .getSession({
//         host: config.host,
//         user: config.user,
//         password: config.password,
//         port: config.port,
//         schema: config.database
//     })



module.exports.client = client;