import { Router } from 'express';
import EventController from '../controllers/EventController';

const eventsRouter = Router();
const eventController = new EventController();

eventsRouter.get('/');
eventsRouter.get('/:id');
eventsRouter.post('/', eventController.create);
eventsRouter.patch('/:id');
eventsRouter.delete('/:id');

export { eventsRouter };