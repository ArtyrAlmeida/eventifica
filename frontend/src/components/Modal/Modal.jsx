import { Input } from "../Input/Input";
import { Fragment, useRef } from "react";

const Modal = (props) => {

    const nomeRef = useRef();
    const cidadeRef = useRef();
    const dataRef = useRef();

    const handleCancel= () => {
        props.onFormCancel();
    }
    const handleSubmit = (e) => {
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
    };

    return (
        <Fragment>
            <div onClick={handleCancel}></div>
            <form onSubmit={handleSubmit}>
                <h2>Criar Evento</h2>
                <Input label={'Nome do Evento'} input={{ type: 'text', id: 'nome' }} ref={nomeRef}/>
                <Input label={'Cidade'} input={{ type: 'text', id: 'ciadde' }} ref={cidadeRef}/>
                <Input label={'Data'} input={{ type: 'date', id: 'data' }} ref={dataRef}/>
                <div>
                    <button type='button' onClick={handleCancel} text='Cancelar'>Cancelar</button>
                    <button type='submit' >Criar Evento</button>
                </div>
            </form>
        </Fragment>
    );
}

export { Modal }