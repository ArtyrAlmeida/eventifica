const subscribeInEvent = async (userId, eventId) => {
    console.log(userId);
    const response = await fetch(`http://localhost:3030/user/subscribe`, {
        method: 'POST',
        body: JSON.stringify({userId,eventId}),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response)
    if(response.ok) {
        return;
    }

    return null;
};

export { subscribeInEvent }