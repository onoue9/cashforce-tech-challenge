'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('orders', [
    {
      order_nf_id: '1605181324132',
      order_number: '18153',
      order_path: null,
      order_file_name: null,
      order_original_name: null,
      emission_date: '2020-10-30T11:00:00-03:00',
      pdf_file: null,
      emited_to: '22843980000127',
      n_nf: '18153',
      c_t_e: '',
      value: '198450',
      created_at: '2020-10-30 17:54:18',
      updated_at: '2020-10-30 17:54:18',
      cnpj_id: 1,
      user_id: 1,
      buyer_id: 1,
      provider_id: 1,
      order_status_buyer: '0',
      order_status_provider: '0',
      delivery_receipt: null,
      cargo_packing_list: null,
      delivery_ctrc: null,
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('orders', null, {}),
}