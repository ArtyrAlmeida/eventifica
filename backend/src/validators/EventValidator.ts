import { EventInterface } from '../interfaces';
import EventRepository from '../repository/eventRepository';

export default class EventValidator {
    static hasAllProperties(event: EventInterface) {
        console.log(event);
        return true;
    }

    static async eventAlreadyExists(event: EventInterface) {
        const repository = new EventRepository();
        const hasEvent = await repository.find(event) ? true : false;
        return hasEvent;
    }
}