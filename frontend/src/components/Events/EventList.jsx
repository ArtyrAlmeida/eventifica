import React, { useEffect } from 'react'
import { getEventInfo } from '../../api/getEvent';
import { Event } from "./Event";
import { useEventContext } from '../../hooks/useEventContext';

const EventList = () => {

    const { events, dispatch } = useEventContext();

    useEffect(() => {
        getEventInfo().then((points) => {
            dispatch({ type: "SET_EVENT", payload: points })
        });
    }, [dispatch]);

    return (
        <div>
            {events && events.map((event) => {
                return (
                    <Event 
                    key={event._id}
                    name={event.name} 
                    city={event.city} 
                    date={event.date} 
                    position={event.position}
                    eventID={event._id}
                    />
                );
            })}
        </div>
    );
};

export { EventList };