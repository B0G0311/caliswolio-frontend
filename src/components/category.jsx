import React from "react";
import { useContext, useEffect } from "react";
import WorkoutContext from "../context/workoutContext";
import '../css/category.css';

function Category()
{
    const { setSelectedCategory, selectExercises, setActivePage, exerciseListIsLoaded } = useContext(WorkoutContext)
    
    useEffect(() => {
        if(exerciseListIsLoaded) {
            setActivePage('ExerciseList')
        }
    }, [exerciseListIsLoaded, setActivePage])
    
    return(
        <div className="Category"> 
            <div className="Workout_Header">
                <h1>Workout Category</h1>
            </div>

            <form id="submit_category" onSubmit={(e) => {
                e.preventDefault()
                selectExercises()
            }}>
                <div className ="Choose_Text">
                    <h2>Choose One: </h2>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Upper" name="Chosen_Category" onChange={() => setSelectedCategory('Upper Body')} required/>
                    <label htmlFor="Upper" title="Work on your upper body ya dummy">Upper Body</label>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Lower" name="Chosen_Category" onChange={() => setSelectedCategory('Lower Body')} required/>
                    <label htmlFor="Lower" title="The lower part of your body ya idiot">Lower Body</label>
                    <br></br>
                    <br></br>
                    <input type="radio" id="Full" name="Chosen_Category" onChange={() => setSelectedCategory('Full Body')} required/>
                    <label htmlFor="Full" title="The full body means the full body my g">Full Body</label>
                </div>
            </form>

            <div className="SubmitButton">
                <button type="submit" form="submit_category" className="Category_Submit">Confirm Category</button>
            </div> 
        </div>
    )
}

export default Category