import sql from './repositorio/'
import express from 'express'
import api from './routes/api'

var config = "server=LAPTOP-LP8FS1UP;Database=PaloConsult01;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

var bodyParser = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api());
app.listen(4000);