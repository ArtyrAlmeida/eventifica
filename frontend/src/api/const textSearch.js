const textSearchEvent = async (text) => {
    const response = await fetch(`http://localhost:3030/events/search/${text}`, {
        method: 'GET'
    });

    if (response.ok) {
        const json = await response.json();
        return json;
    }

    return null;
};

export { textSearchEvent };