const sequelize = require('../config/sequelize');

const { DataTypes } = require('sequelize');

const Plans = sequelize.define('Plans', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    cardImage: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    
    titleCard: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    titleColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    planValue: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    buttonColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    textButtonColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    iconButtonColor: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
},  {
    tableName: 'plans',
    timestamps: false,
});

module.exports = Plans;