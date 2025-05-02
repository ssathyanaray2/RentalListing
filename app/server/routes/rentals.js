import express from 'express';
import rentalsController from '../controllers/rentalsController.js';
const router = express.Router();

router
.get('/', rentalsController.getRentals)
.post('/', rentalsController.createRental);

export default router;