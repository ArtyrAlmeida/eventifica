import { Router } from 'express';
import EventController from '../controllers/EventController';

const eventsRouter = Router();
const eventController = new EventController();

eventsRouter.get('/', eventController.find);
eventsRouter.get('/:id', eventController.findOne);
eventsRouter.post('/', eventController.create);
eventsRouter.patch('/:id');
eventsRouter.delete('/:id');

export { eventsRouter };