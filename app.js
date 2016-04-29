"use strict";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();

app.use(logger('dev'));
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.set('port', CONSTANTS.PORT);


const http = require('http');
// require('mongoose').connect(CONSTANTS.MONGO_URL);

const server = http.createServer(app);
server.listen(5000);
