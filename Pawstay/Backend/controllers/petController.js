const Pet = require('../models/Pet');
const User = require('../models/User');

exports.createPet = async (req, res) => {
    const { user_id, pet_name, pet_breed, pet_age, pet_medical_history } = req.body;
    try {
        const newPet = await Pet.create({
            user_id,
            pet_name,
            pet_breed,
            pet_age,
            pet_medical_history
        });
        res.status(201).json(newPet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllPets = async (req, res) => {
    try {
        const pets = await Pet.findAll({
            include: [
                { model: User, attributes: ['username', 'email'] }
            ]
        });
        res.status(200).json(pets);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPetById = async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await Pet.findByPk(id, {
            include: [
                { model: User, attributes: ['username', 'email'] }
            ]
        });
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.status(200).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePet = async (req, res) => {
    const { id } = req.params;
    const { user_id, pet_name, pet_breed, pet_age, pet_medical_history } = req.body;
    try {
        const pet = await Pet.findByPk(id);
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        await pet.update({ user_id, pet_name, pet_breed, pet_age, pet_medical_history });
        res.status(200).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePet = async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await Pet.findByPk(id);
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        await pet.destroy();
        res.status(204).json({ message: 'Pet deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
