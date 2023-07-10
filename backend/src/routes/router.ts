import { Router } from 'express';
import EventController from '../controllers/EventController';
import requireAdminAuth from '../middleware/requireAdminAuth';
import { UserController } from '../controllers/UserController';
import requireBasicAuth from '../middleware/requireBasicAuth';

const eventsRouter = Router();
const eventController = new EventController();

eventsRouter.get('/', eventController.find);
eventsRouter.get('/:id', eventController.findOne);
eventsRouter.get('/search/:text', eventController.findByText);
eventsRouter.post('/', requireAdminAuth, eventController.create);
eventsRouter.patch('/:id', requireAdminAuth, eventController.updateOne);
eventsRouter.delete('/:id', requireAdminAuth, eventController.deleteOne);

const userRouter = Router();
const userController = new UserController();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);
userRouter.post('/subscribe', userController.subscribe);

export { eventsRouter, userRouter };