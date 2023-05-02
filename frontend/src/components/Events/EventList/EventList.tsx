import React, { useEffect, useState } from 'react'
import { getEventInfo } from '../../../api/getEvent';
import { Card } from "../../Ui/Card/Card";
import { Event } from "../Event/Event";
import classes from './EventList.module.scss'

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
    },
    {
        id: 3,
        name: 'teste 2',
        date: '25/01/2024',
        city: 'Cajazeiras',
        position:
        {
            coordinates: [-3.8000, 38.654]
        }
    },
    {
        id: 4,
        name: 'teste 2',
        date: '25/01/2024',
        city: 'Cajazeiras',
        position:
        {
            coordinates: [-3.8000, 38.654]
        }
    },
];

const EventList = () => {

    const [events, setEvents]: any = useState([]);

    useEffect(() => {
        getEventInfo().then((points) => {
            setEvents([...points])
            console.log('points: ', points);
        });
    }, []);

    return (
        <Card className={classes.list}>
            {events.map((event: any) => {
                return (
                    <Event key={event.id} name={event.name} city={event.city} date={event.date} position={event.position}
                    />
                );
            })}
        </Card>
    );
};

export { EventList };