import EventService from '../services/EventService';
import RequestError from '../exceptions/RequestError';
import { Request, Response } from 'express';

export default class EventController {
    private service = new EventService();
    
    create = async (req: Request, res: Response) => {
        const event = req.body;
        try {
            const response = await this.service.create(event);
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
            const response = await this.service.findOne(id);
            res.status(200).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };

    findByText = async (req: Request, res: Response) => {
        const { text } = req.params;
        
        try {
            const response = await this.service.findByText(text);
            res.status(200).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };

    updateOne = async (req: Request, res: Response) => {
        const { id } = req.params;
        const payload = req.body;
        
        try {
            const response = await this.service.updateOne(id, payload);
            res.status(200).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };

    deleteOne = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            const response = await this.service.deleteOne(id);
            res.status(200).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };

    findRecommendations = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const response = await this.service.findRecommendations(id);
            res.status(200).json(response);
        } catch (error) {
            console.log('Tentou enviar')
            console.log(error);
            
            //const requestError = error as RequestError;
            //res.status(requestError.code || 400).json({ error: requestError.message });
        }
    }
}