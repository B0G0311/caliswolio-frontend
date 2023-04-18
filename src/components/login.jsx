import React, {useContext} from "react";
import WorkoutContext from "../context/workoutContext";


export default function Login()
{
  const { catchUser, setActivePage, validateCredentials, signInData, setSignInData} = useContext(WorkoutContext)

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

      <div className="container-fluid page-container-configuration justify-content-md-center">
        <div className="row justify-content-md-center">
          <div className="col-lg-6">
                <h3 className="configured-page-heading">Welcome Back!</h3>
          </div>
        </div>

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
          <div className="configured-form-div justify-content-md-center">
            <div className="form-group row">  

                <label className=" col-sm-4 col-form-label"><h4>Email:</h4></label>
                <div className="form-group col-sm-12">
                  <input onChange={handleTextChange} type="text" className="Info form-control" id="Email" value={signInData.email.trim() || ''} required/>

                </div>
            </div>

            <div className="form-group row last-line-form">

                  <label className="col-sm-4 col-form-label"><h4>Password:</h4></label>
                  <div className="form-group col-sm-12">
                  <input onChange={handleTextChange} type="text" className="Info form-control" id="Password" value={signInData.password || ''} required/>
                </div>

            </div>
            <div className="last-line-form-button">
              <button type="submit" form="login_form" className="btn btn-outline-light btn-lg btn-block">Log in</button>
              </div>
          </div>
        </form>


      </div>
    )
}
