const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('providers', {
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
        field: "trading_name",
      },
      cashforceTax: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "cashforce_tax",
      },
      responsibleName: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "responsible_name",
      },
      responsibleEmail: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "responsible_email",
      },
      responsiblePosition: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "responsible_position",
      },
      responsiblePhone: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "responsible_phone",
      },
      responsibleMobile: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "responsible_mobile",
      },
      website: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      postalCode: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "postal_code",
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
        field: "bank_agency",
      },
      account: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      documents: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "phone_number",
      },
      situation: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      situationDate: {
        type: DataTypes.DATE,
        defaultValue: null,
        field: "situation_date",
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        field: "cnpj_id",
      },
      email: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('providers');
  },
};
