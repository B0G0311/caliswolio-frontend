import React from 'react';
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import ExerciseItem from './exerciseItem';
import '../css/exerciseList.css'

function ExerciseList() {
  const { selectedLevel, selectedCategory, selectedExercises } = useContext(WorkoutContext)

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

      <div className='rerollExercise'>
        <button type='button' id='rerollAll' className='rerollEveryExercise'>Reroll All Exercises</button>
      </div>

      <div className='completeWorkout'>
        <button type='button' id='complete' className='completeWorkoutButton'>Complete Workout</button>
      </div>

      <div className='saveWrapper'>
        <button type="submit" id="save" className='saveWorkoutButton' form='exerciseForm'>Save workout</button>
      </div>
    </div>
  );
};

export default ExerciseList;