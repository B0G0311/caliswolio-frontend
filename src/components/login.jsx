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
        <form onSubmit={async (e) => {
              e.preventDefault()
              if (await validateCredentials()) {
                await catchUser()
                setActivePage('Level')
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

            <div className="Memberlogin">
                <button type="submit" className="Login_Button">Log in</button>
            </div>         
          </div>
        </form>
      </div>
    )
}