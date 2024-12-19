import mongoose from 'mongoose';

// Définition du schéma pour le plat
const DishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    picture:{
        type:String,
        required:true,
    },
    price: {
        type: String, // Vous pouvez changer en Number si vous souhaitez effectuer des calculs
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

// Création du modèle
const Dish = mongoose.model('Dish', DishSchema, 'dish');

// Exportation du modèle
export default Dish;