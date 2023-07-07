import { Request, Response } from 'express';
import RequestError from '../exceptions/RequestError';

export class UserController {
    private service = new UserService();
    
    create = async (req: Request, res: Response) => {
        const user = req.body;
        try {
            const response = await this.service.create(user);
            res.status(201).json(response);
        } catch (error) {
            const requestError = error as RequestError;
            res.status(requestError.code || 400).json({ error: requestError.message });
        }
    };
}