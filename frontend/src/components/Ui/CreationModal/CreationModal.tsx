import React, { useRef, Fragment} from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import classes from './CreationModal.module.scss'

const CreationModal = (props:any) => {

    const nomeRef:any = useRef();
    const cidadeRef:any = useRef();
    const dataRef:any = useRef();

    const handleCancel= () => {
        props.onFormCancel();
    }
    const handleSubmit= (e:any) => {
        e.preventDefault();
        const eventData = {
            name: nomeRef.current.value,
            city: cidadeRef.current.value,
            date: dataRef.current.value
        };
        props.onSendFormData(eventData);
        console.log(eventData);
    };

    return (
        <Fragment>
            <div className={classes.backdrop} onClick={handleCancel}></div>
            <form onSubmit={handleSubmit} className={classes.modal}>
                <Input label={'Nome do Evento'} input={{ type: 'text', id: 'nome' }} ref={nomeRef}/>
                <Input label={'Cidade'} input={{ type: 'text', id: 'ciadde' }} ref={cidadeRef}/>
                <Input label={'Data'} input={{ type: 'date', id: 'data' }} ref={dataRef}/>
                <Button type='button' onCancelModal={handleCancel} text='Cancelar'/>
                <button type='submit' >Criar Evento</button>
            </form>
        </Fragment>
    );
};

export { CreationModal };