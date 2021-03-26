var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

// code for api-routes calling router variable
// get
router.get("/", (req, res) => {
    // res.send("connected");

    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        }, 
        condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;