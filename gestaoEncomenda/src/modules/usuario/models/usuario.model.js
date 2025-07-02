const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Usuario = sequelize.define(
  "Usuario",
  {  
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "Email inválido" },
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
          is: {
            args: /^\d{6,}$/,
            msg: "A senha deve ter no mínimo 6 caracteres, somente numeros.",
          },
        },
      },
    },
);



module.exports = Usuario;
