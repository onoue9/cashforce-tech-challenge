const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class OfferModel extends Model {}
    
OfferModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tariff: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adValorem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    float: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iof: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
    },
    paymentStatusProvider: {
      type: DataTypes.BOOLEAN,
    },
    orderId: {
      type: DataTypes.INTEGER,
    },
    sponsorId: {
      type: DataTypes.INTEGER,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'offers',
    sequelize,
});

module.exports = {
  OfferModel,
}
