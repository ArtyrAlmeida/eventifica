import { EventInterface } from '../interfaces';
import Event from '../models/event';

export default class EventRepository {
    async create(event: EventInterface) {
        const createdEvent = await Event.create({...event});
        
        return createdEvent;
    }

    async find() {
        const result = await Event.find();

        return result;
    }

    async findOne(id: string) {
        const result = await Event.findOne({ _id: id });
        
        return result;
    }
}