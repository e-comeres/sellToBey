module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
      name: DataTypes.TEXT,
      imgUrl: {
        type: DataTypes.STRING,
      },
      category: DataTypes.TEXT,
    });
    return Product;
  };