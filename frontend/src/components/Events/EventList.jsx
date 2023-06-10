import React, { useEffect, useState } from 'react'
import { getEventInfo } from '../../../api/getEvent';
import { Event } from "./Event";
import { useEventContext } from '../../hooks/useEventContext';

const EventList = () => {

    const [events, setEvents] = useState([]);
    const { dispatch } = useEventContext();

    useEffect(() => {
        getEventInfo().then((points) => {
            setEvents([...points])
            dispatch({type: "SET_EVENT", payload: points})
            console.log('points: ', points);
        });
    }, [dispatch]);

    return (
        <div>
            {events.map((event) => {
                return (
                    <Event key={event.id} name={event.name} city={event.city} date={event.date} position={event.position} event={event}
                    />
                );
            })}
        </div>
    );
};

export { EventList };