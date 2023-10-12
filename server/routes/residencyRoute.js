import express from 'express';
const router = express.Router();
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js';
import jwtCheck from '../config/auth0Config.js';

router.post('/create',jwtCheck, createResidency);
router.get('/allresd', getAllResidencies);
router.get('/:id',getResidency);

export {router as residencyRoute}