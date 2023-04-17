import express, { Request, Response } from 'express';
import { eventsRouter } from './routes/routes';
import connectDb from './database/database';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json('Running');
});

app.use('/events', eventsRouter);

connectDb();

export { app };
