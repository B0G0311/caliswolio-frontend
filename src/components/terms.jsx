import React from 'react';
import '../css/terms.css';
import {Link } from 'react-router-dom';

export default function Terms(){
  return(
    <div className="Terms">
    <form action="CaliSwolio_WorkoutLevels.html" method="post">
          <div className = "Safety_Terms">
            <section>
              <p>Wow! these are some great terms and conditions!</p>
              <br></br>
              <p><a href="Safety_TermsLink">Safety Terms</a></p>
              <br></br>
              <input type="checkbox" id="Agree_Safety" name="Terms&Cond" value="AcceptSaftey" required/>
              <label htmlFor="Agree_Safety"> Accept Safety Terms</label>
            </section>
        </div>

          <div className = "Liability_Terms">
            <section>
              <p> Liability terms, uh. Pretend there's stuff talking about liability here.</p>
              <br></br>
              <p><a href="Liability_TermsLink">Liability Terms</a></p>
              <br></br>
              <input type="checkbox" id="Agree_Liability" name="Terms&Cond" value="AcceptLiability" required/>
              <label htmlFor="Agree_Liability"> Accept Liability Terms</label>
              
              <div className = "GoForward">
                <Link to="/level">
                <button type="submit" name="Next" value="Next_page" className="btn-link">Next</button>
                </Link>
              </div>
            </section>
          </div>
      </form>
      
        <div className = "GoBack">
            <section>
              <Link to="/">
                <p>Back</p>
              </Link>
            </section>            
        </div>

        <div className="Settings_Button">      
            <section>
              <a href= "https://Google.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4_NptMgg3_8qKtMyxUufTojeMlT34mGvw&usqp=CAU" alt="Settings" id="Settings_Icon" width="50" height="50"></img></a>
            </section>
          </div> 
    
</div>
  )
}