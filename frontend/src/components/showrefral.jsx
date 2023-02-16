import { useEffect, useState } from "react";
import axios from "axios";
import "./comman.css";

const Card = () => {
  return (
    <tr>
      <td>referral id</td>
      <td>firstname</td>
      <td>lastname</td>
      <td>email</td>
      <td>mobile no</td>
      <td>userid</td>
      <td>date</td>
      <td>Status</td>
    </tr>
  );
};

const showrefral = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/showrefral")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <>
      <div className="show">
        <table style={{ width: "100%" }}>
          <tr>
            <th>referral id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>mobile no</th>
            <th>userid</th>
            <th>date</th>
            <th>Status</th>
          </tr>
      

          <Card />
        </table>
      </div>
    </>
  );
};

export default showrefral;
