import express from 'express';
import { createDish, getDishes, updateDish, deleteDish } from '../controllers/dishController.js';

const router = express.Router();

// Route pour ajouter un plat
router.post('/createDish', createDish);

// Route pour récupérer tous les plats
router.get('/getDishes', getDishes);

// Route pour mettre à jour un plat par ID
router.put('/updateDish/:id', updateDish);

// Route pour supprimer un plat par ID
router.delete('/deleteDish/:id', deleteDish);

export default router;