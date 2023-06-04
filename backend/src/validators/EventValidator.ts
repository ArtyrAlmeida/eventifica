import mongoose from 'mongoose';
import { EventInterface } from '../interfaces';
import EventRepository from '../repository/EventRepository';

export default class EventValidator {
    static hasAllProperties(event: EventInterface) {
        console.log(event);
        return true;
    }

    static async eventAlreadyExists(event: EventInterface) {
        const repository = new EventRepository();
        console.log(repository);
        //const hasEvent = await repository.find(event) ? true : false;
        return !event;
    }

    static isValidId(id: string) {
        return mongoose.Types.ObjectId.isValid(id);
    }
}