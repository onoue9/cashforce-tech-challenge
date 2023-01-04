'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('cnpjs', [
    {
      cnpj: '00000000000001',
      company_type: '2',
      created_at: '2020-10-29 21:20:33',
      updated_at: '2020-10-29 22:20:33',
    },
    {
      cnpj: '00000000000002',
      company_type: '1',
      created_at: '2020-10-29 21:20:33',
      updated_at: '2020-10-29 22:20:33',
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('cnpjs', null, {}),
}