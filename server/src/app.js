/***
 * @module app
 * @author Sarang N <sarang98divakaran@gmail.com>
 * 
 * This module server as the entry point to the application server.
 * server and app objects are exposed to allow them to be used with testing frameworks.
 */

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

// Create an Express App, and an http server.
const app = express();
const server = http.createServer(app);

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    err.message = 'Requested URL Not Found';
    next(err);
});
  
// error handler
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
        status:'failed',
        message: err.message || 'An error occured',
    });
});

module.exports = { app, server };
