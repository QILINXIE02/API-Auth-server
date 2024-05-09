'use strict';

const creameryModel = (sequelize, DataTypes) => sequelize.define('iceCreams', {
  name: { type: DataTypes.STRING, allowNull: false },
  carbohydrates: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.ENUM('vegan', 'sorbet','dairy', 'softserve', 'yogurt'), allowNull: false }
});

module.exports = creameryModel;
