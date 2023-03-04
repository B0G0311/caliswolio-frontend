import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/exerciseItem.css';

function ExerciseItem() {
  const { selectedExercises, setSelectedExercises, exerciseListIsLoaded, setActivePage } = useContext(WorkoutContext);
  const [openDropdown, setOpenDropdown] = useState(null);

  function toggleDropdown(exerciseId) {
    if (openDropdown === exerciseId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(exerciseId);
    }
  }

  function changeReps(exerciseID, num) {
    let newObject = selectedExercises.exercises
    newObject.forEach(exercise => {
      if (exercise.exercise_id === exerciseID) {
        exercise.reps += num
      }
    })

    setSelectedExercises({
      'exercises': newObject
    })
  }

  function changeSets(exerciseID, num) {
    let newObject = selectedExercises.exercises
    newObject.forEach(exercise => {
      if (exercise.exercise_id === exerciseID) {
        exercise.sets += num
      }
    })

    setSelectedExercises({
      'exercises': newObject
    })
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
                  <div className='exerciseEdit'>
                    <p className='exerciseSets'>Sets: {exercise.sets}</p>
                    <button type='button' className='increaseSets' id='moreSets'  onClick={(e) => {
                      e.preventDefault()
                      changeSets(exercise.exercise_id, 1)
                      setActivePage('ExerciseList')
                    }}>+</button>
                    <button type='button' className='decreaseSets' id='lessSets'  onClick={(e) => {
                      e.preventDefault()
                      changeSets(exercise.exercise_id, -1)
                      setActivePage('ExerciseList')
                    }}>-</button>
                  </div>
                  
                  <div className='exerciseEdit'>
                    <p className='exerciseReps'>Reps: {exercise.reps}</p>
                      <button type='button' className='increaseReps' id='moreReps'  onClick={(e) => {
                      e.preventDefault()
                      changeReps(exercise.exercise_id, 1)
                      setActivePage('ExerciseList')
                    }}>+</button>
                      <button type='button' className='decreaseReps' id='lessReps'   onClick={(e) => {
                      e.preventDefault()
                      changeReps(exercise.exercise_id, -1)
                      setActivePage('ExerciseList')
                    }}>-</button>
                  </div>
                  
                  <p className='exerciseDescription'>{exercise.description}</p>
                  <p><button type='button' id='reroll' className='rerollExercise'>Reroll Exercise</button></p>
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
