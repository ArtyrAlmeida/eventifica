import React from "react"
import { Card } from "../../Ui/Card/Card";
import { Event } from "../Event/Event";

const DUMMY_ENVENTS = [
    {
        id: 1,
        name: 'teste',
        date: '23/01/2024',
        city: 'Cajazeiras',
        position:
        {
            coordinates: [-3.8000, 38.654]
        }
    },
    {
        id: 2,
        name: 'teste 2',
        date: '25/01/2024',
        city: 'Cajazeiras',
        position:
        {
            coordinates: [-3.8000, 38.654]
        }
    }
];

const EventList = () => {
    return (
        <Card>
            {DUMMY_ENVENTS.map((event) => {
                return (
                    <Event key={event.id} name={event.name} city={event.city} date={event.date} position={event.position}/>
                );
            })}
        </Card>
    );
};

export { EventList };