import React, { Component } from 'react';
import { Form } from 'react-router-dom';

// class Exercises extends Component {
//   state = {
//     exercises: []
//   };

  // async componentDidMount() {
  //   try {
  //     const res = await fetch('http://127.0.0.1:8000/api/getExercises')
  //     const exercises = await res.json();
  //     this.setState({
  //       exercises
  //     });
  //   } catch(e) {
  //     console.log(e);
  //   };
  // };

  // render() {
  //   return (
  //     <div>
  //       {this.state.exercises.map(exercise => (
  //         <div key={exercise.exercise_id}>
  //           <h1>{exercise.name}</h1>
  //           <ul>{exercise.category}</ul>
  //           <ul>{exercise.level_id}</ul>
  //         </div>
  //       ))}

function Exercises4() {
  return (
    <div>
    <form>
      <div className='Preference'>
        <select value='level' required>
          <option value="Beginner" id="Beginlevel">Beginner </option>
          <option value="Intermediate" id="Intermedlevel">Intermediate </option>
          <option value="Advanced" id="Advanlevel">Advanced </option>
        </select>
        
        <select value='Category' required>
          <option value="Upper" id="Upperbod">Upper Body</option>
          <option value="Lower" id="Lowerbod">Lower Body</option>
          <option value="Full" id="Fullbod"> Full Body</option>
        </select>
        <br/><br/>
      </div>

      <div className='exercise&Amount'>
        <select value='exerciseName' required>
          <option value="Placeholder" id="wut">Exercise Name</option>
        </select>

        <br/><br/>
        <label>Targets: </label>
        <br/>
        <label>Sets:  
          <input type="number" className="amount" id="Sets" required/>
        </label>

        <label>Reps:
          <input type="number" classname="amount" id="Reps" required/>
        </label>
      </div>

      <button type="submit" id="save">Save workout</button>
    </form>
    </div>
  );
};

export default Exercises4;