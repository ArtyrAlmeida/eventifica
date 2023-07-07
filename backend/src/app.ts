import express, { Request, Response } from 'express';
import { eventsRouter, userRouter } from './routes/router';
import connectDb from './database/database';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json('Running');
});

app.use('/events', eventsRouter);
app.use('/user', userRouter);

connectDb();

export { app };
