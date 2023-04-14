import { Router } from 'express';

const events = Router();

events.get('/');
events.get('/:id');
events.post('/create-event');
events.patch('/update-event/:id');
events.delete('/delete-event/:id');

export { events };