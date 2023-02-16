import "./comman.css";
import axios from "axios";
import { useState } from "react";
const makerefral = () => {
  const [data, setData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    MobileNo: "",
    Date: "",
    userid: "",
  });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handlSubmit = () => {
    axios
      .post("http://localhost:8000/makerefral", data)
      .then((res) => {
        console.log(res);
        setData({
          Firstname: "",
          Lastname: "",
        
          email: "",
          MobileNo: "",
          Date: "",
        
          userid: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="makerefral">
        <h1>Make refral</h1>

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
            name="Email"
            value={data.Email}
          ></input>
          <br />

          <label className="lab">Mobile No:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="text"
            name="MobileNo"
            value={data.MobileNo}
          ></input>
          <br />
          <label className="lab">Date:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="date"
            name="Date"
            value={data.Date}
          ></input>
          <br />
     
          <br />
          <label className="lab">userid:</label>
          <input
            onChange={handleChange}
            className="inp"
            type="text"
            name="userid"
            value={data.userid}
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
