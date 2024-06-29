const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Pet = require('./Pet');

const Booking = sequelize.define('Booking', {
    booking_id: {
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
    pet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Pet,
            key: 'pet_id'
        }
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    special_requirements: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

User.hasMany(Booking, { foreignKey: 'user_id' });
Pet.hasMany(Booking, { foreignKey: 'pet_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });
Booking.belongsTo(Pet, { foreignKey: 'pet_id' });

module.exports = Booking;
