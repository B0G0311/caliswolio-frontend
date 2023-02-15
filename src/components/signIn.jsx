import React from 'react';
import {Link } from 'react-router-dom';
import '../css/signIn.css';
export default function Sign_in()
{
  return(
  <div className='sign_in'>
    <div className="Settings_Button">      
        <section>
          <a href= "https://Google.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4_NptMgg3_8qKtMyxUufTojeMlT34mGvw&usqp=CAU" alt="Settings" id="Settings_Icon" width="50" height="50"></img></a>
        </section>
      </div>    

      <div className = "Swole photo">
        <section>
          <img src="https://cdn.shopify.com/s/files/1/0160/2840/1712/products/swole_stewie-min-fdyc.png?v=1631575412" alt="Very cool photo" id="Swole" width="300" height="300"></img>
        </section>
      </div>
      
      <div className = "button-group">
        <button type="button" id="Login" className='Sign-in_Button'> Login</button>
        <br></br>      
        <button type="button" id ="Register" className='Sign-in_Button'> Register</button>
        <br></br>
        
        <Link to="/terms">
          <button className='Sign-in_Button'> Use as guest</button>
        </Link>
      </div>   
  </div>
  )
}

