const sequelize = require('../config/sequelize');

const { DataTypes } = require('sequelize');

const Units = sequelize.define('units', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    
    address: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    cityState: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    owner: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    ownerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    titleColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    bodyTextColor: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Units;