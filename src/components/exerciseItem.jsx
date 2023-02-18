import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';

function ExerciseItem() {
  const { selectedExercises, exerciseListIsLoaded, setActivePage } = useContext(WorkoutContext);
  const [openDropdown, setOpenDropdown] = useState(null);

  function toggleDropdown(exerciseId) {
    if (openDropdown === exerciseId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(exerciseId);
    }
  }

  if (exerciseListIsLoaded) {
    return (
      <div>
        {selectedExercises.exercises.map((exercise) => {
          const isOpen = openDropdown === exercise.exercise_id;

          return (
            <div key={exercise.exercise_id} className='exerciseItem'>
              <button className='exerciseName' onClick={(e) => {
                e.preventDefault()
                toggleDropdown(exercise.exercise_id)
                setActivePage('ExerciseList')
                }}>
                Exercise: {exercise.name}
              </button>
              {isOpen && (
                <div id={`dropdown_content_${exercise.exercise_id}`} className='dropdown_content'>
                  <a className='exerciseSets'>Sets: {exercise.sets}</a>
                  <a className='exerciseReps'>Reps: {exercise.reps}</a>
                  <a className='exerciseDescription'>{exercise.description}</a>
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

export default ExerciseItem;
