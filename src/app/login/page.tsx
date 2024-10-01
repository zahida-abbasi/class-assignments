import React from "react";
import Layout from "../components/layout/Layout";
import "./login.css";
const Login = () =>{
  const design = (
    <> 
        <Layout>
            <div className="loginContainer">
            <h1 className="loginTitle">Login</h1>
            <form className="loginForm">
              <div className="formGroup">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" className="inputField" required />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" className="inputField" required />
              </div>
              <button type="submit" className="submitButton">Login</button>
            </form>
          </div>
       </Layout>
    </>

  );
  return design;
}
export default Login;