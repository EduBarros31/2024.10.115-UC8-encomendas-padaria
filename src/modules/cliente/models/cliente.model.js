const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB")

const Cliente = sequelize.define(
    'cliente',
     {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
        
     },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^\d{10,11}$/,
                    msg: "O telefone deve conter 10 ou 11 dígitos numéricos."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: { msg: "Email inválido" },
            },
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/,
                    msg: 'A senha deve ter no mínimo 6 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
                },
            },
        },
    },
    {
        tableName: "cliente",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }

);


module.exports = Cliente;

























