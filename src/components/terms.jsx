import React, { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';

export default function Terms(){
  const { setActivePage } = useContext(WorkoutContext)

  return(
    <div className="Terms">
    <form id="terms_form" action="CaliSwolio_WorkoutLevels.html" method="post" onSubmit={(e) => {
      e.preventDefault()
      setActivePage('Level')
    }}>
          <div className="container-fluid page-container-configuration">

          <div className="row justify-content-md-center">
              <div className="col-lg-6">
                <h3 className="terms-conditions">Terms and Conditions</h3>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col-lg-5">
                <h4>By using this application, I understand that there are risks involved with exercising and I should use caution while exercising.</h4>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col-lg-5 safety-checkbox">
                <input type="checkbox" id="Agree_Safety" name="Terms&Cond" value="AcceptSaftey" required/>
                <label htmlFor="Agree_Safety">&nbsp;&nbsp;&nbsp;I agree</label>
              </div>
            </div>
            
            <div className="row justify-content-md-center">
              <div className="col-lg-5">
                <h4>By using this application, I accept full liability of the risks involved with exercising and release CaliSwolio of liability.</h4>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col-lg-5 safety-checkbox">
                <input type="checkbox" id="Agree_Liability" name="Terms&Cond" value="AcceptSaftey" required/>
                <label htmlFor="Agree_Liability">&nbsp;&nbsp;&nbsp;I agree</label>
              </div>
            </div>
            
            <div className="row justify-content-md-center">
              <div className="col-lg-5 d-flex justify-content-center terms-button-div">
                <button type="submit" form="terms_form" className="btn btn-outline-light btn-lg btn-block terms-button">Continue</button>
              </div>
            </div>

            </div>
            </form>
          </div>
          
          )
  }