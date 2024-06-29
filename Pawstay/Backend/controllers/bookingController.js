const Booking = require('../models/Booking');
const User = require('../models/User');
const Pet = require('../models/Pet');

exports.createBooking = async (req, res) => {
    const { user_id, pet_id, start_date, end_date, special_requirements } = req.body;
    try {
        const newBooking = await Booking.create({
            user_id,
            pet_id,
            start_date,
            end_date,
            special_requirements
        });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                { model: User, attributes: ['username', 'email'] },
                { model: Pet, attributes: ['pet_name', 'pet_breed', 'pet_age'] }
            ]
        });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBookingById = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findByPk(id, {
            include: [
                { model: User, attributes: ['username', 'email'] },
                { model: Pet, attributes: ['pet_name', 'pet_breed', 'pet_age'] }
            ]
        });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBooking = async (req, res) => {
    const { id } = req.params;
    const { user_id, pet_id, start_date, end_date, special_requirements } = req.body;
    try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        await booking.update({ user_id, pet_id, start_date, end_date, special_requirements });
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        await booking.destroy();
        res.status(204).json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
