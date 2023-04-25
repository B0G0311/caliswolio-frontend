import React, { useEffect } from 'react';
import { useContext } from 'react';
import TemplateWorkoutItem from './templateWorkoutItem';
import WorkoutContext from '../context/workoutContext';

function TemplateWorkoutList(){
    const { templateWorkoutItems, templateExerciseListIsLoaded, setActivePage, workoutName, exerciseListIsLoaded } = useContext(WorkoutContext)

    useEffect((e) => {
        if(templateExerciseListIsLoaded && workoutName !== '' && exerciseListIsLoaded){
            setActivePage('ExerciseList')
        }
    }, [templateExerciseListIsLoaded, workoutName, exerciseListIsLoaded, setActivePage]) 

    if (Object.keys(templateWorkoutItems).length === 0) {
        return (
            <div className="container-fluid page-container-configuration-workoutlist ">
                <div className="row justify-content-md-center">
                    <div className="col-lg-8 d-flex justify-content-center">
                        <h3 className="configured-page-heading">Workout Templates</h3>
                    </div>
                </div>
                <div className="row justify-content-md-center"></div>
                <div className="col-lg-12 d-flex justify-content-center workout-log-div-size-edit"><h4>You have no templates to display</h4></div>
                <div className="w-100"><br></br><br></br></div> 
            </div>
        )}

    return(
        <div className="container-fluid page-container-configuration-workoutlist ">
        <div className="row justify-content-md-center">
            <div className="col-lg-8 d-flex justify-content-center">
                <h3 className="configured-page-heading">Workout Templates</h3>
            </div>
        </div>
        <div className="row justify-content-md-center"></div>
            <div className="col-lg-12 d-flex justify-content-center workout-log-div-size-edit">
                <form className='workout-log-div-size-edit' id='templateWorkoutForm'>
                    <TemplateWorkoutItem />
                </form>
            </div>
     </div>
    )
}  


export default TemplateWorkoutList;