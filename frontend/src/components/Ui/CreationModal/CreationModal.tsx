import React, { useRef, Fragment} from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import classes from './CreationModal.module.scss';

const CreationModal = (props:any) => {

    const nomeRef:any = useRef();
    const cidadeRef:any = useRef();
    const dataRef:any = useRef();

    const handleCancel= () => {
        props.onFormCancel();
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const eventData = {
            name: nomeRef.current.value,
            city: cidadeRef.current.value,
            date: dataRef.current.value
        };
        props.onSendFormData(eventData);
        nomeRef.current.value = '';
        cidadeRef.current.value = '';
        dataRef.current.value = '';
        console.log(eventData);
    };

    return (
        <Fragment>
            <div className={classes.backdrop} onClick={handleCancel}></div>
            <form onSubmit={handleSubmit} className={classes.modal}>
                <h2>Criar Evento</h2>
                <Input label={'Nome do Evento'} input={{ type: 'text', id: 'nome' }} ref={nomeRef}/>
                <Input label={'Cidade'} input={{ type: 'text', id: 'ciadde' }} ref={cidadeRef}/>
                <Input label={'Data'} input={{ type: 'date', id: 'data' }} ref={dataRef}/>
                <div className={classes.buttons}>
                    <Button type='button' onCancelModal={handleCancel} text='Cancelar'/>
                    <button type='submit' >Criar Evento</button>
                </div>
            </form>
        </Fragment>
    );
};

export { CreationModal };