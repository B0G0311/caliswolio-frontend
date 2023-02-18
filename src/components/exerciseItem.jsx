import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/exerciseItem.css';

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
      <div className='exerciseListItems'>
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
                  <p className='exerciseSets'>Sets: {exercise.sets}</p>
                  <p className='exerciseReps'>Reps: {exercise.reps}</p>
                  <p className='exerciseDescription'>{exercise.description}</p>
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
