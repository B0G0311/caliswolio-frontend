import React from 'react';
import { useContext } from 'react';
import PriorWorkoutItem from './priorWorkoutItem';
import WorkoutContext from '../context/workoutContext';

function PriorWorkoutList(){
    const { priorWorkoutItems } = useContext(WorkoutContext)

    if (Object.keys(priorWorkoutItems).length === 0) {
        return (
            <div className="priorWorkoutList">
                <p>You have no prior workouts to display</p>
            </div>
        )}

    return(
        <div className="workoutList">
            <form className='priorWorkoutListForm' id='priorWorkoutForm'>
                <div className="header">
                    <h1 className='form-title'>Workout Log</h1>
                    <br/><br/>
                </div>
                <PriorWorkoutItem />
            </form>
        </div>
    )
}  


export default PriorWorkoutList;