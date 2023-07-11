const getRecomendedEvents = async (userId) => {
    const authToken = localStorage.getItem("autenticacao")
    const response = await fetch(`http://localhost:3030/events/r/${userId}`, {
        method: 'GET',
        headers: {
            'authorization': `${authToken}`,
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        const json = await response.json();
        console.log("RESPOSTA REQUEST ", json)
        return json;
    }

    return null;
};

export { getRecomendedEvents }