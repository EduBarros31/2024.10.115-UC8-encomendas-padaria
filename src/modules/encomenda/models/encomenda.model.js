const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Encomenda = sequelize.define(
    'Encomenda', 
    {
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
        cliente_nome: {
            type: DataTypes.STRING,
            allowNull: false,
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