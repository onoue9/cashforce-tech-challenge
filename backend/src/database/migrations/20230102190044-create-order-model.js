const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orderNfId: {
        type: DataTypes.STRING,
        field: "order_nf_id",
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "order_number",
      },
      orderPath: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "order_path",
      },
      orderFileName: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "order_file_name",
      },
      orderOriginalName: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "order_original_name",
      },
      emissionDate: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "emission_date",
      },
      pdfFile: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "pdf_file",
      },
      emitedTo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "emited_to",
      },
      nNf: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "n_nf",
      },
      CTE: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "c_t_e",
      },
      value: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        field: "cnpj_id",
      },
      userId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        field: "user_id",
      },
      buyerId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        field: "buyer_id",
      },
      providerId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        field: "provider_id",
      },
      orderStatusBuyer: {
        type: DataTypes.STRING,
        defaultValue: '0',
        field: "order_status_buyer",
      },
      orderStatusProvider: {
        type: DataTypes.STRING,
        defaultValue: '0',
        field: "order_status_provider",
      },
      deliveryReceipt: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "delivery_receipt",
      },
      cargoPackingList: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "cargo_packing_list",
      },
      deliveryCtrc: {
        type: DataTypes.STRING,
        defaultValue: null,
        field: "delivery_ctrc",
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
    await queryInterface.dropTable('orders');
  }
};