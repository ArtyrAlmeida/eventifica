import { EventInterface } from '../interfaces';
import Event from '../models/event';

export default class EventRepository {
    async create(event: EventInterface) {
        const createdEvent = await Event.create({...event});
        return createdEvent;
    }

    async find() {
        const result = await Event.findAll({
            attributes: ['id', 'name', 'date', 'city', 'position'],
        });
        return result;
    }

    async findOne(id: number) {
        const result = await Event.findByPk(id, {
            attributes: ['id', 'name', 'date', 'city', 'position'],
        });
        
        return result;
    }
}