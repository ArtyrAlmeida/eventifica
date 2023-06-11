import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { Input } from "../Input/Input";
import { updateEvent } from "../../api/updateEvent";

const UpdateEvent = () => {
    const location = useLocation();
    const { event } = location.state;
    const nomeRef = useRef(event.name);
    const cidadeRef = useRef(event.city);
    const dataRef = useRef(event.date);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedEventData = {
            _id: location.state.event.eventID,
            name: nomeRef.current.value,
            city: cidadeRef.current.value,
            date: dataRef.current.value
        }
        const response = await updateEvent(updatedEventData);
        console.log(response)

        window.location.assign("http://localhost:3000/");
    }

    return (
            <form onSubmit={handleSubmit}>
                <h2>Atualizar Evento</h2>
                <Input label={'Nome do Evento'} input={{ type: 'text', id: 'nome', defaultValue:event.name }} ref={nomeRef}/>
                <Input label={'Cidade'} input={{ type: 'text', id: 'ciadde', defaultValue:event.city}} ref={cidadeRef}/>
                <Input label={'Data'} input={{ type: 'date', id: 'data', defaultValue:event.date}} ref={dataRef} />
                <div>
                    <button type='submit' >Atualizar Evento</button>
                </div>
            </form>
    )

}

export { UpdateEvent };