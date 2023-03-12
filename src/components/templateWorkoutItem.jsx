import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/exerciseItem.css';

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
                    {getLevelID(workout.workout.level_id)} {workout.workout.category} Workout
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