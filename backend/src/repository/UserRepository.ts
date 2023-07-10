import { log } from "console";
import { getNeo4jSession } from "../database/database";
import { SubscribeOptions, UserInterface } from "../interfaces";
import User from "../models/user";


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

    async subscribe(subscribeOptions: SubscribeOptions) {
        const session = getNeo4jSession();

        await session.run(`MATCH (user:User{id:"${subscribeOptions.userId}"})
        OPTIONAL MATCH (event:Event{id:"${subscribeOptions.eventId}"})
        CREATE (user)-[:SUBSCRIBED]->(event)`);

        session.close();
    }

}