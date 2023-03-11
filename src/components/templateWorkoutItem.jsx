import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/exerciseItem.css';

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
        <div className='templateWorkoutItems'>
            {templateWorkoutItems.map((workout) => {
            const isOpen = openDropdown === workout.workout.template_id;

            return (
                <div key={workout.workout.template_id} className='workoutItem'>
                <button className='workoutName' onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown(workout.workout.template_id)
                    setActivePage('TemplateWorkoutList')
                    }}>
                    {workout.workout.category} Workout: {workout.workout.name}
                </button>
                {isOpen && (
                    <div id={`dropdown_content_${workout.workout.template_id}`} className='dropdown_content'>
                    <div className='workoutView'>
                        {workout.exercises.map((exercise) => {
                            return(
                            <p key={exercise.exercise_id} className='exerciseName'>Exercise: {exercise.name}</p>
                            )
                        })}
                    </div>
                    </div>
                )}
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