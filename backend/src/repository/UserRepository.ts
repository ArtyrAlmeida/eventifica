import { log } from "console";
import { getNeo4jSession } from "../database/database";
import { UserInterface } from "../interfaces";
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

}