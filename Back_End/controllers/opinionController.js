import Opinion from '../models/opinionModel.js';

export const createOpinion = async (req, res) => {
    const { id_plat, username, rate, comment } = req.body;

    // Vérification des champs obligatoires
    if (!id_plat || !username || rate === undefined || !comment) {
        return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    }

    // Validation de la note (rate)
    if (rate < 0 || rate > 5) {
        return res.status(400).json({ message: 'La note doit être un entier entre 0 et 5' });
    }

    try {

        // Création de l'opinion
        const newOpinion = new Opinion({
            dishId: id_plat,
            username,
            rate,
            comment,
        });

        // Enregistrement dans la base de données
        await newOpinion.save();

        res.status(201).json({ message: 'Opinion créée', opinion: newOpinion });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'opinion', error: err });
    }
};

import mongoose from 'mongoose'; // Importer mongoose pour utiliser ObjectId

export const getOpinionsByDishId = async (req, res) => {
    const { id_plat } = req.params;

    try {
        // Convertir id_plat en ObjectId
        const dishId = mongoose.Types.ObjectId(id_plat); 

        // Récupérer les opinions associées
        const opinions = await Opinion.find({ dishId });

        res.json(opinions);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des opinions', error: err });
    }
};
;

export const getOpinionsByUsername = async (req, res) => {
    const { username } = req.params; // Récupère le username depuis les paramètres de l'URL

    try {
        // Récupérer les opinions de cet utilisateur
        const opinions = await Opinion.find({ username });

        if (opinions.length === 0) {
            return res.status(404).json({ message: 'Aucune opinion trouvée pour cet utilisateur' });
        }

        res.json(opinions);
    } catch (err) {
        console.error('Erreur:', err);
        res.status(500).json({ message: 'Erreur lors de la récupération des opinions', error: err });
    }
};

