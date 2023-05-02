import React from 'react';
import classes from './Card.module.scss'

const Card = (props: any) => {

    const cardStyles = `${classes.card} ` + props.className;

    return (
        <div className={cardStyles}>
            {props.children}
        </div>
    );
};

export { Card };