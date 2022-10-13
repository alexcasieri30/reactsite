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


router.get("/", function (req, res) {
    res.send("hello world")
  });
  
router.get("/data", function(req, res){
    pool.query('select * from users;', (error, results) => {
      if (error) {
        throw error
      }
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json(results.rows)
    })
})
  
router.post("/add", function(req, res){
    const info = req.body;
    pool.query(`insert into users (first_name, last_name, username, email) values ('${info.first}', '${info.last}', '${info.username}', '${info.email}');`, (error, results) => {
      if (error){
        throw error;
      }
      res.status(200).json({'SUCCESS':'true'});
    })
    res.status(200);
})

module.exports = router;