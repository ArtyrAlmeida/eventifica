import { Request, Response } from 'express';
import RequestError from '../exceptions/RequestError';
import UserService from '../services/UserService';

export class UserController {
    private service = new UserService();
    
    register = async (req: Request, res: Response) => {
        const user = req.body;
        try {
            const response = await this.service.register(user);
            res.status(201).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };

    login = async (req: Request, res: Response) => {
        const user = req.body;
        try {
            const response = await this.service.login(user);
            res.status(200).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };

    subscribe = async (req: Request, res: Response) => {
        const subscribeOptions = req.body;
        try {
            await this.service.subscribe(subscribeOptions);
            res.status(200).send();
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    }
}