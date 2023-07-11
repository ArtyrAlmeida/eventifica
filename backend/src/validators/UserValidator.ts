import mongoose from 'mongoose';
import UserRepository from '../repository/UserRepository';
import { SubscribeOptions, UserInterface } from '../interfaces';

export default class UserValidator {
    static async isUserSubscribed(options: SubscribeOptions) {
        const { userId, eventId } = options;
        const repository = new UserRepository();
        const user = (await repository.findById(userId)) as UserInterface;
        
        return user.events && user.events.includes(eventId);
    }

    static isValidId(id: string) {
        return mongoose.Types.ObjectId.isValid(id);
    }
}