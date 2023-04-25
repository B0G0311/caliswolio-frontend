import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';

function TemplateWorkoutItem() {
    const { setActivePage, templateWorkoutListIsLoaded, templateWorkoutItems, openTemplateWorkout } = useContext(WorkoutContext);
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
                    <div className="row justify-content-md-center  edits-row-main-button-workout-completed">
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
                    <ul className="list-group for-drop-down-prior-workout">
                        {workout.exercises.map((exercise) => {
                            return(

                                <div className='edit-items-prior-workout w-100'>

                                        <li className="list-group-item bg-transparent border-0 mt-3  pt-0 pb-1">
                                            <div className="input-group ">
                                            <div className="input-group-prepend">Exercise:</div>
                                            </div>
                                            <label className='form-control edits-for-form-control-prior-workout-dropdown' aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                            {exercise.name}
                                            </label>
                                            </li>
                                            </div>
                            )
                        })}
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4 d-flex justify-content-center">
                                <button type='button' id='openWorkout' className='btn btn-outline-secondary btn-lg btn-block button-color-change-bottom-list' onClick={(e) => {
                                e.preventDefault()
                                openTemplateWorkout(workout.workout.template_id)
                                }}>Edit/Use Workout</button>
                            </div>
                        </div>
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
