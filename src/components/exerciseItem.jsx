import React, { useEffect } from "react";
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
function ExerciseItem() {

    const {selectedExercises, selectExercises, exerciseListIsLoaded} = useContext(WorkoutContext)

    useEffect(() => {
        selectExercises()
     });

    if (exerciseListIsLoaded) {
        return (
            <div>
            {selectedExercises.map((exercise) => {
                return (
                <div className='exerciseItem'>
                    <div className="exerciseName">{exercise.name}</div>
                    <div className="exerciseSets">{exercise.sets}</div>
                    <div className="exerciseReps">{exercise.reps}</div>
                </div>
            )})}
            </div>
        )}
        else {
            return null
        }
    } 
    
    
export default ExerciseItem