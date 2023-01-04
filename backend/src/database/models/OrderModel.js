const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');
const { BuyerModel } = require('./BuyerModel');
const { CnpjModel } = require('./CnpjModel');
const { ProviderModel } = require('./ProviderModel');
const { UserModel } = require('./UserModel');

class OrderModel extends Model {}
    
OrderModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderPath: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    orderFileName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    orderOriginalName: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    emissionDate: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    pdfFile: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    emitedTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nNf: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    CTE: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    value: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      references: {
        model: CnpjModel,
        key: 'id',
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      references: {
        model: UserModel,
        key: 'id',
      }
    },
    buyerId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      references: {
        model: BuyerModel,
        key: 'id',
      }
    },
    providerId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      references: {
        model: ProviderModel,
        key: 'id',
      }
    },
    orderStatusBuyer: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    deliveryReceipt: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    cargoPackingList: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    deliveryCtrc: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'orders',
    sequelize,
});

OrderModel.belongsTo(BuyerModel, { foreignKey: 'buyerId', as: 'buyers' });
BuyerModel.hasOne(OrderModel, { foreignKey: 'buyerId', as: 'buyers'});
OrderModel.belongsTo(CnpjModel, { foreignKey: 'cnpjId', as: 'cnpjs' });
CnpjModel.hasOne(OrderModel, { foreignKey: 'cnpjId', as: 'cnpjs'});
OrderModel.belongsTo(ProviderModel, { foreignKey: 'providerId', as: 'providers' });
ProviderModel.hasOne(OrderModel, { foreignKey: 'providerId', as: 'providers'});
OrderModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'users' });
UserModel.hasOne(OrderModel, { foreignKey: 'userId', as: 'users'});

module.exports = {
  OrderModel,
}
