import React from 'react';
import { useContext } from 'react';
import PriorWorkoutItem from './priorWorkoutItem';
import WorkoutContext from '../context/workoutContext';


function PriorWorkoutList(){
    const { priorWorkoutItems } = useContext(WorkoutContext)

    if (Object.keys(priorWorkoutItems).length === 0) {
        return (
            <div className="container-fluid page-container-configuration-workoutlist ">
            <div className="row justify-content-md-center">
                <div className="col-lg-8 d-flex justify-content-center">
                <h3 className="configured-page-heading">Workout Log</h3>
                </div>
                </div>
                <div className="row justify-content-md-center"></div>
            <div className="col-lg-12 d-flex justify-content-center workout-log-div-size-edit"><h4>You have no workouts to display</h4></div>
            <div className="w-100"><br></br><br></br></div>
                
            </div>
        )}

    return(
        <div className="container-fluid page-container-configuration-workoutlist ">
            <div className="row justify-content-md-center">
                <div className="col-lg-8 d-flex justify-content-center">
                    <h3 className="configured-page-heading">Workout Log</h3>
                </div>
                </div>
                <div className="row justify-content-md-center"></div>
                <div className="col-lg-12 d-flex justify-content-center workout-log-div-size-edit">
                    <form className="workout-log-div-size-edit" id='priorWorkoutForm'>







                <PriorWorkoutItem />
            </form>
            </div>
            </div>

    )
}


export default PriorWorkoutList;
