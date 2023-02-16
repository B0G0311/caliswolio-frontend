import React from "react";
import"../css/login.css"
// import { Link } from "react-router-dom";

export default function Login()
{
  return(
      <div className="Login">
        <form>
          <div className="info">
            <label> Username: 
                <input type="text" className="Member" id="username"required/>
                <br/><br/>
            </label>

            <label> Password: 
                <input type="text" className="Member" id="Password"required/>
                <br/><br/>
            </label>

            <div className="Memberlogin">
                <button type="submit" className="Member">Log in</button>
            </div>         
          </div>
        </form>
      </div>
    )
}