import mongoose from "mongoose";
import { UserInterface } from "../interfaces";

const Schema = mongoose.Schema;

const userSchema = new Schema<UserInterface>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    events: {
        type: Array,
        required: false,
    }
});

const User = mongoose.model("Users", userSchema);

export default User;