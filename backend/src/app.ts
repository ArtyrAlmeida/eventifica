import express, { Request, Response } from 'express';
import { eventsRouter } from './routes/routes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json('Running');
});

app.use('/events', eventsRouter);

export { app };
