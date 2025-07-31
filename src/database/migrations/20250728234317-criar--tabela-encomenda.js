"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("encomenda", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      produto_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      produtoID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      clienteID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_entrega: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("pendente", "entregue", "cancelada"),
        allowNull: false,
        defaultValue: "pendente",
      },
    });
    await queryInterface.addIndex("usuario", ["papel"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("encomenda");
  },
};
