const express = require("express");
const app = express();
const { ending } = require('express-handlebars');
const cors = require('cors');

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

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3001;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/", function (req, res) {
  res.send("hello world")
});

app.get("/data", function(req, res){
  pool.query('select * from test;', (error, results) => {
    if (error) {
      throw error
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(results.rows)
  })
})

app.post("/add", function(req, res){
  const info = req.body;
  pool.query(`insert into users (first_name, last_name) values ('${req.body.first}', '${req.body.last}');`, (error, results) => {
    if (error){
      throw error;
    }
    res.status(200).json({'SUCCESS':'true'});
    console.log(res.json());
  })
  res.status(200);
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});