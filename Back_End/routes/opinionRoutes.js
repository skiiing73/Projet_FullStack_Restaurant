import express from 'express';
import {
    createOpinion,
    getOpinionsByDishId,
    getOpinionsByUsername
} from '../controllers/opinionController.js';

const router = express.Router();

router.post('/create', createOpinion);

router.get('/getByID/:id', getOpinionsByDishId);

router.get('/getByUsername/:username', getOpinionsByUsername);
export default router;