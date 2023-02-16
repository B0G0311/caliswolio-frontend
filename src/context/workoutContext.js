import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('SignIn')
    const [user, setUser] = useState([
    {
        guest: false,
        member_id: 1,
        email: '',
        password: '',
        phone_number: '',
        level_id: '',
        birth_year: '',
        gender: '',
        zipcode: ''
    }
    ]);
  const [selectedLevel, setSelectedLevel] = useState([
    {
        level_id: 1,
    }
    ]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [priorWorkout, setPriorWorkout] = useState({});
  const [priorWorkoutExercises, setPriorWorkoutExercises] = useState([]);

  return (
    <WorkoutContext.Provider
      value={{
        activePage,
        setActivePage,
        user,
        setUser,
        selectedLevel,
        setSelectedLevel,
        selectedCategory,
        setSelectedCategory,
        selectedExercises,
        setSelectedExercises,
        priorWorkout,
        setPriorWorkout,
        priorWorkoutExercises,
        setPriorWorkoutExercises,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;