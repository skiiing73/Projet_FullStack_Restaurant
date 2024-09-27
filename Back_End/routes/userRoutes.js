import { Router } from 'express';
import { createUser, comparePassword, updateUser } from '../controllers/userController.js';

const router = Router();

// Route pour créer un utilisateur
router.post('/createUser', async (req, res) => {
    const { username, password } = req.body;

    console.log(`Tentative de création de l'utilisateur : ${username}`);

    try {
        const user = await createUser(username, password);
        res.status(201).json({ message: 'Utilisateur créé', user });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: err });
    }
});

// Route pour se connecter
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const isMatch = await comparePassword(username, password);
    if (isMatch) {
        res.status(200).json({ message: 'Connexion réussie' });
    } else {
        res.status(401).json({ message: 'Utilisateur ou mot de passe incorrect' });
    }
});

// Route pour mettre à jour un utilisateur
//
// A update pour ajouter de la sécurité
//
router.put('/updateUser/:username', async (req, res) => {
    const { username } = req.params;
    const newData = req.body;

    try {
        await updateUser(username, newData);
        res.status(200).json({ message: 'Utilisateur mis à jour' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: err });
    }
});

export default router;