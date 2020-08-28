const db = require('../models');
const Comments = db.comments;
const helper = require('../helper');

module.exports = {
    test(req, res) {
        console.log("req", req.body);
        res.status(200).send({
            message: "test"
        })
    },
}