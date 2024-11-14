import mongoose from 'mongoose';

// Définition du schéma utilisateur
const CommandSchema = new mongoose.Schema({
    list: {
        type: Array,
        required: true,
    },
    id_User: {
        type: String,
        required: true,
    },
    etat: {
        type: String,
        required: true,
    }
});

// Création du modèle utilisateur
const Command = mongoose.model('Command', CommandSchema, 'command');

// Exportation du modèle
export default Command;