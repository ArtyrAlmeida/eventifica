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
            <div className='card-footer'>
                <span className='btn btn-danger' onClick={handleDelete}>
                    Deletar
                </span>
                <Link to={'/atualizarEventos'} state={{event: props}}>
                    <span className='btn btn-info'>
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