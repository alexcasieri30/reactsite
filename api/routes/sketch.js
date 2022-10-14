const express = require("express");
const app = express();
const { ending } = require('express-handlebars');
const cors = require('cors');
const router = express.Router();

app.use(cors({
  origin: 'http://localhost:3000',
}));

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'wolf0435',
  port: 5431,
})