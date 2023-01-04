const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tax: {
        type: DataTypes.STRING
      },
      tariff: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adValorem: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "ad_valorem"
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
        field: "expires_in"
      },
      paymentStatusSponsor: {
        type: DataTypes.BOOLEAN,
        field: "payment_status_sponsor"
      },
      paymentStatusProvider: {
        type: DataTypes.BOOLEAN,
        field: "payment_status_provider"
      },
      orderId: {
        type: DataTypes.INTEGER,
        field: "order_id",
      },
      sponsorId: {
        type: DataTypes.INTEGER,
        field: "sponsor_id",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('offers');
  }
};