import "./comman.css";
import axios from "axios";
import { useState } from "react";
const makerefral = () => {
  const [id,setId]=useState(null)
  const [data, setData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    MobileNo: "",
    Date: "",
 
  });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handlSubmit = () => {
    axios
      .post("http://localhost:8000/makereferal", data)
      .then((res) => {
        console.log(res);
        setData({
          Firstname: "",
          Lastname: "",
          email: "",
          MobileNo: "",
          Date: "",
        
          
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="makerefral">
        <h1>Create Referral</h1>

        <form className="refral-form">
          <label className="lab">Firstname:</label>

          <input
            onChange={handleChange}
            className="inp"
            type="text"
            name="Firstname"
            value={data.Firstname}
          ></input>
          <br />
          <label className="lab">Lastname:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="text"
            name="Lastname"
            value={data.Lastname}
          ></input>
          
          <br />
          <label className="lab">Email:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="email"
            name="email"
            value={data.email}
            style={{marginLeft:"40px"}}
          ></input>
          <br />

          <label className="lab">Mobile No:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="text"
            name="MobileNo"
            value={data.MobileNo}
            style={{marginLeft:"3px"}}
          ></input>
          <br />
          <label className="lab">Date:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="date"
            name="Date"
            value={data.Date}
            style={{marginLeft:"53px"}}
          ></input>
          <br />
     
        
       
          <br />
          <button onAuxClick={handlSubmit} className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default makerefral;
