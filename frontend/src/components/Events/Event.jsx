import React, { Fragment, useEffect, useState } from 'react';
import { deleteEvent } from '../../api/deleteEvent';
import { useEventContext } from '../../hooks/useEventContext';
import { Link } from 'react-router-dom';
import { subscribeInEvent } from '../../api/subscribeInEvent';

const Event = (props) => {

    const { dispatch } = useEventContext();

    const [authState, setAuthState] = useState({
        email: '',
        role: '',
        id: '',
    })
    const [isSubscribed, setIsSubscribed] = useState(false)

    useEffect(() => {
        const authState = JSON.parse(localStorage.getItem("autenticacao_state"))
        if (authState) {
            setAuthState(authState)
        }
    }, [])

    const handleDelete = async () => {
        await deleteEvent(props.eventID)
        dispatch({ type: "DELETE_EVENT", payload: props.eventID })
    }

    const handleSubscription = async () => {
        await subscribeInEvent(authState.id, props.eventID)
        setIsSubscribed(true)
    }

    return (
        <Fragment>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>{props.name}</h3>
                    <p className='card-subtitle mb-2 text-muted'>{props.description}</p>
                    <p className='card-text'>Data de início: {new Date(props.initialDate).toLocaleString('pt-br', { year: 'numeric', month: 'long', day: '2-digit' })}</p>
                    <p className='card-text'>Data de término: {new Date(props.finalDate).toLocaleString('pt-br', { year: 'numeric', month: 'long', day: '2-digit' })}</p>
                </div>
                <div className='card-body'>
                    <p>{props.position.coordinates[0].toFixed(4)}</p>
                    <p>{props.position.coordinates[1].toFixed(4)}</p>
                </div>
                {authState.role == 'ADMIN' ?
                    <div className='card-footer'>
                        <span className='btn btn-danger me-3' onClick={handleDelete}>
                            Deletar
                        </span>
                        <Link to={'/atualizarEventos'} state={{ event: props }}>
                            <span className='btn btn-info'>
                                Atualizar
                            </span>
                        </Link>
                    </div> :
                    <div>
                        {
                        !isSubscribed ? 
                        <span className='btn btn-info' onClick={handleSubscription}>
                            Inscrever
                        </span> : 
                        <span className='btn btn-secondary' onClick={() => { return console.log('Já é inscrito') }}>
                            Inscrito
                        </span>
                        }
                    </div>}
            </div>
            <hr></hr>
        </Fragment>
    );
};

export { Event };