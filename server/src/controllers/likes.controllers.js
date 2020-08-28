const db = require('../models');
const Likes = db.likes;
const helper = require('../helper');

module.exports = {
    test(req, res) {
      res.status(200).send({
          message: "test"
      })
    },
}