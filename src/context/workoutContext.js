import React, { createContext, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('SignIn')
    const [isMember, setIsMember] = useState(false)
    const [user, setUser] = useState([
    {
        member_id: 0,
        email: '',
        password: '',
        phone_number: '',
        level_id: '',
        birth_year: '',
        gender: '',
        zipcode: ''
    }
    ]);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [priorWorkout, setPriorWorkout] = useState({});
  const [priorWorkoutExercises, setPriorWorkoutExercises] = useState([]);
  
  return (
    <WorkoutContext.Provider
      value={{
        activePage,
        setActivePage,
        isMember,
        setIsMember,
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

export default WorkoutContext