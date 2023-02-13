import { Link } from "react-router-dom";
import "./comman.css";

const Login = () => {
  return (
    <>
      <div
        className="bg-glass"
        style={{

          margin: "50px 350px",
          width: "850px",
          height: "500px",
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          boxShadow: "5px 10px 10px 5px rgba(0,0,0,0.4)",
        }}
      >
        <div>
          <form className="form" style={{ padding: "70px", height: "400px" }}>
            <h1 style={{ color: "rgb(131,58,180)" }}>Login </h1>
            <br />

            <div>
              <input
                type="text"
                id="login"
                placeholder="Username"
                className="form-control"
                style={{
                  border:"none",
                  boxShadow:"5px 10px 10px 0px rgba(0,0,0,0.4)",
                  padding: "10px",
                  width: "300px",
                  borderRadius: "20px",
                }}
              />
            </div>
            <br />
            

            <div className="password">
              <input
              
                className="password"
                placeholder="Password"
                id="form2Example22"
                style={{
                  border:"none",
                  boxShadow:"5px 10px 10px 0px rgba(0,0,0,0.4)",
                  padding: "10px",
                  width: "300px",
                  borderRadius: "20px",
                }}
              />
            </div>
            <br />
            <div>
              <button
                className="login"
                type="button"
                style={{
                  border:"none",
                  boxShadow:"5px 10px 10px 0px rgba(0,0,0,0.4)",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                  borderRadius: "20px",
                  color: "white",
                  background:
                    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                }}
              >
                LogIn
              </button>
              <br />

              <button
                className="login"
                type="button"
                style={{
                  border:"none",
                  boxShadow:"5px 10px 10px 0px rgba(0,0,0,0.4)",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                  borderRadius: "20px",
                  color: "white",
                  background:
                    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                }}
              >
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Create Account Here
                </Link>
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            width: "400px",
            height: "500px",
            borderRadius: "20px",
          }}
        >
          <div style={{ marginTop: "160px" }}>
            <h1 style={{ fontSize: "50px", color: "white", margin: "10px" }}>
              Dphon{" "}
            </h1>
            <h1 style={{ fontSize: "50px", color: "white", margin: "10px" }}>
              Corporation
            </h1>
          </div>
        </div>
      </div>
      <Link to="/">home</Link>
    </>
  );
};

export default Login;
