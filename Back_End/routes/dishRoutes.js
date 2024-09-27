import express from 'express';
import { createDish, getDishes, updateDish, deleteDish } from '../controllers/dishController.js';

const router = express.Router();

// Route pour ajouter un plat
router.post('/', createDish);

// Route pour récupérer tous les plats
router.get('/', getDishes);

// Route pour mettre à jour un plat par ID
router.put('/:id', updateDish);

// Route pour supprimer un plat par ID
router.delete('/:id', deleteDish);

export default router;