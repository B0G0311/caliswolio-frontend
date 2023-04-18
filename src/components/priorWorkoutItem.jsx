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

function PriorWorkoutItem() {
    const { setActivePage, priorWorkoutListIsLoaded, priorWorkoutItems } = useContext(WorkoutContext);
    const [openDropdown, setOpenDropdown] = useState(null);

    function toggleDropdown(workoutId) {
        if (openDropdown === workoutId) {
          setOpenDropdown(null);
        } else {
          setOpenDropdown(workoutId);
        }
      }

    if (priorWorkoutListIsLoaded) {
        return (

        <div className='container-fluid page-ending-fluid-bottom-div-edits'>
            {priorWorkoutItems.map((workout) => {
            const isOpen = openDropdown === workout.workout.prior_workout_id;

            return (
                <div>
            <div className="row justify-content-md-center  edits-row-main-button-workout-completed">
                <div key={workout.workout.prior_workout_id} className='col-lg-12 d-flex justify-content-center edits-row-main-button-workout-completed '>
                <button className='btn btn-lg btn-block btn-outline-primary btn-edit-workout-color pt-4 pb-4' onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown(workout.workout.prior_workout_id)
                    setActivePage('PriorWorkoutList')
                    }}>
                    {workout.workout.when_completed}: {getLevelID(workout.workout.level_id)} {workout.workout.category} Workout
                </button>
                </div>



                {isOpen && (
                    <div id={`dropdown_content_${workout.workout.prior_workout_id}`} className='row justify-content-md-center for-drop-down-prior-workout'>
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

export default PriorWorkoutItem;
