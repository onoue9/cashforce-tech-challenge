const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tradingName: {
        type: DataTypes.STRING,
        field: "trading_name",
      },
      cashforceTax: {
        type: DataTypes.STRING,
        field: "cashforce_tax",
      },
      responsibleName: {
        type: DataTypes.STRING,
        field: "responsible_name",
      },
      responsibleEmail: {
        type: DataTypes.STRING,
        field: "responsible_email",
      },
      responsiblePosition: {
        type: DataTypes.STRING,
        field: "responsible_position",
      },
      responsiblePhone: {
        type: DataTypes.STRING,
        field: "responsible_phone",
      },
      responsibleMobile: {
        type: DataTypes.STRING,
        field: "responsible_mobile",
      },
      website: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
        field: "postal_code",
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
        field: "phone_number",
      },
      situation: {
        type: DataTypes.STRING,
      },
      situationDate: {
        type: DataTypes.DATE,
        field: "situation_date",
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        field: "cnpj_id",
      },
      confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('buyers');
  }
};