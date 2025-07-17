const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB")

const Cliente = sequelize.define(
    'cliente',
     {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                is: {
                     args: /^[A-Za-z]\d{4}$/,
                    msg: "Só é possível inserir 1 letra maiuscula e 4 digitos númericos"
                }
            }
        },
        telefone: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: {msg: "Email inválido"},
            },
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    msg: "A senha deve ter 6 numeros"
            }
        }
     },
       papel: {
    },
},
    {
        tableName: "cliente",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
  
);


module.exports = Cliente;

























)