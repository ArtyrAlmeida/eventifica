import React, {Fragment} from 'react';
import { deleteEvent } from '../../api/deleteEvent';
import { useEventContext } from '../../hooks/useEventContext';
import { Link, Navigate} from 'react-router-dom';

const Event = (props) => {

    const { dispatch } = useEventContext();

    const handleDelete = async () => {
        const response = await deleteEvent(props.eventID)
        dispatch({type: "DELETE_EVENT", payload: props.eventID})
    }

    return (
    <Fragment>
        <div>
            <div>
                <h3>Evento: {props.name}</h3>
                <p>Cidade: {props.city}</p>
                <p>Data: {new Date(props.date).toLocaleString('pt-br', { year: 'numeric', month: 'long', day: '2-digit' })}</p>
            </div>
            <div>
                <p>{props.position.coordinates[0].toFixed(4)}</p>
                <p>{props.position.coordinates[1].toFixed(4)}</p>
            </div>
            <div>
            <span onClick={handleDelete}>
                Deletar
            </span>
            <Link to={'/atualizarEventos'} state={{event: props}}>
                <span>
                    Atualizar
                </span>
            </Link>
            </div>
        </div>
        <hr></hr>
    </Fragment>
    );
};

export { Event };