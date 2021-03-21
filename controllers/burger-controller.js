var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

// code for api-routes calling router variable
// get
router.get("/", function (req, res) {
    // res.send("connected");

    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post
// put

module.exports = router;