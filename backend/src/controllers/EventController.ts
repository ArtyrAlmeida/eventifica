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

    find = async (req: Request, res: Response) => {
        try {
            const response = await this.service.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ error: 'Não foi possível completar sua requisição' });
            console.log(error);
        }
    };

    findOne = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const response = await this.service.findOne(+id);
            res.status(200).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };
}