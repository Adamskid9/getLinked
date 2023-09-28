import { useEffect,useState } from "react";

const BASE_URL = 'https://backend.getlinked.ai';

function Get(){
const [data,setData] = useState("");
    useEffect(function(){
    async function Api(){
        try{
    const req = await fetch(`${BASE_URL}/hackathon/categories-list`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

  if(!req.ok) throw new Error("something went wrong")
  const data = await req.json();
  setData(data);
  
        }catch(e){
        console.log(e.message,"error")
        }

    }
   Api();
},[]);

return [data]
    
}

export default Get;
