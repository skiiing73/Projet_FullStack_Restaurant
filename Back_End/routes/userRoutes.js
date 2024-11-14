import { Router } from 'express';
import { createUser, login, updateUser, getUser } from '../controllers/userController.js';

const router = Router();

// Route pour créer un utilisateur
router.post('/createUser', createUser);

// Route pour se connecter
router.post('/login', login);

// Route pour mettre à jour un utilisateur
router.put('/updateUser/:username', updateUser);

// Route pour obtenir un utilisateur par son nom d'utilisateur
router.get('/getUser', getUser);

export default router;