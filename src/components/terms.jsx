import React, { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/terms.css';

export default function Terms(){
  const { setActivePage } = useContext(WorkoutContext)

  return(
    <div className="Terms">
    <form id="terms_form" action="CaliSwolio_WorkoutLevels.html" method="post" onSubmit={(e) => {
      e.preventDefault()
      setActivePage('Level')
    }}>
          <div className = "Safety_Terms">
            <section>
              <p>Wow! these are some great terms and conditions!</p>
              <br></br>
              <p><a href={"/"}>Safety Terms</a></p>
              <br></br>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Agree_Safety" name="Terms&Cond" value="AcceptSaftey" required/>
                <svg viewBox="0 0 35.6 35.6">
                  <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                  <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                  <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
              </div>
              <label htmlFor="Agree_Safety"> Accept Safety Terms</label>
            </section>
        </div>

          <div className = "Liability_Terms">
            <section>
              <p> Liability terms, uh. Pretend there's stuff talking about liability here.</p>
              <br></br>
              <p><a href="/">Liability Terms</a></p>
              <br></br>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="Agree_Liability" name="Terms&Cond" value="AcceptSaftey" required/>
                <svg viewBox="0 0 35.6 35.6">
                  <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                  <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                  <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
              </div>
              <label htmlFor="Agree_Liability"> Accept Liability Terms</label>
            </section>
          </div>
      </form>
      <div className="Submit_Button">
          <button type="submit" form="terms_form" className="Terms_Submit">Log in</button>
      </div>          
</div>
  )
}