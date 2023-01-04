const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('users', {
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
        field: "phone_number",
      },
      mobile: {
        type: DataTypes.STRING,
      },
      department: {
        type: DataTypes.STRING,
      },
      verificationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "verification_code",
      },
      emailChecked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "email_checked",
      },
      cashforceAdm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "cashforce_adm",
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
    await queryInterface.dropTable('users');
  },
};
