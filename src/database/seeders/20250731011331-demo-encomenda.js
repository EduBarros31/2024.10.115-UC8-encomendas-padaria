'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('encomenda', [
        { 
        produto_nome: 'Produto A',
        produtoID: 1,
        clienteID: 1,
        quantidade: 2,
        data_entrega: new Date('2025-08-01'),
        status: 'pendente'
      }, {
        produto_nome: 'Produto B',
        produtoID: 2,
        clienteID: 1,
        quantidade: 1,
        data_entrega: new Date('2025-08-02'),
        status: 'entregue'
     },
      {
        produto_nome: 'Produto C',
        produtoID: 3,
        clienteID: 2,
        quantidade: 3,
        data_entrega: new Date('2025-08-03'),
        status: 'cancelada'
      }
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('encomenda', null, {});
     
  }
};
