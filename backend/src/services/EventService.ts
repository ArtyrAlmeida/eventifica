import { EventInterface } from '../interfaces';
import EventValidator from '../validators/EventValidator';
import RequestError from '../exceptions/RequestError';
import EventRepository from '../repository/EventRepository';

export default class EventService {
    private repository = new EventRepository();

    create = async (event: EventInterface) => {
        if (!EventValidator.hasAllProperties(event)) {
            throw new RequestError('O evento não possui todas as informações necessárias', 400);
        }
        if(await EventValidator.eventAlreadyExists(event)) {
            throw new RequestError('Esse evento já existe', 422);
        }

        const response = await this.repository.create(event);

        return response;
    };

    find = async () => {
        const response = await this.repository.find();

        return response;
    };

    findOne = async (id: number) => {
        const response = await this.repository.findOne(id);

        return response;
    };
}