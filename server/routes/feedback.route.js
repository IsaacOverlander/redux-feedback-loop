const express = require('express');
const pool = require('../modules/pool.js')
const router = express.Router();

// POST route
router.post('/', (req, res) => {
    feedback = req.body;
    query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });// End POST
})
// GET route
router.get('/', (req, res) => {
    query = `SELECT * FROM "feedback;`;
    pool.query(query).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });// End GET
})

module.exports = router;