var express = require('express');
var router = express.Router();
var query = require('../mysql/query')
console.log(query)
    /* GET home page. */
router.get('/api/get/train_tickets', function(req, res, next) {
    var data = req.query
    console.log(data)
    query('select * from che where data=?', [data.date], function(err, results) {
            if (err) {
                return err
            }
            res.send({ code: 1, a: results })
        })
        // res.render('index', { title: 'Express' });

});

module.exports = router;