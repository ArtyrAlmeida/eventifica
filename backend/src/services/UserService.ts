import { UserInterface, LoginInfo, SubscribeOptions } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import RequestError from '../exceptions/RequestError';
import UserRepository from '../repository/UserRepository';

export default class UserService {
    private repository = new UserRepository();

    register = async (user: UserInterface) => {
        const { email, role, password } = user;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);

        const response = await this.repository.create({ ...user, password: hash });

        const id = response._id!;

        const token = await this.signToken(id);

        return { email, token, role, id };
    };

    login = async (user: LoginInfo) => {
        const dbUser = await this.repository.findByEmail(user.email);

        if(!dbUser) {
            throw new RequestError('O usuário não existe', 400)
        }

        const match = await bcrypt.compare(user.password, dbUser.password);

        if(match) {
            const { email, role, _id } = dbUser;
            const token = await this.signToken(dbUser._id!);
            return { email, role, token, id: _id.toString()};
        }
        
        throw new RequestError('Credenciais erradas', 401);
    }

    subscribe = async (subscribeOptions: SubscribeOptions) => {
        try {
            await this.repository.subscribe(subscribeOptions);
            console.log(`Usuário ${subscribeOptions.userId} se inscreveu em ${subscribeOptions.eventId}`);
        } catch (error) {
            console.log(error);
            throw new RequestError('Não foi possível se inscrever', 400);
        }
    }

    signToken = async (id: string) => {
        return jwt.sign({id}, process.env.SECRET as string, {expiresIn: '3d'})
    }
}