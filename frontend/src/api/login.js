const loginUser = async (user) => {
    const response = await fetch(`http://localhost:3030/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response)
    if(response.ok) {
        const json = response.json();
        return json;
    }

    return null;
};

export {loginUser}