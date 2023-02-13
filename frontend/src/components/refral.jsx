import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Showrefral  from "./showrefral";
import Makerefral from "./makerefral";

 const Refral =()=>{
   const [open,setOpen]=useState(false)

   const handlemake =()=>{
      setOpen(true)

   }

   const handleshow=()=>{
      setOpen(false)
   }

    return(
 <>
 <Navbar/>



 <div style={{display:"grid",gridTemplateColumns: "auto auto auto"}}>

   <div style={{ width:"250px",height:"650px",boxShadow:"5px 10px 10px 0px rgba(0,0,0,0.4)" , borderRadius:"10px" }}>

      <div style={{margin:"20px"}}>

      <button onClick={handlemake} style={{width:"200px",padding:"10px",borderRadius:"20px",margin:"10px ",border:"none", marginTop:"40px",}}> <Link style={{color:"black",textDecoration:"none",fontSize:"20px"}}>Make Refral</Link></button>

       
       <br/>
       <br/>
      <button onClick={handleshow} style={{width:"200px",padding:"10px", borderRadius:"20px",margin:"10px",border:"none" ,marginTop:"40px"}}><Link style={{color:"black",textDecoration:"none",fontSize:"20px"}}>Show Refral</Link></button>
      </div>
   

    
   </div>
   <div style={{width:"1200px" ,marginLeft:"20px"}}>
      {open?<Makerefral/>:<Showrefral/>}
    
   
   </div>
 </div>
 </>

    )
 }

  export default Refral;

