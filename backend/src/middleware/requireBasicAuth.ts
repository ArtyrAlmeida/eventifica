import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const requireBasicAuth: RequestHandler = (req, res, next) => {
    const token = req.headers['authorization'];
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

export default requireBasicAuth;