"use strict";
require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const CONSTANTS = require("./config/constants");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require("./routes/api"))

const http = require('http');

const server = http.createServer(app);
server.listen(CONSTANTS.PORT);
