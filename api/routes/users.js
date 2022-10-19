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


router.get("/", async function(req, res){
  let username = req.query.username;
  console.log(username);
  if (username!=null){
    let info = await pool.query(`select first_name, last_name from users where username='${username}'`);
    console.log(info.rows[0]);
    if (info.rows.length > 0) {
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json({firstname: info.rows[0]['first_name'], lastname: info.rows[0]['last_name']})
    }
    return;
  }
    pool.query('select * from users;', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results);
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).json(results.rows)
    })
})


router.post("/login", async function(req, res){
  const info = req.body;
  res.set('Access-Control-Allow-Origin', '*');
  pool.query(`select * from users where username='${info.username}'`, (error, results)=>{
    console.log('query results', results.rows.length);
    if (error){
      throw error;
    }else{
      if (results.rows.length==0){
        res.status(401).json({'response':'failed'})
      }else{
        res.status(200).json({"response": "SUCCESS", "user": {"first": results.rows[0]['first_name'], "last": results.rows[0]['last_name']}})
      }
    }
  });
})

router.post("/signup", async function(req, res){
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