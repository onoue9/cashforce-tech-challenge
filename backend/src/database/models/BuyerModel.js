const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class BuyerModel extends Model {}

BuyerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradingName: {
      type: DataTypes.STRING,
    },
    cashforceTax: {
      type: DataTypes.STRING,
    },
    responsibleName: {
      type: DataTypes.STRING,
    },
    responsibleEmail: {
      type: DataTypes.STRING,
    },
    responsiblePosition: {
      type: DataTypes.STRING,
    },
    responsiblePhone: {
      type: DataTypes.STRING,
    },
    responsibleMobile: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    complement: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    situation: {
      type: DataTypes.STRING,
    },
    situationDate: {
      type: DataTypes.DATE,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
    },
    confirm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'buyers',
    sequelize,
});

module.exports = {
  BuyerModel,
}
