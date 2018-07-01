//requires
const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

//return 1
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM feedback';

    pool.query(queryText)
        .then( (result) => {
            console.log(result.rows);
            
            res.send(result.rows);
        }).catch( (error) => {
            console.log('Error in get',erro);
            res.sendStatus(500);
        });
});

//post route
router.post('/', (req, res) => {
    const item = req.body
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES($1, $2, $3, $4);`;

    pool.query(queryText, [item.feeling, item.understanding, item.support, item.comments])
        .then( (results) => {
            res.sendStatus(201);
        }).catch( () => {
            res.sendStatus(500);
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = 'DELETE FROM feedback WHERE id=$1';
    pool.query(queryText, [id])
        .then( (result) => {
            res.send(200);
        }).catch( () => {
            res.sendStatus(500);
        })
});

module.exports = router;
