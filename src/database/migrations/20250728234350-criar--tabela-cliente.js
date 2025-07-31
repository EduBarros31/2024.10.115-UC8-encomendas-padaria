'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.createTable('cliente', { 
       
         

            id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telefone: {
                type: Sequelize.STRING,
                allowNull: false,
               
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
               
            },
            senha: {
                type: Sequelize.STRING,
                allowNull: false,
               
            },


      });
      await queryInterface.addIndex("cliente", ["papel"]);
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('cliente');
     
  }
};
