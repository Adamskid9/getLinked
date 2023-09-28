const BASE_URL = 'https://backend.getlinked.ai';


async function fetchCategories(value) {
    

    try {

        const resquest = await fetch(`${BASE_URL}//hackathon/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(value),
        })

        
        const data = await resquest.json();

        //  IF THE REQUEST CAN'T BE FETCHED --- E.G NO CONNECTION TO INTERNET OR SOMETHING
        if(!resquest) throw new Error();



        console.log(data)
        return data
    }catch (error) {
        console.log(error.message)
    }finally {

    }
}

export default fetchCategories