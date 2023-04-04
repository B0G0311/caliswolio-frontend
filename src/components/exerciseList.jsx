import React from 'react';
import { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import ExerciseItem from './exerciseItem';
import PickDate from './datePicker';
import '../css/exerciseList.css'

function ExerciseList() {
  const { selectedLevel, selectedCategory, selectedExercises, setSelectedExercises, setSelectedCategory, setSelectedLevel, setExerciseListIsLoaded, isMember, setActivePage, postPriorWorkout, selectExercises, postTemplateWorkout, postFutureWorkout, saveData, setSaveData} = useContext(WorkoutContext)
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleTextChange = (e) => {
      setSaveData(e.target.value)
  }

    function rerollExercises() {
    setSelectedExercises({
      'exercises': []
    })

    selectExercises()
  }

  function toggleDropdown(exerciseId) {
    if (openDropdown === exerciseId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(exerciseId);
    }
  }

  if (Object.keys(selectedExercises.exercises).length === 0) {
    return (
      <div className='exerciseList'>
        <form className='exerciseListForm' id='exerciseForm'>
          <div className='Preference'>
            <h1>{selectedLevel}</h1>
            
            <h2>{selectedCategory}</h2>
            <br/><br/>
          </div>

          <p>There are no selected Exercises</p>
        </form>
        <div className='saveWrapper'>
          <button type="submit" id="save" className='saveWorkoutButton' form='exerciseForm'>Save workout</button>
        </div>

      </div>
    )
  }

  return (
    <div className='exerciseList'>
      <form className='exerciseListForm' id='exerciseForm'>
        <div className='Preference'>
          <h1 className='header'>{selectedLevel.name.toUpperCase()}</h1>
          
          <h2 className='header'>{selectedCategory.toUpperCase()}</h2>
          <br/><br/>
        </div>
        <ExerciseItem />
        
      </form>

      <div className='Pauls_Mic'></div>

      <div className='bottomButtonWrapper'>
        <button type='button' id='rerollAll' className='rerollEveryExercise' onClick={(e) => {
          e.preventDefault()
          rerollExercises()
          setActivePage('ExerciseList')
        }}>Reroll All Exercises</button>
      </div>

      <div className='completeWorkout'>
        <button type='button' id='complete' className='completeWorkoutButton' onClick={(e) => {
          e.preventDefault()
          if (isMember) {
            postPriorWorkout()
            setActivePage('MemberAccount')
          }
          else {
            setActivePage('SignIn')
            setSelectedLevel(
              {
                level_id: 0,
                name: ''
              }
            )
            setSelectedCategory('')
            setSelectedExercises({
              exercises: []
            })
            setExerciseListIsLoaded(false)
          }
        }}>Complete Workout</button>
      </div>

      <div className='lowerButtonWrapper'>
        <div>
        <button type='submit' id="save" className='saveWorkoutButton' form='exerciseForm' onClick={(e) => {
          e.preventDefault()
          if (isMember) {
            toggleDropdown("save")
          }
          else {
            alert('You must be a member to save the workout as a template. You can register to be a member using the "Register" button on the home page.')
            setActivePage('ExerciseList')
            setSelectedLevel(
              {
                level_id: 0,
                name: ''
              }
            )
            setSelectedCategory('')
            setSelectedExercises({
              exercises: []
            })
            setExerciseListIsLoaded(false)
          }
        }}>Save As Template</button>
        </div>
        <div>
        <button type='submit' id="saveforlater" className='saveWorkoutButton' form='exerciseForm' onClick={(e) => {
          e.preventDefault()
          if (isMember) {   
            toggleDropdown("saveforlater")
          }
          else {
            alert('You must be a member to save this workout for later.')
            setActivePage('ExerciseList')
          }
        }}>Save For Future Workout</button>
        </div>
        {/* Return a div if the button with the id of "saveforlater" is clicked */}
        <div>
          {openDropdown === "save" ? (
            <div className="infoPicker">
              <h3>Choose a name for your workout</h3>
              <input onChange={handleTextChange} type="text" id="workoutName" name="workoutName" placeholder="Workout Name" required></input>
              <button type='submit' id='save' className='saveWorkoutButton' form='exerciseForm' onClick={(e) => {
                e.preventDefault()
                if (isMember) {
                  postTemplateWorkout()
                  setActivePage('MemberAccount')
                }
                else {
                  alert('You must be a member to save the workout as a template. You can register to be a member using the "Register" button on the home page.')
                  setActivePage('ExerciseList')
                  setSelectedLevel(
                    {
                      level_id: 0,
                      name: ''
                    }
                  )
                  setSelectedCategory('')
                  setSelectedExercises({
                    exercises: []
                  })
                  setExerciseListIsLoaded(false)
                }
              }}>Save</button>
            </div>
          ) : null}
        </div>
        <div>
          {openDropdown === "saveforlater" ? (
            <div className="infoPicker">
              <h3>Choose a name for your workout</h3>
              <input onChange={handleTextChange} type="text" id="workoutName" name="workoutName" placeholder="Workout Name" required></input>
              <h3>Choose a date for your workout</h3>
              <PickDate />

              <button type='submit' id="saveforlater" className='saveWorkoutButton' form='exerciseForm' onClick={(e) => {
                e.preventDefault()
                if (isMember) {
                  postFutureWorkout()
                  setActivePage('MemberAccount')
                }
                else {
                  alert('You must be a member to save the workout for later. You can register to be a member using the "Register" button on the home page.')
                  setActivePage('ExerciseList')
                  setSelectedLevel(
                    {
                      level_id: 0,
                      name: ''
                    }
                  )
                  setSelectedCategory('')
                  setSelectedExercises({
                    exercises: []
                  })
                  setExerciseListIsLoaded(false)
                }
              }}>Save For Future Workout</button>

            </div>
          ) : null}
          </div>
      </div>
    </div>
  );
};

export default ExerciseList;