async function loginUsers () {
    try {
        const res = await fetch('http://localhost:3000/users')
        const data = await res.json();
        return data;

    } catch(e) {
        console.log('Datos incorrectos.')
    }
}

export default loginUsers;
