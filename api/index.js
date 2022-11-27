const express = require("express");
const app = express();
const { ending } = require('express-handlebars');
const cors = require('cors');
const post_router = require('./routes/posts.js');
const user_router = require('./routes/users.js');
const game_router = require('./routes/games.js');
require('dotenv').config()

app.use(cors({
  origin: 'http://localhost:3000',
}));


const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USERNAME,
  host: '127.0.0.1',
  database: 'postgres',
  password: process.env.PASSWORD,
  port: 5431,
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3001;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/posts', post_router);
app.use('/users', user_router);
app.use('/games', game_router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
