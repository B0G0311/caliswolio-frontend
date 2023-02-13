import React, { Component } from 'react';

class Exercises extends Component {
  state = {
    exercises: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/getExercises')
      const exercises = await res.json();
      this.setState({
        exercises
      });
    } catch(e) {
      console.log(e);
    };
  };

  render() {
    return (
      <div>
        {this.state.exercises.map(exercise => (
          <div key={exercise.exercise_id}>
            <h1>{exercise.name}</h1>
            <ul>{exercise.category}</ul>
            <ul>{exercise.level_id}</ul>
          </div>
        ))}
      </div>
    );
  };
};

export default Exercises;