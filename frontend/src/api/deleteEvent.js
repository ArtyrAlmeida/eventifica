const deleteEvent = async (event) => {
    const response = await fetch(`http://localhost:3030/events/${event}`, {
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