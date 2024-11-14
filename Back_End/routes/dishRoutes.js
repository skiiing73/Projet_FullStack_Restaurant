import express from 'express';
import {
    createDish,
    getDishes,
    getDishesByID,
    getDishesByType,
    updateDish,
    deleteDish
} from '../controllers/dishController.js';

const router = express.Router();

// Route pour ajouter un plat
router.post('/create', createDish);

// Route pour récupérer tous les plats
router.get('/getAll', getDishes);

// Route pour récupérer un plat par ID
router.get('/getByID/:id', getDishesByID);

// Route pour récupérer tous les plats d'un type spécifique
router.get('/getByType/:type', getDishesByType);

// Route pour mettre à jour un plat par ID
router.put('/update/:id', updateDish);

// Route pour supprimer un plat par ID
router.delete('/delete/:id', deleteDish);

export default router;