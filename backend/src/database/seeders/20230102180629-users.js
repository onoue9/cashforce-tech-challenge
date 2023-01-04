'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      name: 'ALLAN SOUZE',
      email: 'allan@cashforce.com.br',
      phone_number: null,
      mobile: null,
      department: null,
      verification_code: '',
      email_checked: 1,
      created_at: '2020-10-01 21:31:37',
      updated_at: '2020-10-01 22:41:23',
      cashforce_adm: 1,
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
}