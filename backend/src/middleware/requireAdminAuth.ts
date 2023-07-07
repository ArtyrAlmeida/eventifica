import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import UserRepository from '../repository/UserRepository';

const requireAdminAuth: RequestHandler = async (req, res, next) => {
    const token = req.headers['authorization'];
    const { email } = req.body;
    const user = await (new UserRepository()).findByEmail(email as string);

    if (!user || user.role != 'ADMIN') {
        return res.status(401).json({ error: 'O usuário não é admin' });
    }

    if(!token){
        return res.status(401).json({ error: 'O usuário não está autenticado' });
    }else{
/*         const tokenBody = token.slice(7) */
        jwt.verify(token, process.env.SECRET as string, (err,decoded) => {
            if(err){
                return res.status(401).json({err, error: 'O usuário não está autenticado' });
            }

            next();
        });
    }
}

export default requireAdminAuth;