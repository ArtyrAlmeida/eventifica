const deleteEvent = async (event) => {
    console.log('evento Recebido: ',event);
    const response = await fetch(`http://localhost:3030/events/:${event.id}`, {
        method: 'DELETE',
    });
    console.log(response)
    if(response.ok) {
        const json = response.json();
        return json;
    }

    return null;
};

export { deleteEvent };