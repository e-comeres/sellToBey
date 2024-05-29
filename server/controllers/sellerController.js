const db = require("../database/index");


module.exports = {
    getSeller: (req, res) => {
        db.Product.findAll()
          .then((data) => {
            console.log(data)
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
      },
      getOneSeller: (req, res) => {
        db.Product.findOne({
          where: {
            id: req.params.id,
          },
        })
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
      },
    addSeller: (req, res) => {
      db.Product.create(req.body)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },
    removeSeller: (req, res) => {
      db.Product.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },
    updateSeller: (req, res) => {
      db.Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },
  };
  