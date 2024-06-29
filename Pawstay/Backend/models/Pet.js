const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Pet = sequelize.define('Pet', {
    pet_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    pet_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    pet_breed: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    pet_age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pet_medical_history: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

User.hasMany(Pet, { foreignKey: 'user_id' });
Pet.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Pet;
