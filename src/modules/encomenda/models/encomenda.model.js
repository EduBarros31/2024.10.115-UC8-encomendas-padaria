const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Encomenda = sequelize.define(
    'Encomenda', 
    {
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                isInt: { msg: 'O ID da encomenda deve ser um número inteiro.' },
            },
        },

        produto_nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'O nome do produto não pode estar vazio.' },
                len: {
                    args: [3, 20],
                    msg: 'O nome do produto deve ter entre 3 e 20 caracteres.',
                },
            },
        },
        produtoID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'O ID do produto deve ser um número inteiro.' },
            },
        
        },
        clienteID: {
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