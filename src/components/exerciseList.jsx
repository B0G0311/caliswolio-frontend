import React from 'react';
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import ExerciseItem from './exerciseItem';
import { Form } from 'react-router-dom';

function ExerciseList() {
  const { selectedLevel, selectedCategory, selectedExercises } = useContext(WorkoutContext)

  if (Object.keys(selectedExercises).length === 0) {
    return (
      <div>
    <form>
      <div className='Preference'>
        <h1>{selectedLevel}</h1>
        
        <h2>{selectedCategory}</h2>
        <br/><br/>
      </div>

      <p>There are no selected Exercises</p>

      <button type="submit" id="save">Save workout</button>
    </form>

    </div>
    )
  }

  return (
    <div>
    <form>
      <div className='Preference'>
        <h1>{selectedLevel.name}</h1>
        
        <h2>{selectedCategory}</h2>
        <br/><br/>
      </div>
{/* 
      {selectedExercises.map((exercise) => {
          console.log(exercise);
          <ExerciseItem key={exercise.exercise_id} exercise={exercise} />
      }) } */}

      <button type="submit" id="save">Save workout</button>
    </form>

    </div>
  );
};

export default ExerciseList;