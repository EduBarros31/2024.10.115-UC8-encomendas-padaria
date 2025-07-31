
    'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaCriptografada = await bcrypt.hash('Admin#123!', 6); // mesma senha para os 3

    await queryInterface.bulkInsert('usuario', [
       {
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: senhaCriptografada,
        papel: 'admin',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Maria Souza',
        email: 'maria@email.com',
        senha: senhaCriptografada,
        papel: 'gerente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Carlos Lima',
        email: 'carlos@email.com',
        senha: senhaCriptografada,
        papel: 'Atendente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ],  
    {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('usuario', null, {});
  }
};

    

   
  