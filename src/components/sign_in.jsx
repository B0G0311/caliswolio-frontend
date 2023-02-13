import React from 'react'
import {Link } from 'react-router-dom'
import './css/sign_in.css';
export default function Sign_in()
{
  return(
  <div className='sign_in'>
    <div class="Settings_Button">      
        <section>
          <a href= "https://Google.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4_NptMgg3_8qKtMyxUufTojeMlT34mGvw&usqp=CAU" alt="Settings" id="Settings_Icon" width="50" height="50"></img></a>
        </section>
      </div>    

      <div class = "Swole photo">
        <section>
          <img src="https://cdn.shopify.com/s/files/1/0160/2840/1712/products/swole_stewie-min-fdyc.png?v=1631575412" alt="Very cool photo" id="Swole" width="300" height="300"></img>
        </section>
      </div>
      
      <div class = "button-group">
        <button type="button" id="Login"> Login</button>
        <br></br>      
        <button type="button" id ="Register"> Register</button>
        <br></br>
        
        <Link to="/terms">
          <button> use as guest</button>
        </Link>
      </div>   
  </div>
  )
}

