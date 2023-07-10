const subscribeInEvent = async (userId, eventId) => {
    const response = await fetch(`http://localhost:3030/events/like`, {
        method: 'POST',
        body: JSON.stringify(userId,eventId),
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

export { subscribeInEvent }