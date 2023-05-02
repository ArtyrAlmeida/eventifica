const getEventInfo = async () => {
    const response = await fetch('http://localhost:3030/events', {
        method: 'GET'
    });

    if (response.ok) {
        const json = await response.json();
        console.log(json);
        return json;
    }

    return null;
};

export { getEventInfo };