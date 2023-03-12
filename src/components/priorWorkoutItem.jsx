import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/priorWorkoutItem.css';

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
        <div className='priorWorkoutItems'>
            {priorWorkoutItems.map((workout) => {
            const isOpen = openDropdown === workout.workout.prior_workout_id;

            return (
                <div key={workout.workout.prior_workout_id} className='workoutItem'>
                <button className='workoutName' onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown(workout.workout.prior_workout_id)
                    setActivePage('PriorWorkoutList')
                    }}>
                    {workout.workout.when_completed}: {getLevelID(workout.workout.level_id)} {workout.workout.category} Workout
                </button>
                {isOpen && (
                    <div id={`dropdown_content_${workout.workout.prior_workout_id}`} className='dropdown_content'>
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

export default PriorWorkoutItem;