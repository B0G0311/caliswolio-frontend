import React from 'react';
import '../css/level.css';

export default function Level()
{
    return(
        <div className="Level">
            <div className ="Workout_Title">
                <h1>Workout Level</h1>
            </div>
        
            <form action="Caliswolio_Category.html" method="post">        
                <div className="Choose_Text">
                  <section>
                     <h2>Choose One: </h2>
                     <br></br>       
                     <br></br>     
                     <input type="radio" id="Beginner" name="Choose_Level" value="Option_Beginner" required/>
                     <label htmlFor="Beginner" title="Choose this if you are new and want to do Calisthenics">Beginner</label>
                     <br></br>           
                     <br></br> 
                     <input type="radio" id="Intermediate" name="Choose_Level" value="Option_Intermediate" required/>
                     <label htmlFor="Intermediate" title="Choose this one if you know the basics but aren't ready for advanced things">Intermediate</label>
                     <br></br>           
                     <br></br> 
                     <input type="radio" id="Advanced" name="Choose_Level" value="Option_Advanced" required/>
                     <label htmlFor="Advanced" title="Choose this if you know your stuff and want to do more advanced exercises">Advanced</label>
                  </section>
                </div>
            </form>
        </div>
    )
}