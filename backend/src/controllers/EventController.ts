import EventService from '../services/EventService';
import RequestError from '../exceptions/RequestError';
import { Request, Response } from 'express';

export default class EventController {
    private service = new EventService();
    
    create = async (req: Request, res: Response) => {
        const vehicle = req.body;
        try {
            const response = await this.service.create(vehicle);
            res.status(201).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };
}