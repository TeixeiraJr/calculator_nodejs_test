'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('calculator', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       AllowNull: false,
          },
      calculation: {
         type: Sequelize.STRING,
         AllowNull: false,
      },
      user: {
        type: Sequelize.STRING,
        AllowNull: false,
        unique: true,
      },
      result: {
        type: Sequelize.DECIMAL,
        AllowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};