const updateEvent = async (event) => {
    const authToken = localStorage.getItem("autenticacao")
    const response = await fetch(`http://localhost:3030/events/${event._id}`, {
        method: 'PATCH',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${authToken}`
        }
    });
    console.log(response)
    if(response.ok) {
        const json = response.json();
        return json;
    }

    return null;
};

export { updateEvent };