import mongoose from 'mongoose';

// Définition du schéma utilisateur
const CommandSchema = new mongoose.Schema({
    list_id_dish: {
        type: Array,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

// Création du modèle Command
const Command = mongoose.model('Order', CommandSchema, 'order');

// Exportation du modèle
export default Command;