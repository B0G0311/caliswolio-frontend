import React, {useContext, useState} from "react";
import WorkoutContext from "../context/workoutContext";
import"../css/login.css"

export default function Login()
{
  const [formData, setFormData] = useState([
    {
      email: ' ',
      password: ' '
    }
  ])

  const { catchUser, setActivePage } = useContext(WorkoutContext)

  const handleTextChange = (e) => {
    if (e.target.id === 'Email') {
      setFormData(prevState => ({
        ...prevState,
        email: e.target.value,
      }))
    }
    else if (e.target.id === 'Password') {
      setFormData(prevState => ({
        ...prevState,
        password: e.target.value
      }))
    }
  }

  return(
      <div className="Login">
        <form onSubmit={(e) => {
              e.preventDefault()
              catchUser(formData.email, formData.password)
              setActivePage('Level')
            }
        }>
          <div className="info">
            <label> Email: 
                <input onChange={handleTextChange} type="text" className="Member" id="Email" value={formData.email || ''} required/>
                <br/><br/>
            </label>

            <label> Password: 
                <input onChange={handleTextChange} type="text" className="Member" id="Password" value={formData.password || ''} required/>
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