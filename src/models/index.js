'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const iceCreamSellingModel = require('./iceCreamSellingModel.js');
const creameryModel = require('./creamery.js');
const userModel = require('./users.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL, {logging:false});
const creamery = creameryModel(sequelize, DataTypes);
const iceCreamSelling = iceCreamSellingModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  creamery: new Collection(creamery),
  iceCreamSelling: new Collection(iceCreamSelling),
  users: userModel(sequelize, DataTypes),
};
