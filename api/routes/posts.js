const express = require("express");
const app = express();
const { ending } = require('express-handlebars');
const cors = require('cors');


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'wolf0435',
  port: 5431,
})

var router = express.Router();

router.post("/", async function(req, res){
    const info = req.body;
    let current_id;
    const results = await pool.query(`select id from users where username='${info.username}'`);
    try{
      current_id = results.rows[0].id;
    }catch(error){
      console.error(error);
    }
    pool.query(`insert into posts (text, author_id, time, category, title, subtitle) values ('${info.text}', ${current_id}, '${info.date}', '${info.category}', '${info.title}', '${info.subtitle}');`, (error, results) => {
      if (error){
        throw error;
      }
      res.status(200).json({"SUCCESS": "true"});
    })
})
  
router.get("/", async function(req, res){
    let sql_query = `SELECT text, author_id, time, category, title, subtitle, username FROM posts INNER JOIN users ON posts.author_id = users.id`;
    const results = await pool.query(sql_query)
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(results.rows)
})
  

module.exports = router;