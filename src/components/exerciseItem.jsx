import React, { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';


function ExerciseItem() {
  const { selectedExercises, setSelectedExercises, exerciseListIsLoaded, setActivePage, rerollExercise } = useContext(WorkoutContext);
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

  function reroll(exerciseID) {
    let newIDs = []
    selectedExercises.exercises.forEach((exercise) => {
      newIDs.push(exercise.exercise_id)
    })
    let newObject = selectedExercises.exercises
    newObject.forEach(exercise => {
      if (exercise.exercise_id === exerciseID) {
        let newExercise = rerollExercise(exercise, newIDs)

        exercise.exercise_id = newExercise.exercise_id
        exercise.name = newExercise.name
        exercise.category = newExercise.category
        exercise.level_id = newExercise.level_id
        exercise.description = newExercise.description
        exercise.sets = 3
        exercise.reps = 10
      }
    })

    setSelectedExercises({
      'exercises': newObject
    })


  }

  if (exerciseListIsLoaded) {
    return (
            <div className='container-fluid exercise-items-page-workouts'>
        {selectedExercises.exercises.map((exercise) => {
          const isOpen = openDropdown === exercise.exercise_id;

          return (
            <div key={'NoKeyNeeded'}>
              <div key={'NoKeyNeeded2'} className="row justify-content-md-center">
            <div key={exercise.exercise_id} className='col-lg-8 d-flex justify-content-center '>
              <button className=' btn btn-lg btn-block btn-outline-primary btn-edit-workout-color pt-4 pb-4' onClick={(e) => {
                e.preventDefault()
                toggleDropdown(exercise.exercise_id)
                setActivePage('ExerciseList')
                }}>
                Exercise: {exercise.name}
              </button>
              </div>
              </div>

              {isOpen && (
                <div id={`dropdown_content_${exercise.exercise_id}`} className="row justify-content-md-center ">
                  <div className="col-lg-8 d-flex justify-content-center ">
                    <div className='exercise-items-edits-cols'>
                    <div className='exercise-items-edits-cols-test'>
                    <p className='exercise-items-edits-cols-top'>Sets: &nbsp; &nbsp;

                    {exercise.sets}  &nbsp; &nbsp;


                    <button type='button' className='' id='moreSets'  onClick={(e) => {
                      e.preventDefault()
                      changeSets(exercise.exercise_id, 1)
                      setActivePage('ExerciseList')
                    }}>+</button>
                    <button type='button' className='' id='lessSets'  onClick={(e) => {
                      e.preventDefault()
                      changeSets(exercise.exercise_id, -1)
                      setActivePage('ExerciseList')
                    }}>-</button> </p>
                 </div>
                 </div>
                  </div>


                  <div className="col-lg-8 d-flex justify-content-center">
                  <div className='exercise-items-edits-cols'>
                  <div className='exercise-items-edits-cols-test'>
                    <p className='exercise-items-edits-cols-middle'>Reps: &nbsp; {exercise.reps} &nbsp;
                      <button type='button' className='' id='moreReps'  onClick={(e) => {
                      e.preventDefault()
                      changeReps(exercise.exercise_id, 1)
                      setActivePage('ExerciseList')
                    }}>+</button>
                      <button type='button' className='' id='lessReps'   onClick={(e) => {
                      e.preventDefault()
                      changeReps(exercise.exercise_id, -1)
                      setActivePage('ExerciseList')
                    }}>-</button> </p>
                  </div>
                  </div>
                  </div>


                  <div className="col-lg-8 d-flex justify-content-center">
                  <div className='exercise-items-edits-cols-bottom-button'>
                  <p className=''>{exercise.description}</p>
                  <div className='exercise-items-edits-cols-test-button'>
                    <button type='button' id='reroll' className='btn btn-light ' onClick={(e) => {
                      e.preventDefault()
                      reroll(exercise.exercise_id)
                      setActivePage('ExerciseList')
                    }}>Reroll Exercise</button></div>
                </div>
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

export default ExerciseItem;
