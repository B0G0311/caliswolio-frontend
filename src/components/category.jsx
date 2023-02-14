import React from "react";
import '../css/category.css';

export default function Category()
{
    return(
        <div className="Category"> 
            <div className="Workout_Header">
                <h1>Workout Category</h1>
            </div>

            <form action="CaliSwolio_Signin.html" method="post">
                <div className ="Choose_Text">
                    <h2>Choose One: </h2>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Upper" name="Chosen_Category" required/>
                    <label htmlFor="Upper" title="Work on your upper body ya dummy">Upper Body</label>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Lower" name="Chosen_Category" required/>
                    <label htmlFor="Lower" title="The lower part of your body ya idiot">Lower Body</label>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Full" name="Chosen_Category" required/>
                    <label htmlFor="Full" title="The full body means the full body my g">Full Body</label>
                </div>
            </form>
        </div>
    )
}