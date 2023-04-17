import React from 'react';
import { useContext } from 'react';
import TemplateWorkoutItem from './templateWorkoutItem';
import WorkoutContext from '../context/workoutContext';


function TemplateWorkoutList(){
    const { templateWorkoutItems } = useContext(WorkoutContext)

    if (Object.keys(templateWorkoutItems).length === 0) {
        return (
            <div class="container-fluid page-container-configuration-workoutlist ">
            <div class="row justify-content-md-center">
                <div class="col-lg-8 d-flex justify-content-center">
                <h3 class="configured-page-heading">Workout Templates</h3>
                </div>
                </div>
                <div class="row justify-content-md-center"></div>
            <div class="col-lg-12 d-flex justify-content-center workout-log-div-size-edit"><h4>You have no templates to display</h4></div>
            <div class="w-100"><br></br><br></br></div>
                
            </div>
        )}

    return(
        <div class="container-fluid page-container-configuration-workoutlist ">
        <div class="row justify-content-md-center">
            <div class="col-lg-8 d-flex justify-content-center">
            <h3 class="configured-page-heading">Workout Templates</h3>
            </div>
            </div>
            <div class="row justify-content-md-center"></div>
            <div class="col-lg-12 d-flex justify-content-center workout-log-div-size-edit">
                    <form className='workout-log-div-size-edit' id='templateWorkoutForm'>
                
                   
                    
                
                <TemplateWorkoutItem />
            </form>
            </div>
        </div>
       
      
    )
}  


export default TemplateWorkoutList;