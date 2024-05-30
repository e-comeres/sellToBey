const db = require("../database/index.js");

module.exports = {
  getAllPanier: (req, res) => {
    db.Panier.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },
  addToPanier: (req, res) => {
    db.Panier.create({
      productId: req.body.productId,
      UserId: req.body.UserId,
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => console.error(err));
  },
  removeFromPanier: (req, res) => {
    db.Panier.destroy({ where: { productId: req.params.productId } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  },
};
