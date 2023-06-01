import mongoose from "mongoose";
import { EventInterface } from "../interfaces";

const Schema = mongoose.Schema;

const eventSchema = new Schema<EventInterface>({
    name: {
        type: String,
        required: true
    },
    position: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Event = mongoose.model("Events", eventSchema);

export default Event;