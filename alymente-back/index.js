require('dotenv').config();
const express = require('express');
const middlewares = require('./middlewares');
const router = require('./routes');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'uploads'));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(express.json());

app.use(middlewares.logs);

app.use(router);

app.use(middlewares.errors);

app.listen(process.env.PORT, () =>
  console.log(`ouvindo porta ${process.env.PORT}!`)
);
