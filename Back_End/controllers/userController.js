import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// Fonction pour créer un nouvel utilisateur
export async function createUser(username, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe
        const newUser = new User({ username, password: hashedPassword });
        return await newUser.save();
    } catch (error) {
        throw new Error('Erreur lors de la création de l\'utilisateur: ' + error.message);
    }
}

// Fonction pour trouver un utilisateur par son nom d'utilisateur
export async function findUserByUsername(username) {
    try {
        return await User.findOne({ username });
    } catch (error) {
        throw new Error('Erreur lors de la recherche de l\'utilisateur: ' + error.message);
    }
}

// Fonction pour mettre à jour un utilisateur
export async function updateUser(username, newData) {
    try {
        if (newData.password) {
            newData.password = await bcrypt.hash(newData.password, 10); // Hachage du nouveau mot de passe si fourni
        }
        return await User.updateOne({ username }, { $set: newData });
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour de l\'utilisateur: ' + error.message);
    }
}

// Fonction pour comparer le mot de passe
export async function comparePassword(username, password) {
    try {
        const user = await findUserByUsername(username);
        if (user) {
            return await bcrypt.compare(password, user.password); // Compare le mot de passe
        }
        return false; // L'utilisateur n'existe pas
    } catch (error) {
        throw new Error('Erreur lors de la comparaison du mot de passe: ' + error.message);
    }
}