const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {}
    
UserModel.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    departament: {
      type: DataTypes.STRING,
    },
    verificationCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cashforceAdm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'users',
    sequelize,
});

module.exports = {
  UserModel,
}
