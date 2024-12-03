import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// Fonction pour créer un nouvel utilisateur
export async function createUser(req, res) {
    const { username, email, phone, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe
        const newUser = new User({ username, password: hashedPassword, email, phone });
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: error.message });
    }
}

// Fonction pour se connecter
export async function login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Le nom d\'utilisateur et le mot de passe sont obligatoires' });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).json({ message: 'Connexion réussie' });
        } else {
            res.status(401).json({ message: 'Mot de passe incorrect' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la comparaison du mot de passe', error: error.message });
    }
}

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import validator from 'validator';

// Fonction pour mettre à jour un utilisateur
export async function updateUser(req, res) {
    const { username } = req.params;
    const newData = req.body;

    try {
        // Normalisation du numéro de téléphone, si présent
        if (newData.phone) {
            const phoneNumber = parsePhoneNumberFromString(newData.phone, 'FR'); // 'FR' pour la France, adapte selon le pays
            if (phoneNumber && phoneNumber.isValid()) {
                newData.phone = phoneNumber.format('E.164'); // Formate le numéro en E.164, un format international standard
            } else {
                return res.status(400).json({ message: 'Numéro de téléphone invalide' });
            }
        }

        // Normalisation de l'email, si présent
        if (newData.email) {
            // Mettre l'email en minuscule pour la normalisation
            newData.email = newData.email.toLowerCase();
            // Valider l'email
            if (!validator.isEmail(newData.email)) {
                return res.status(400).json({ message: 'Email invalide' });
            }
        }

        // Hachage du mot de passe, si présent
        if (newData.password) {
            newData.password = await bcrypt.hash(newData.password, 10); // Hachage du nouveau mot de passe
        }

        const result = await User.updateOne({ username }, { $set: newData });
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé ou aucune mise à jour effectuée' });
        }

        res.status(200).json({ message: 'Utilisateur mis à jour' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: error.message });
    }
}

// Fonction pour rechercher un utilisateur par nom d'utilisateur
export async function getUser(req, res) {
    const { username } = req.params;
    try {
        const user = await User.findOne({username});
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la recherche de l\'utilisateur', error: error.message });
    }
}