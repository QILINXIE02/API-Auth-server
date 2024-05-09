'use strict';

const creameryModel = (sequelize, DataTypes) => sequelize.define('Ice-Cream', {
  name: { type: DataTypes.STRING, allowNull: false },
  carbohydrates: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.ENUM('vegan', 'sorbet','dairy', 'gluten-free', 'yogurt'), allowNull: false }
});

module.exports = creameryModel;
