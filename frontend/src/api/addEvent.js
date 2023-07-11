const addEvent = async (event) => {
    const authToken = localStorage.getItem("autenticacao")
    const response = await fetch('http://localhost:3030/events', {
        method: 'POST',
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

export { addEvent };