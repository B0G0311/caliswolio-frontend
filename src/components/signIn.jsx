import React from 'react';
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/signIn.css';

function SignIn()
{
  const { setActivePage } = useContext(WorkoutContext)

  return(
    <body>
      <div className='sign_in'>
          <div className = "Swole photo">
            <section>
              <img src="https://cdn.shopify.com/s/files/1/0160/2840/1712/products/swole_stewie-min-fdyc.png?v=1631575412" alt={"Stewie"} id="Swole" width="300" height="300"></img>
            </section>
          </div>
          
          <div className = "button-group">
            <div className='wrap'>
              <button onClick={() => setActivePage('Login')} type="button" id="Login" className='Sign-in_Button'> Login</button>
            </div>
            <br></br>
            <div className='wrap'>     
              <button onClick={() => setActivePage('Register')} type="button" id ="Register" className='Sign-in_Button'> Register</button>
            </div> 
            <br></br>
            <div className='wrap'> 
              <button onClick={() => setActivePage('Terms') } className='Sign-in_Button'>Use as guest</button>
            </div>
          </div>   
      </div>
    </body>
  )
}

export default SignIn;

