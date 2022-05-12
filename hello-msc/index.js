// index.js

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router')

const Author = require('./controllers/Authors');
const errorMiddleware = require('./middlewares/error');
const rescue = require('express-rescue');

const app = express();

app.use(bodyParser.json());

app.use(router)


app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});