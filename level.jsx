import React from 'react';
import './level.css';
import {Link } from 'react-router-dom';

export default function Level()
{
    return(
        <div className="Level">
            <div class = "Workout_Title">
                <h1>Workout Level</h1>
            </div>
        
            <form action="Caliswolio_Category.html" method="post">        
                <div class="Choose_Text">
                    <section>
                    <h2>Choose One: </h2>
                    <br></br>            
                    <input type="radio" id="Beginner" name="Choose_Level" value="Option_Beginner" required> </input>
                    <label for="Beginner" title="Choose this if you are new and want to do Calisthenics">Beginner</label>
                    <br></br>
            
                    <input type="radio" id="Intermediate" name="Choose_Level" value="Option_Intermediate" required> </input>
                    <label for="Intermediate" title="Choose this one if you know the basics but aren't ready for advanced things">Intermediate</label>
                    <br></br>
            
                    <input type="radio" id="Advanced" name="Choose_Level" value="Option_Advanced" required> </input>
                    <label for="Advanced" title="Choose this if you know your stuff and want to do more advanced exercises">Advanced</label>
                    </section>
                </div>

                <div class = "GoForward">    
                    <section>
                        <Link to="/category"> 
                        <button type="submit" name="Next" value="Next_page" class="btn-link">Next </button>
                        </Link>    
                    </section>   
                </div>
            </form>

            <div class = "GoBack">
                <section>
                    <Link to="/">
                        <p>Back</p>
                    </Link>
                </section>
            </div>

            <div class="Settings_Button">      
                <section>
                    <a href= "https://Google.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4_NptMgg3_8qKtMyxUufTojeMlT34mGvw&usqp=CAU" alt="Settings" id="Settings_Icon" width="50" height="50"></img></a>
                </section>
            </div> 
        </div>
    )
}