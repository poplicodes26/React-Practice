const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const memeRouter = require('./routes/router');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');



const app = express();

const port = process.env.PORT 

 
app.use(express.json());
app.use(cors());


app.use(memeRouter);

module.exports = app;