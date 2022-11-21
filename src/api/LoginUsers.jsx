async function loginUsers () {
    try {
        const res = await fetch('http://localhost:3000/users')
        return await res.json()

    } catch(e) {
        console.log('Datos incorrectos.')
    }
}

export default loginUsers;