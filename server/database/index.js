const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("selling", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;

db.Product = require("../models/ProductModels")(sequelize, DataTypes);
db.User = require("../models/UserModels")(sequelize, DataTypes);
// db.Movies = require("../models/movies.js")(sequelize, DataTypes);
// db.Users = require("../models/User.js")(sequelize, DataTypes);

// db.MyList = require("../models/MyList.js")(sequelize, DataTypes);

// db.Users.hasMany(db.Movies);
// db.Movies.belongsTo(db.Users);

// db.Users.belongsToMany(db.Movies, { through: "MyList" });
// db.Movies.belongsToMany(db.Users, { through: "MyList" });

sequelize
  .authenticate()
  .then(() => {
    console.log("all good");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("Error creating database & tables:", error);
//   });

module.exports = db;
