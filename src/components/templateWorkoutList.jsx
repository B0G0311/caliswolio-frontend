import React from 'react';
import { useContext } from 'react';
import TemplateWorkoutItem from './templateWorkoutItem';
import WorkoutContext from '../context/workoutContext';

function TemplateWorkoutList(){
    const { templateWorkoutItems } = useContext(WorkoutContext)

    if (Object.keys(templateWorkoutItems).length === 0) {
        return (
            <div className="templateWorkoutList">
                <p>You have no prior workouts to display</p>
            </div>
        )}

    return(
        <div className="workoutList">
            <form className='templateWorkoutListForm' id='templateWorkoutForm'>
                <div className="header">
                    <h1 className='form-title'>Workout Log</h1>
                    <br/><br/>
                </div>
                <TemplateWorkoutItem />
            </form>
        </div>
    )
}  


export default TemplateWorkoutList;