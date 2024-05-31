const db= require('../database/index')

const getOne = (req,res)=>{
    db.Seller.findOne()
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
    }

    module.exports= getOne