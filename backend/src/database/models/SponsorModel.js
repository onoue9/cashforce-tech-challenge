const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class SponsorModel extends Model {}
    
SponsorModel.init(
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
      defaultValue: null,
    },
    cashforceTax: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    responsibleName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    responsibleEmail: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    responsiblePosition: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    responsiblePhone: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    responsibleMobile: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    website: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    postalCode: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    number: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    complement: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    neighborhood: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    bank: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    bankAgency: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    account: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    situation: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    situationDate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
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
    modelName: 'sponsors',
    sequelize,
});

module.exports = {
  SponsorModel,
}
