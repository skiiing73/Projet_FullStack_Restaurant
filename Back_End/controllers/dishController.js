import Dish from '../models/dishModel.js';

// Fonction pour ajouter un plat
export const createDish = async (req, res) => {
    const { name, price, description, type } = req.body;

    try {
        const newDish = new Dish({ name, price, description, type });
        await newDish.save();
        res.status(201).json({ message: 'Plat créé', dish: newDish });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création du plat', error: err });
    }
};

// Fonction pour récupérer tous les plats
export const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des plats', error: err });
    }
};

// Fonction pour mettre à jour un plat
export const updateDish = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, type } = req.body;

    try {
        const updatedDish = await Dish.findByIdAndUpdate(id, { name, price, description, type }, { new: true });
        if (!updatedDish) {
            return res.status(404).json({ message: 'Plat non trouvé' });
        }
        res.json({ message: 'Plat mis à jour', dish: updatedDish });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du plat', error: err });
    }
};

// Fonction pour supprimer un plat
export const deleteDish = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDish = await Dish.findByIdAndDelete(id);
        if (!deletedDish) {
            return res.status(404).json({ message: 'Plat non trouvé' });
        }
        res.json({ message: 'Plat supprimé' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du plat', error: err });
    }
};