import { Router } from 'express';
import EventController from '../controllers/EventController';

const eventsRouter = Router();
const eventController = new EventController();

eventsRouter.get('/', eventController.find);
eventsRouter.get('/:id', eventController.findOne);
eventsRouter.get('/search/:text', eventController.findByText);
eventsRouter.post('/', eventController.create);
eventsRouter.patch('/:id', eventController.updateOne);
eventsRouter.delete('/:id', eventController.deleteOne);

export { eventsRouter };