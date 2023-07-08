import mongoose from "mongoose";
import { UserInterface } from "../interfaces";

const Schema = mongoose.Schema;

const userSchema = new Schema<UserInterface>({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    }
});

const User = mongoose.model("Users", userSchema);

export default User;