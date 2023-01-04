const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('order_portions', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nDup: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "n_dup",
      },
      dVenc: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "d_venc",
      },
      vDup: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "v_dup",
      },
      availableToMarket: {
        type: DataTypes.BOOLEAN,
        field: "available_to_market",
      },
      orderId: {
        type: DataTypes.INTEGER,
        field: "order_id",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('order_portions');
  },
};
