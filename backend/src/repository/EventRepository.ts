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

    async findByText(text: string) {
        const result = await Event.find({ $text: { $search: text } });

        return result;
    }

    async updateOne(id: string, payload: object) {
        const result = await Event.updateOne({ _id: id }, { $set: payload });

        return result;
    }

    async deleteOne(id: string) {
        const result = await Event.deleteOne({ _id: id });

        return result;
    }
}