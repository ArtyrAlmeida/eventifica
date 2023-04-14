import { EventInterface } from '../interfaces';
import { Event } from '../models/eventModel';

export default class EventRepository {
    async create(event: EventInterface) {
        const createdEvent = await Event.create({ ...event });
        return createdEvent;
    }

    async find(event: EventInterface){
        const foundEvent = await Event.findByPk(event.id);
        return foundEvent;
    }
}