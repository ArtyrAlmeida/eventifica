import { EventInterface } from '../interfaces';
import EventValidator from '../validators/EventValidator';
import RequestError from '../exceptions/RequestError';

export default class EventService {

    async create(event: EventInterface) {
        if (!EventValidator.hasAllProperties(event)) {
            throw new RequestError('O evento não possui todas as informações necessárias', 400);
        }
        if(await EventValidator.eventAlreadyExists(event)) {
            throw new RequestError('Esse evento já existe', 422);
        }
    }   
}