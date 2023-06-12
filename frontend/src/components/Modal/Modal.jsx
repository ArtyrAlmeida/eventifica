import { Input } from "../Input/Input";
import { Fragment, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Modal.css'

const Modal = (props) => {

    const nomeRef = useRef();
    const descricaoRef = useRef();
    const dataInicialRef = useRef();
    const dataFinalRef = useRef();

    const handleCancel= () => {
        props.onFormCancel();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = {
            name: nomeRef.current.value,
            description: descricaoRef.current.value,
            initialDate: dataInicialRef.current.value,
            finalDate: dataFinalRef.current.value,
        };
        props.onSendFormData(eventData);
        nomeRef.current.value = '';
        descricaoRef.current.value = '';
        dataInicialRef.current.value = '';
        dataFinalRef.current.value = '';
    };

    return (
        <Fragment>
            <div className="cancelArea" onClick={handleCancel}></div>
            <div className="creationModal">
                <form onSubmit={handleSubmit} >
                    <h2 className="modal-title">Criar Evento</h2>
                    <Input className="form-control" label={'Nome do Evento'} input={{ type: 'text', id: 'nome' }} ref={nomeRef}/>
                    <Input label={'Descrição'} input={{ type: 'text', id: 'descricao' }} ref={descricaoRef}/>
                    <Input label={'Data Inicial'} input={{ type: 'date', id: 'data' }} ref={dataInicialRef}/>
                    <Input label={'Data Final'} input={{ type: 'date', id: 'data' }} ref={dataFinalRef}/>
                    <div className="btn-group-toggle">
                        <button className="btn btn-primary" type='submit' >Criar Evento</button>
                        <button className="btn btn-secondary" type='button' onClick={handleCancel} text='Cancelar'>Cancelar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export { Modal }