const express = require("express");
const app = express();
const { ending } = require('express-handlebars');
const cors = require('cors');
const router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'wolf0435',
  port: 5431,
})


router.get('/info', async function(req, res){
    let game = req.query.game;
    console.log(game);
    pool.query(`SELECT * FROM games WHERE game='${game}' ORDER BY score DESC;`, (error, results) =>{
        res.json(results.rows);
    });
})

router.get('/best', async function(req, res){
    let username = req.query.username;
    console.log(username);
    pool.query(`SELECT max(score) FROM games WHERE username='${username}';`, (error, results) =>{
        res.json(results.rows[0]['max']);
    });
})

router.post('/gameScore', async function(req, res){
    let info = req.body;
    console.log("INFO: ", info);
    pool.query(`INSERT INTO games (username, score, game, time) VALUES('${info.username}', '${info.score}', '${info.game}', '${info.time}');`, (error, results) => {
        if (error){
            throw error;
        }else{
            res.status(200).json({"SUCCESS": true})
        }
    })
})

module.exports = router;