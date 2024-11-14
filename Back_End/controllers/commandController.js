import Dish from '../models/commandModel.js';

// // Fonction pour ajouter un plat
// export const createDish = async (req, res) => {
//     const { name, price, description, type, picture } = req.body;

//     // Vérification des champs obligatoires
//     if (!name || !price || !description || !type) {
//         return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
//     }

//     try {
//         const newDish = new Dish({ name, price, description, type, picture });
//         await newDish.save();
//         res.status(201).json({ message: 'Plat créé', dish: newDish });
//     } catch (err) {
//         res.status(500).json({ message: 'Erreur lors de la création du plat', error: err });
//     }
// };

// // Fonction pour récupérer tous les plats
// export const getDishes = async (req, res) => {
//     try {
//         const dishes = await Dish.find();

//         res.json(dishes);
//     } catch (err) {
//         res.status(500).json({ message: 'Erreur lors de la récupération des plats', error: err });
//     }
// };

// // Fonction pour récupérer un plat par ID
// export const getDishesByID = async (req, res) => {
//     const { id } = req.params; // Récupère l'ID de la route

//     try {
//         // Recherche du plat avec l'ID
//         const dish = await Dish.findById(id);

//         // Si aucun plat n'est trouvé
//         if (!dish) {
//             return res.status(404).json({ message: 'Plat non trouvé' });
//         }

//         // Renvoie le plat trouvé
//         res.json(dish);
//     } catch (err) {
//         // Gère les erreurs possibles
//         res.status(500).json({ message: 'Erreur lors de la récupération des plats', error: err.message });
//     }
// };

// // Fonction pour récupérer tous les plats d'un type spécifique
// export const getDishesByType = async (req, res) => {
//     const { type } = req.params; // Récupère le type des plats depuis les paramètres de la route

//     try {
//         // Recherche des plats en fonction du type
//         const dishes = await Dish.find({ type });

//         // Si aucun plat n'est trouvé pour ce type
//         if (dishes.length === 0) {
//             return res.status(404).json({ message: 'Aucun plat trouvé pour ce type' });
//         }

//         // Renvoie les plats trouvés
//         res.json(dishes);
//     } catch (err) {
//         // Gère les erreurs possibles
//         res.status(500).json({ message: 'Erreur lors de la récupération des plats', error: err.message });
//     }
// };



// // Fonction pour mettre à jour un plat
// export const updateDish = async (req, res) => {
//     const { id } = req.params;
//     const { name, price, description, type, picture } = req.body;

//     // Vérification des champs obligatoires
//     if (!name || !price || !description || !type) {
//         return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
//     }

//     try {
//         const updatedDish = await Dish.findByIdAndUpdate(
//             id,
//             { name, price, description, type, picture },
//             { new: true }
//         );
//         if (!updatedDish) {
//             return res.status(404).json({ message: 'Plat non trouvé' });
//         }
//         res.json({ message: 'Plat mis à jour', dish: updatedDish });
//     } catch (err) {
//         res.status(500).json({ message: 'Erreur lors de la mise à jour du plat', error: err });
//     }
// };

// // Fonction pour supprimer un plat
// export const deleteDish = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedDish = await Dish.findByIdAndDelete(id);
//         if (!deletedDish) {
//             return res.status(404).json({ message: 'Plat non trouvé' });
//         }
//         res.json({ message: 'Plat supprimé' });
//     } catch (err) {
//         res.status(500).json({ message: 'Erreur lors de la suppression du plat', error: err });
//     }
// };