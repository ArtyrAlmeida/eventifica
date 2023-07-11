import { log } from "console";
import { getNeo4jSession } from "../database/database";
import { SubscribeOptions, UserInterface } from "../interfaces";
import User from "../models/user";
import UserValidator from "../validators/UserValidator";
import RequestError from "../exceptions/RequestError";


export default class UserRepository {
    async create(user: UserInterface) {
        const createdUser = await User.create({...user})

        const session = getNeo4jSession();

        await session.run('CREATE (:User{id:$id})',{
            id: createdUser._id.toString()
        })
            .then(() => console.log("User created in neo4j"))
            .catch(e => console.log("Could not create user", e));

        session.close();
        
        return createdUser;
    }

    async findByEmail(email: string) {
        const result = await User.findOne({ email });

        return result;
    }

    async findById(id: string) {
        const result = await User.findById(id);

        return result;
    }

    async addEvent(subscribeOptions: SubscribeOptions) {
        const { eventId, userId } = subscribeOptions;
        const user = (await this.findById(userId)) as UserInterface;

        const events = user.events ? [...user.events, eventId ] : [eventId];
        
        const query = {
            events,
        }
        
        await this.updateOne(userId, query);
    }

    async updateOne(userId: string, query: object) {
        const result = await User.findByIdAndUpdate(userId, { $set: query });
        
        return result;
    }

    async subscribe(subscribeOptions: SubscribeOptions) {
        if (await UserValidator.isUserSubscribed(subscribeOptions)) {
            throw new RequestError('Usuário já inscrito', 400);
        }

        const session = getNeo4jSession();

        await session.run(`MATCH (user:User{id:"${subscribeOptions.userId}"})
        OPTIONAL MATCH (event:Event{id:"${subscribeOptions.eventId}"})
        CREATE (user)-[:SUBSCRIBED]->(event)`);

        await this.addEvent(subscribeOptions);

        session.close();
    }
}