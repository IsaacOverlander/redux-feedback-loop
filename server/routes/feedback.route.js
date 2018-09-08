const express = require('express');
const pool = require('../modules/pool.js')
const router = express.Router();

router.post('/', (req, res) => {
    feedback = req.body;
    query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;