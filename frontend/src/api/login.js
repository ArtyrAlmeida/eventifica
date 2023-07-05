const loginUser = async (user) => {
    const response = await fetch(`http://localhost:3030/login/${user.id}`, {
        method: 'POST',
        body: user
    });
    console.log(response)
    if(response.ok) {
        const json = response.json();
        return json;
    }

    return null;
};

export {loginUser}