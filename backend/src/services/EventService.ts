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

    findOne = async (id: string) => {
        if (!EventValidator.isValidId(id)) {
            throw new RequestError('O id provido é inválido', 400);
        }
        const response = await this.repository.findOne(id);

        return response;
    };

    findByText = async (text: string) => {
        if (!text ) {
            throw new RequestError('Um texto deve ser providenciado para a pesquisa', 400);
        }
        const response = await this.repository.findByText(text);

        return response;
    }

    updateOne = async (id: string, payload: object) => {
        if (!EventValidator.isValidId(id)) {
            throw new RequestError('O id provido é inválido', 400);
        }

        const response = await this.repository.updateOne(id, payload);

        return response;
    }

    deleteOne = async (id:string) => {
        if (!EventValidator.isValidId(id)) {
            throw new RequestError('O id provido é inválido', 400);
        }

        const response = await this.repository.deleteOne(id);

        return response;
    }

    findRecommendations = async (userId: string) => {
        if (!EventValidator.isValidId(userId)) {
            throw new RequestError('O id provido é inválido', 400);
        }

        const events = await this.repository.findRecommendations(userId);

        return events;
    }
}