const getRecomendedEvents = async (userId) => {
    const response = await fetch(`http://localhost:3030/events/r/${userId}`, {
        method: 'GET'
    });

    if (response.ok) {
        const json = await response.json();
        return json;
    }

    return null;
};

export { getRecomendedEvents }