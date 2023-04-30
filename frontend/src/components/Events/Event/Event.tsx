import React, {Fragment} from 'react';
import classes from './Event.module.scss';
import mapIcon from '../../../assets/icons/MapMarker.png';

const Event = (props: any) => {
    return (
    <Fragment>
        <div className={classes.eventContainer}>
            <div>
                <h3>Evento: {props.name}</h3>
                <p>Cidade: {props.city}</p>
                <p>Data: {new Date(props.date).toLocaleString('pt-br', { year: 'numeric', month: 'long', day: '2-digit' })}</p>
            </div>
            <div className={classes.location}>
                <img className={classes['location-icon']} src={mapIcon}/>
                <p>{props.position.coordinates[0].toFixed(4)}</p>
                <p>{props.position.coordinates[1].toFixed(4)}</p>
            </div>
        </div>
        <hr></hr>
    </Fragment>
    );
};

export { Event };