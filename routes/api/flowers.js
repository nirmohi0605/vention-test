const express = require('express');
const router = express.Router();
const Flower = require('../../models/Flower');


router.get('/flowers', (req, res) => {
    Flower.find().then(flowers => {
        res.send(flowers);
    }).catch(err => {
        res.send(err);
    })
})


module.exports = router;