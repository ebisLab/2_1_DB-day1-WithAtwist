const express = require('express');
// const Project = require('../data/helpers/projectModel')
const router = express.Router();
const db = require('../data/dbConfig.js');
router.use(express.json());

router.get('/', (req, res) => {
    db.select('*').from('accounts')
        .then(acc => { res.status(200).json(acc) })
        .catch(err => { res.json(err) })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('accounts').where({ id })
        .first() //going to give me a limit of one object, the first element
        .then(acc => { res.status(200).json(acc) })
        .catch(err => { res.json(err) })
})

// router.post('/', (req, res) => {
//     const accData = req.body
//     // db.select('*').from('accounts')
//     db('accounts')
//         .insert(accData, 'id')
//         .then(accRes => { res.status(200).json(accRes); })
//         .catch(err => {
//             console.log('error here')
//             res.json(err)
//         })
// })

router.post('/', (req, res) => {
    const accData = req.body
    // db.select('*').from('accounts')
    db('accounts')
        .insert(accData, 'id')
        .then(([id]) => {

            db('accounts').where({ id })
                .first()
                .then(acc => { res.status(200).json(acc) })
            // .catch(err => { res.json(err) })
        })
        .catch(err => {
            console.log('error here')
            res.json(err)
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('accounts').where({ id: req.params.id })
        .del()
        // .first()
        .then(count => { res.status(200).json({ message: `deleted ${count} records` }) })
        .catch(err => { res.json(err) })
})

module.exports = router;