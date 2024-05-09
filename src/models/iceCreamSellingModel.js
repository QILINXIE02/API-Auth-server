'use strict';

const iceCreamSellingModel = (sequelize, DataTypes) => {
  const IceCreamSelling = sequelize.define('IceCreamSelling', {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false }
  });

  IceCreamSelling.associate = (models) => {
    IceCreamSelling.belongsTo(models.IceCream, { foreignKey: 'iceCreamId', allowNull: false });
    IceCreamSelling.belongsTo(models.Users, { foreignKey: 'sellerId', allowNull: false });
  };

  return IceCreamSelling;
};

module.exports = iceCreamSellingModel;
