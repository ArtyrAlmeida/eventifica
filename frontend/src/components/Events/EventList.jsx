import React, { useEffect, useRef, useState } from 'react'
import { getEventInfo } from '../../api/getEvent';
import { Event } from "./Event";
import { useEventContext } from '../../hooks/useEventContext';
import { useRecomendedEventContext } from '../../hooks/useRecomendationContext';

import './EventList.css';
import { textSearchEvent } from '../../api/const textSearch';
import { getRecomendedEvents } from '../../api/getRecomendedEvents';

const EventList = () => {

    const { events, dispatch } = useEventContext();
    const { recomendedEvents, recomendedEventDispatch } = useRecomendedEventContext();

    const [search, setSearch] = useState('');
    const [authState, setAuthState] = useState({
        email: '',
        role: '',
        id: '',
    })

    useEffect(() => {
        const authState = JSON.parse(localStorage.getItem("autenticacao_state"))
        if (authState) {
            setAuthState(authState)
        }
    }, [])

    useEffect(() => {
        const identifier = setTimeout(() => {
            if (search === '') {
                console.log('diferente');
                getEventInfo().then((points) => {
                    dispatch({ type: "SET_EVENT", payload: points })
                });
            }
            else {
                textSearchEvent(search).then((points => {
                    dispatch({ type: "SET_EVENT", payload: points })
                }))
                console.log(search);
            }
        }, 1000);

        return () => {
            clearTimeout(identifier);
        };
    }, [search, dispatch]);

    useEffect(() => {
        if(authState.id != '') {
            getRecomendedEvents(authState.id).then((events) => {
                recomendedEventDispatch({ type: "SET_RECOMENDATIONS", payload: events })
            })
        }
    }, [recomendedEventDispatch, authState.id])

    const updateRecomendedUsers = async () => {
        if(authState.id != '') {
            const newEvents = await getRecomendedEvents(authState.id)
            recomendedEventDispatch({ type: "SET_RECOMENDATIONS", payload: newEvents })
        }else{
            recomendedEventDispatch({ type: "SET_RECOMENDATIONS", payload: recomendedEvents })
        }
    }

    return (
        <div>
            <div className='text-search'>
                <input className='form-control' type='text' placeholder='Buscar Evento' onChange={event => setSearch(event.target.value)} />
            </div>
            <div className='list'>
                {events && events.map((event) => {
                    return (
                        <Event
                            key={event._id}
                            name={event.name}
                            description={event.description}
                            initialDate={event.initialDate}
                            finalDate={event.finalDate}
                            position={event.position}
                            eventID={event._id}
                            onHandleSubscription={updateRecomendedUsers}/>
                    );
                })}
                <h3>Eventos Recomendados:</h3>
                {recomendedEvents && recomendedEvents.map((event) => {
                    return (
                        <Event
                            key={event._id}
                            name={event.name}
                            description={event.description}
                            initialDate={event.initialDate}
                            finalDate={event.finalDate}
                            position={event.position}
                            eventID={event._id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export { EventList };