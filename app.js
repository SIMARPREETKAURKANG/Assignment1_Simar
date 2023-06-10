// File name: app
// Student’s Name: Simarpreet Kaur Kang
// StudentID: 301279280
// Date: 9 June 2023

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');
