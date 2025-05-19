const { Sequelize,DataTypes } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('shop_main', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('../Models/Proudects')(sequelize, DataTypes);


//  sequelize.sync({ alter: true });
// console.log('All models were synchronized successfully.');

module.exports = db