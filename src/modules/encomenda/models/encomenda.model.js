const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Encomenda = sequelize.define(
    'Encomenda', 
    {
        usuarioID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[A-Za-z]\d{4}$/,
                    msg: 'O ID do usuário deve conter 1 letra maiúscula seguida de 4 dígitos numéricos.',
                },
            },
        },

        produto_nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        produto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            validate: {
                isInt: { msg: 'O ID do produto deve ser um número inteiro.' },
            },
        
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'O ID do cliente deve ser um número inteiro.' },
            },
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'A quantidade deve ser um número inteiro.' },
                min: {
                    args: [1],
                    msg: 'A quantidade deve ser pelo menos 1.',
                },
            },
        },
        data_entrega: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: { msg: 'A data de entrega deve ser uma data válida.' },
            },
        },
        status: {
            type: DataTypes.ENUM('pendente', 'entregue', 'cancelada'),
            allowNull: false,
            defaultValue: 'pendente',
        },
    }
    ,
    {
        tableName: 'encomendas',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em',
    }
);

module.exports = Encomenda;