import React from "react";
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
function ExerciseItem(exercise) {
    const {selectedExercises} = useContext(WorkoutContext)

    // async componentDidMount() {
    //     try {
    //     const res = await fetch('http://127.0.0.1:8000/api/getExercises')
    //     const exercises = await res.json();
    //     this.setState({
    //         exercises
    //     });
    //     } catch(e) {
    //     console.log(e);
    //     };
    // };
    return (
        <div>
        {selectedExercises.map((exercise) => {
            <div className='exerciseItem'>
                <div className="exerciseName">{exercise.name}</div>
                <div className="exerciseSets">{exercise.sets}</div>
                <div className="exerciseReps">{exercise.reps}</div>
            </div>
        })}
        </div>
    )}
    
    
export default ExerciseItem