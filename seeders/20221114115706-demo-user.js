'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'example',
        password: '1234',
        email : "example@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'erlandovi',
        password: '12345',
        email : "erlandovi@gmail.com",
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
