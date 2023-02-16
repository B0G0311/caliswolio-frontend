import React from 'react';
import { useContext } from 'react';
import { WorkoutContext } from '../context/workoutContext';
import '../css/signIn.css';

function SignIn()
{
  const { setActivePage } = useContext(WorkoutContext)

  return(
  <div className='sign_in'>
      <div className = "Swole photo">
        <section>
          <img src="https://cdn.shopify.com/s/files/1/0160/2840/1712/products/swole_stewie-min-fdyc.png?v=1631575412" alt={"Stewie"} id="Swole" width="300" height="300"></img>
        </section>
      </div>
      
      <div className = "button-group">
        <button type="button" id="Login"> Login</button>
        <br></br>      
        <button type="button" id ="Register"> Register</button>
        <br></br>
        
        <button onClick={() => setActivePage('/terms')}>Use as guest</button>
      </div>   
  </div>
  )
}

export default SignIn;

