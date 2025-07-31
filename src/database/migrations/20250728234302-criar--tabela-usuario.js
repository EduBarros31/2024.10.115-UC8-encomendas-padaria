"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        onUpdate: "CASCADE",
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      papel: {
        type: Sequelize.ENUM("Atendente", "gerente", "admin"),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("usuario", ["email"]);
    await queryInterface.addIndex("usuario", ["papel"]);
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  },
};
