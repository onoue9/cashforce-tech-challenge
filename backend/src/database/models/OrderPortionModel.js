const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class OrderPortionModel extends Model {}
    
OrderPortionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nDup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dVenc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vDup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
    },
    orderId: {
      type: DataTypes.INTEGER,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'order_portions',
    sequelize,
});

module.exports = {
  OrderPortionModel,
}
