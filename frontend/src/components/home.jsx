import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import iImage from "../assets/image.jpg"

const Home =()=>{

    return(
 <>
  <Navbar/>


  <div style={{margin:"50px auto", width:"800px" ,height:"500px" ,boxShadow:" 0px 10px 10px 0px rgba(0,0,0,0.4)"}}>
   <div style={{ height:"300px",borderRadius:"10px"}} >
      <img style={{height:"300px", width:"800px"}} src={iImage}/>
   </div>
   <div style={{textAlign:"center"}}>

      
      
   <h1 style={{color:"black"}}>Dphone</h1>
      <h2>Price:$1000</h2>
      
      <p></p>
      
   </div>
   <button style={{padding:"10px", marginLeft:"350px" ,width:"100px",borderRadius:"5px" ,backgroundColor:"#0047AB",color:"white"}}> <Link style={{color:"white",textDecoration:"none"}} to="/buy" >Buy</Link></button>
 
  </div>


 
 </>

    )
 }

  export default Home;