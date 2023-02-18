import React from "react";
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
function ExerciseItem() {

    const {selectedExercises, exerciseListIsLoaded} = useContext(WorkoutContext)

    if (exerciseListIsLoaded) {
        return (
            <div>
            {selectedExercises.exercises.map((exercise) => {
                return (
                <div key={exercise.exercise_id} className='exerciseItem'>
                    <div className="exerciseDescription">{exercise.description}</div>
                    <div className="exerciseName">Exercise: {exercise.name}</div>
                    <div className="exerciseSets">Sets: {exercise.sets}</div>
                    <div className="exerciseReps">Reps: {exercise.reps}</div>
                </div>
            )})}
            </div>
        )}
        else {
            return null
        }
    } 
    
    
export default ExerciseItem