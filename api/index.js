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
  pool.query('select * from users;', (error, results) => {
    if (error) {
      throw error
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(results.rows)
  })
})

app.post("/add", function(req, res){
  const info = req.body;
  pool.query(`insert into users (first_name, last_name, username, email) values ('${info.first}', '${info.last}', '${info.username}', '${info.email}');`, (error, results) => {
    if (error){
      throw error;
    }
    res.status(200).json({'SUCCESS':'true'});
  })
  res.status(200);
})

app.post("/write_post", async function(req, res){
  const info = req.body;
  let current_id;
  const results = await pool.query(`select id from users where username='${info.username}'`);
  try{
    current_id = results.rows[0].id;
  }catch(error){
    console.error(error);
  }
  pool.query(`insert into posts (text, author_id, time, category, title, subtitle) values ('${info.text}', ${current_id}, '${info.time}', '${info.category}', '${info.title}', '${info.subtitle}');`, (error, results) => {
    if (error){
      throw error;
    }
    res.status(200).json({"SUCCESS": "true"});
  })
})

app.get("/get_posts", async function(req, res){
  const info = req.body;
  const results = await pool.query(`select * from posts`);
  console.log(results.rows);
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200).json(results.rows)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});