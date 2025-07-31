'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('cliente', [
        {
        id: 1,
        nome: 'João Silva',
        telefone: '11987654321',
        email: 'joazin@gmail.com',
        senha: 'Senha123!'
        },
        {
        id: 2,
        nome: 'Maria Souza',
        telefone: '11976543210',
        email: 'maria@gmail.com',
        senha: 'Senha123!'
        },
        {
        id: 3,
        nome: 'Carlos Lima',
        telefone: '11965432109',  
        email: 'carlin@gmail.com',
        senha: 'Senha123!'
        }
      ], 
      {});
  
  },

  async down (queryInterface, Sequelize) {
  
     
      await queryInterface.bulkDelete('cliente', {id : [1, 2, 3]});
     
  }
};
