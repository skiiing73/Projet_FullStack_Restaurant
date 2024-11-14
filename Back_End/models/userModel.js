import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Définition du schéma utilisateur
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Assure que les noms d'utilisateur sont uniques
    },
    password: {
        type: String,
        required: true,
    },
});

// Middleware Mongoose pour hacher le mot de passe avant de sauvegarder l'utilisateur
UserSchema.pre('save', async function (next) {
    // Vérifie si le mot de passe a été modifié ou si l'utilisateur est nouveau
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10); // Génère un salt
        this.password = await bcrypt.hash(this.password, salt); // Hache le mot de passe
        next(); // Continue avec la sauvegarde
    } catch (err) {
        return next(err); // Gère les erreurs
    }
});

// Méthode pour comparer le mot de passe lors de la connexion
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // Compare le mot de passe fourni avec le haché
};

// Création du modèle utilisateur
const User = mongoose.model('User', UserSchema, 'user');

// Exportation du modèle
export default User;