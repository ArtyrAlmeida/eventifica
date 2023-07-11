const deleteEvent = async (event, userEmail) => {
    const authToken = localStorage.getItem("autenticacao")
    const response = await fetch(`http://localhost:3030/events/${event}`, {
        method: 'DELETE',
        body: userEmail,
        headers: {
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

export { deleteEvent };