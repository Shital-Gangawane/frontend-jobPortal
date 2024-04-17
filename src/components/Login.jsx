import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login template d-flex justify-content-center ">
      <div className="form-container bg-white p-5 mt-5 rounded">
        <form action="" className="bg-white">
          <h3 className=" bg-white">Login to Superio</h3>
          <div className=" bg-white">
            <label htmlFor="email" className="mb-3 mt-3 bg-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <div className="mb-2  mt-3 register">
            <label htmlFor="password" className="register mb-3">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2 register">
            <input
              type="checbox"
              className="custum-control  custom-checkbox mb-3  mt-3 register"
              id="check"
            />
            <label htmlFor="checkbox" className="custom-input-label register">
              Keep me signed in
            </label>
           
            <div className="d-grid register">
            <p className=" register text-end">
              Forgotten<a href="" className="register">Password?</a>
            </p>

              <button className="btn btn-success ">Login</button>
            </div>
            <p className="register text-end mt-3">
              Don't You have an account? <Link to="/Register" className="register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
 
}

export default Login;
