import mongoose from 'mongoose';

// Définition du schéma utilisateur
const CommandSchema = new mongoose.Schema({
    list_id_dish: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish', // Ref to Dish
        required: true,
    }],
    username: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
}, {
    versionKey: false, // Désactive le champ __v
});

// Création du modèle Command
const Command = mongoose.model('Order', CommandSchema, 'order');

// Exportation du modèle
export default Command;