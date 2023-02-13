import React from "react";
import '../css/category.css';
import {Link } from 'react-router-dom';

export default function Category()
{
    return(
        <div className="Category"> 
            <div class="Workout_Header">
                <h1>Workout Category</h1>
            </div>

            <form action="CaliSwolio_Signin.html" method="post">
                <div class="Choose_Text">
                    <h2>Choose One: </h2>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Upper" name="Chosen_Category" required/>
                    <label for="Upper" title="Work on your upper body ya dummy">Upper Body</label>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Lower" name="Chosen_Category" required/>
                    <label for="Lower" title="The lower part of your body ya idiot">Lower Body</label>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Full" name="Chosen_Category" required/>
                    <label for="Full" title="The full body means the full body my g">Full Body</label>
                </div>

                <div class = "GoForward">
                    <button type="submit" name="Next" value="Next_page" class="btn-link">Next </button>
                </div>
            </form>

            <div class = "GoBack">
                <section>
                <Link to="/level">
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