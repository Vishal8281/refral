import { useEffect, useState } from "react";
import axios from "axios";
import "./comman.css";
import Update from "./update";

const Card = ({data,handleEdit}) => {

  const handlDelete =()=>{
    
    axios.delete(`http://localhost:8000/showrefral/${data._id}`)
    .then((res) => {
      console.log(res);
     
    })
    .catch((err) => {
      console.log(err);
    });

   }


  

    
   
  return (
    <tr>
      <td>{data._id}</td>
      <td>{data.firstname}</td>
      <td>{data.lastname}</td>
      <td>{data.email}</td>
      <td>{data.mobileno}</td>
      <td>{data.userid}</td>
      <td>{data.date}</td>
      <td>{data.Status}</td>
      <td><button style={{width:"100%" , padding:"5px",fontSize:"15px", border:"none",backgroundColor:"#2F7FDB",color:"white"}} onClick={handleEdit}>Edit</button></td>
      <td><button style={{width:"100%" , padding:"5px",fontSize:"15px", border:"none",backgroundColor:"#2F7FDB",color:"white"}}  onClick={handlDelete}>Delete</button></td>
    </tr>
  );
};

const showrefral = () => {
  const [data, setData] = useState([]);
  const [open,setOpen] =useState(false)




  useEffect(() => {
    axios
      .get(`http://localhost:8000/showrefral`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

const handleEdit =()=>{
  setOpen(true)

}


  return (
    <>
    {open?<Update />:<div className="show">
        <table style={{ width: "100%" }}>
          <tr>
            <th>Referral id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Mobile no</th>
            <th>Userid</th>
            <th>Date</th>
            <th>Status</th>
            <th >Edit</th>
            <th>Delete</th>
          </tr>
      {  data.map((item)=>(
        <Card data={item} handleEdit={handleEdit}/>

      ))}  
    
          
        </table>
      </div>}
      
    </>
  );
};

export default showrefral;
