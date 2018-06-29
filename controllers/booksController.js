const db = require("../models");

// Defining methods for the booksController


module.exports = {
  findAll: function(req, res) {
    db.Book.findAll({})
    .then(function(dbBook) {
      res.json(dbBook);
    });
  },
  findById: function(req, res) {
    db.Book.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBook) {
        res.json(dbBook);
      });
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
     db.Book.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbBook) {
        res.json(dbBook);
      });

  },
  remove: function(req, res) {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBook) {
        res.json(dbBook);
      });
  }
};