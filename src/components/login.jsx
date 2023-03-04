import React, {useContext} from "react";
import WorkoutContext from "../context/workoutContext";
import"../css/login.css"

export default function Login()
{
  const { catchUser, setActivePage, validateCredentials, signInData, setSignInData } = useContext(WorkoutContext)

  const handleTextChange = (e) => {
    if (e.target.id === 'Email') {
      setSignInData(prevState => ({
        ...prevState,
        email: e.target.value,
      }))
    }
    else if (e.target.id === 'Password') {
      setSignInData(prevState => ({
        ...prevState,
        password: e.target.value
      }))
    }
  }

  return(
      <div className="Login">
        <div className="Login_Title">
          <h1>Welcome Back!</h1>
          </div>
        <h2>Please Enter:</h2>
        <form id="login_form" onSubmit={async (e) => {
              e.preventDefault()
              if (await validateCredentials()) {
                await catchUser()
                setActivePage('MemberAccount')
              }
              else {
                alert("This email is not associated with an account. Please try again.")
                setActivePage('Login')
              }
            }
        }>
          <div>
          
            <label> Email: 
                <input onChange={handleTextChange} type="text" className="Info" id="Email" value={signInData.email || ''} required/>
                <br/><br/>
            </label>

            <label> Password: 
                <input onChange={handleTextChange} type="text" className="Info" id="Password" value={signInData.password || ''} required/>
                <br/><br/>
            </label>       
          </div>
        </form>
        <div className="Memberlogin">
                <button type="submit" form="login_form" className="Login_Button">Log in</button>
        </div>  
      </div>
    )
}