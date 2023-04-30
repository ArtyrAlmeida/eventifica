import React from "react";

const Button = (props:any) => {

    const handleClick = () => {
        const value = 'cancelar';
        props.onCancelModal(value);
    };

    return <button type={props.type} onClick={handleClick}>{props.text}</button>;
}

export { Button };