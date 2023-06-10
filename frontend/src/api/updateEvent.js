const addEvent = async (event) => {
    console.log('evento Recebido: ',event);
    const response = await fetch(`http://localhost:3030/events/:${event.id}`, {
        method: 'PATCH',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response)
    if(response.ok) {
        const json = response.json();
        return json;
    }

    return null;
};

export { addEvent };