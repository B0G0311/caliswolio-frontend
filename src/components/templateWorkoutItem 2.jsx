import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';


function getLevelID(level_id) {
    if (level_id === 1) {
        return "Beginner"
    }
    else if (level_id === 2) {
        return "Intermediate"
    }
    else if (level_id === 3) {
        return "Advanced"
    }
}

function TemplateWorkoutItem() {
    const { setActivePage, templateWorkoutListIsLoaded, templateWorkoutItems } = useContext(WorkoutContext);
    const [openDropdown, setOpenDropdown] = useState(null);

    function toggleDropdown(templateId) {
        if (openDropdown === templateId) {
          setOpenDropdown(null);
        } else {
          setOpenDropdown(templateId);
        }
      }

    if (templateWorkoutListIsLoaded) {
        return (
        <div className='container-fluid page-ending-fluid-bottom-div-edits'>
            {templateWorkoutItems.map((workout) => {
            const isOpen = openDropdown === workout.workout.template_id;

            return (

                
                <div>
            <div class="row justify-content-md-center  edits-row-main-button-workout-completed">
                <div key={workout.workout.template_id} className='col-lg-12 d-flex justify-content-center edits-row-main-button-workout-completed '>
                <button className='btn btn-lg btn-block btn-outline-primary btn-edit-workout-color pt-4 pb-4' onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown(workout.workout.template_id)
                    setActivePage('TemplateWorkoutList')
                    }}>
                        Workout Name: &nbsp; 
                    {workout.workout.name}
                </button>
                </div>


                {isOpen && (
                    <div id={`dropdown_content_${workout.workout.template_id}`} className='row justify-content-md-center for-drop-down-prior-workout'>
                    <ul class="list-group for-drop-down-prior-workout">
                        {workout.exercises.map((exercise) => {
                            return(

                                <div class='edit-items-prior-workout w-100'>
                                             
                                        <li class="list-group-item bg-transparent border-0 mt-3  pt-0 pb-1">                                   
                                            <div class="input-group ">
                                            <div class="input-group-prepend">Exercise:</div>
                                            </div>
                                            <label class='form-control edits-for-form-control-prior-workout-dropdown' aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                            {exercise.name}
                                            </label>
                                            </li>
                                            </div>


                            )
                           
                        })}
                         </ul>
                          
                    
                    </div>
                )}
                </div>
                </div>
            );
            })}
        </div>
        );
    } else {
        return null;
    }
}

export default TemplateWorkoutItem;