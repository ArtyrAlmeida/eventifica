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
    description: {
        type: String,
        required: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    finalDate: {
        type: Date,
        required: true
    }
});

eventSchema.index({ name: 'text', city: 'text' }, { default_language: 'pt' })

const Event = mongoose.model("Events", eventSchema);

export default Event;