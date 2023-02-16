import { Link } from "react-router-dom";
import "./comman.css";

const Navbar = () => {




  return (
    <div
      
      style={{ padding: "14px", borderRadius: "5px",background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" }}
    >
      <Link
        style={{
          color: "white",
          margin: "10px",
          fontSize: "25px",
          textDecoration: "none",
        }}
        to="/home"
      >
        Home
      </Link>
      <Link
        to="/"
        style={{
          color: "white",
          margin: "10px",
          fontSize: "25px",
          textDecoration: "none",
        }}
      >
        Login
      </Link>
      <div className="dropdown">
        <h1>Profile</h1>
        <div class="dropdown-options">
          <a >Username</a>
          <a href="/refral">Referral</a>
          <a >Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
