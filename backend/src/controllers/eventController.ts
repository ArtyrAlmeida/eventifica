import EventService from '../services/eventService';
import RequestError from '../exceptions/RequestError';
import { Request, Response } from 'express';

export default class EventController {
    private service = new EventService();

    create(req: Request, res: Response) {
        const vehicle = req.body;
        try {
            const response = this.service.create(vehicle);
            res.status(201).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 401).json({ error: requestError.message });
        }
    }
}