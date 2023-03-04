import React from 'react';
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import ExerciseItem from './exerciseItem';
import '../css/exerciseList.css'

function ExerciseList() {
  const { selectedLevel, selectedCategory, selectedExercises, setCompletedWorkout, user, isMember, setActivePage } = useContext(WorkoutContext)

  function buildWorkout() {
    const date = new Date()
    let [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];

    if (month < 10) month = '0' + month
    
    if (day < 10) day = '0' + day

    let currentDate = `${day}/${month}/${year}`

    console.log(currentDate)

    setCompletedWorkout({
      'member_id': user.member_id,
      'level_id': selectedLevel,
      'category_id': selectedCategory,
      'when_completed': currentDate
    })
  }

  if (Object.keys(selectedExercises).length === 0) {
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

      <div classname='Pauls Mic'></div>

      <div className='bottomButtonWrapper'>
        <button type='button' id='rerollAll' className='rerollEveryExercise'>Reroll All Exercises</button>
      </div>

      <div className='completeWorkout'>
        <button type='button' id='complete' className='completeWorkoutButton' onClick={(e) => {
          e.preventDefault()
          buildWorkout()
          if (isMember) {
            setActivePage('memberAccount')
          }
          else {
            setActivePage('SignIn')
          }
        }}>Complete Workout</button>
      </div>

      <div className='lowerButtonWrapper'>
        <button type='submit' id="save" className='saveWorkoutButton' form='exerciseForm'>Save workout</button>
      </div>
    </div>
  );
};

export default ExerciseList;