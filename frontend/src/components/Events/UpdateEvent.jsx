import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { Input } from "../Input/Input";
import { updateEvent } from "../../api/updateEvent";
import 'bootstrap/dist/css/bootstrap.min.css';

import './UpdateEvent.css'

const UpdateEvent = () => {
    const location = useLocation();
    console.log("Evento no update", location.state.event);
    const { event } = location.state;
    const nomeRef = useRef(event.name);
    const descricaoRef = useRef(event.description);
    const dataInicialRef = useRef(event.initialDate);
    const dataFinalRef = useRef(event.finalDate);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedEventData = {
            _id: location.state.event.eventID,
            name: nomeRef.current.value,
            description: descricaoRef.current.value,
            initialdate: dataInicialRef.current.value,
            finalDate: dataFinalRef.current.value
        }
        const response = await updateEvent(updatedEventData);
        console.log(response)

        window.location.assign("http://localhost:3000/");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        window.location.assign("http://localhost:3000/");
    }

    return (
            <form onSubmit={handleSubmit} className='form'>
                <h2>Atualizar Evento</h2>
                <Input label={'Nome do Evento'} input={{ type: 'text', id: 'nome', defaultValue:event.name }} ref={nomeRef}/>
                <Input label={'Descrição'} input={{ type: 'text', id: 'descricao', defaultValue:event.description}} ref={descricaoRef}/>
                <Input label={'Data de Início'} input={{ type: 'date', id: 'data', defaultValue:event.initialDate}} ref={dataInicialRef} />
                <Input label={'Data de Fim'} input={{ type: 'date', id: 'data', defaultValue:event.finalDate}} ref={dataFinalRef} />

                <div>
                    <button className="btn btn-secondary me-3 mt-3" type='button' onClick={handleCancel}>Cancelar</button>
                    <button type='submit' className="btn btn-primary mt-3" >Atualizar Evento</button>
                </div>
            </form>
    )

}

export { UpdateEvent };