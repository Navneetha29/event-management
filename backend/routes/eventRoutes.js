import express from 'express';
import { getEvents, getEventById, createEvent } from '../controllers/eventController.js';
import { protect, organizer } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getEvents)
    .post(protect, organizer, createEvent);

router.route('/:id')
    .get(getEventById);

export default router;
