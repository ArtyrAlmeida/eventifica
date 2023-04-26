import React from 'react';
import { Card } from '../../Ui/Card/Card';
import classes from './Event.module.scss';

const Event = (props: any) => {
    return (
    <Card>
        <div>
            <h3>{props.name}</h3>
            <p>{props.city}</p>
            <p>{props.date}</p>
        </div>
        <div>
            <img className={classes['location-icon']} src={'../../../../public/assets/icons/MapMarker.png'}/>
            <p>{props.position.coordinates[0]}</p>
            <p>{props.position.coordinates[1]}</p>
        </div>
    </Card>
    );
};

export { Event };