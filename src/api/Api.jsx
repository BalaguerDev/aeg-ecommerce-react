

export const apiConnect = async (url) => {
    try{
        const response = await fetch(url);
            const jsonData = await response.json();

            return jsonData
    } catch(error){

    }
}


 