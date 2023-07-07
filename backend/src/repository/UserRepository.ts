import { UserInterface } from "../interfaces";
import User from "../models/user";


export default class UserRepository {
    async create(user: UserInterface) {
        const createdUser = await User.create({...user});
        
        return createdUser;
    }

    async findByEmail(email: string) {
        const result = await User.findOne({ email });

        return result;
    }

}