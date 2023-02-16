import { useEffect, useState } from "react";
import axios from "axios"

const showrefral=()=>{
    const [data ,setData]=useState([])

 useEffect(()=>{
    axios
    .get("http://localhost:8000/showrefral")
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    
 },[])
 
  console.log(data)
    return(

    <>

    <h1>use</h1>
    
    </>

    )




}


 export default showrefral;

