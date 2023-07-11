import { getNeo4jSession } from '../database/database';
import { EventInterface } from '../interfaces';
import Event from '../models/event';
import { Types } from 'mongoose';

export default class EventRepository {
    async create(event: EventInterface) {
        const createdEvent = await Event.create({...event});

        const session = getNeo4jSession();

        await session.run('CREATE (:Event{id:$id})',{
            id: createdEvent._id.toString()
        }).then(() => console.log("Event created in neo4j"));

        session.close();
        
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
        const result = await Event.find({ $text: { $search: text } }, { _id: true, __v: false });

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

    async findRecommendations(userId: string) {
        console.log("Entrou no repository");
        const session = getNeo4jSession();
        console.log("obteve sessao");
        
        
        const result = await session.run(
            `MATCH (user:User {id: "${userId}"})-[:SUBSCRIBED]->(e)<-[:SUBSCRIBED]-(relatedUsers),
            (relatedUsers)-[:SUBSCRIBED]->(events) WHERE NOT (user)-[:SUBSCRIBED]->(events)
            RETURN events
        `);

        const idArray: Types.ObjectId[] = [];

        result.records.forEach((record: any) => {
            const id = record._fields[0].properties.id as string;
            let exists = false;
            idArray.forEach(objectId => {
                exists = objectId.toString() === id;
            })
            if (!exists) idArray.push(new Types.ObjectId(id));
        });
        
        const events = await Event.aggregate([
            {
                $match: {
                    _id: { $in: idArray },
                },
            },
        ]);
        
        session.close();

        return events;
    }
}