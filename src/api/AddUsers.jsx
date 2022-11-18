import {v4} from "uuid";

async function AddUser(user) {
    user.id = v4();
    
    try {
        const res = await fetch ("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })

        const created = await res.json()
        console.log("añadido:", created)
    
    } catch ( err ) {
        console.log("error usuario no creado")
    }

}
export default AddUser;