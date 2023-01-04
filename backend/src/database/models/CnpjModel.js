const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class CnpjModel extends Model {}
    
CnpjModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'cnpjs',
    sequelize,
});

module.exports = {
  CnpjModel,
}
