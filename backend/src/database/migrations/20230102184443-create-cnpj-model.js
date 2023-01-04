const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cnpjs', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyType: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "company_type",
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
    await queryInterface.dropTable('cnpjs');
  }
};