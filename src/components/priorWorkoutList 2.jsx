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
        <div class="container-fluid page-container-configuration-workoutlist ">
            <div class="row justify-content-md-center">
                <div class="col-lg-8 d-flex justify-content-center">
                    <h3 class="configured-page-heading">Workout Log</h3>
                </div>
                </div>
                <div class="row justify-content-md-center"></div>
                <div class="col-lg-12 d-flex justify-content-center workout-log-div-size-edit">
                    <form class="workout-log-div-size-edit" id='priorWorkoutForm'>
                
                        
                    
                
                
            
                
                <PriorWorkoutItem />
            </form>
            </div>
            </div>
        
    )
}  


export default PriorWorkoutList;