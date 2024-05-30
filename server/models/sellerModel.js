module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
    const Seller = sequelize.define("Seller", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false ,

      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "seller", "admin"),
        allowNull: false,
        defaultValue: "seller",
      },
    });
    return Seller;
  };
=======
  const Seller = sequelize.define("Seller", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "seller", "admin"),
      allowNull: false,
      defaultValue: "seller",
    },
  });
  return Seller;
};
>>>>>>> e1c39bdbafcb5b32f130c4e68172aa57328d749d
