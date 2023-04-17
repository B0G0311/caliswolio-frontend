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
        <div class="row justify-content-md-center">
          <div class="col-lg-6">
                <h3 class="configured-page-heading">Welcome Back!</h3>
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
          <div class="configured-form-div justify-content-md-center">
            <div class="form-group row">  

                <label class=" col-sm-4 col-form-label"><h4>Email:</h4></label>
                <div class="form-group col-sm-12">
                  <input onChange={handleTextChange} type="text" className="Info form-control" id="Email" value={signInData.email.trim() || ''} required/>

                </div>
            </div>

            <div class="form-group row last-line-form">

                  <label class="col-sm-4 col-form-label"><h4>Password:</h4></label>
                  <div class="form-group col-sm-12">
                  <input onChange={handleTextChange} type="text" className="Info form-control" id="Password" value={signInData.password || ''} required/>
                </div>

            </div>
            <div class="last-line-form-button">
              <button type="submit" form="login_form" className="btn btn-outline-light btn-lg btn-block">Log in</button>
              </div>
          </div>
        </form>


      </div>
    )
}
