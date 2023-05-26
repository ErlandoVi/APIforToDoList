'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [
    {
      title: 'Jobdesk',
      desc: 'Mengerjakan TPA 5',
      isCompleated: false,
      deadline : '2023-05-26',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Jobdesk',
      desc: 'Membuat web service',
      isCompleated: false,
      deadline : '2023-05-26',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
