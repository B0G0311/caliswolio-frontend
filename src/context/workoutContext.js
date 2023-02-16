import React, { createContext, useEffect, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('SignIn')
  const [exercises, setExercises] = useState([])
  const [isMember, setIsMember] = useState(false)
  const [user, setUser] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(
    {
      level_id: 0,
      name: ''
    }
  );
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([
    {
      exercise_id: 1,
      name: 'Push-up',
      category: 'Push-up',
      level_id: 1,
      description: '',
      sets: 3,
      reps: 10
    },
    {
      exercise_id: 2,
      name: 'Pull-up',
      category: 'Pull-up',
      level_id: 1,
      description: '',
      sets: 3,
      reps:10
    }
  ]);
  const [priorWorkout, setPriorWorkout] = useState({});
  const [priorWorkoutExercises, setPriorWorkoutExercises] = useState([]);
  const [registrationForm, setRegistrationForm] = useState({
    email: '',
          password: '',
          phone_number: 0,
          birth_year: 0,
          gender: 'Male',
          zipcode: 0,
  })


  useEffect(() => {
    fetchExercises()
  }, [])

  //fetchExercises
  const fetchExercises = async () => {
    const res = await fetch('http://localhost:8000/api/getExercises')
    const data = await res.json()
    
    setExercises(data)
  }

  //fetchUsersData
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:8000/api/Accounts/');
    const data = await res.json()

    return data

  }

  const catchUser = async( email, password) => {
    const data = await fetchUserData()

    data.forEach((account) => {
      if (account.email === email && account.password === password) {
        setUser(account)
        setIsMember(true)
      }
    });
  }

  const checkIfUser = async() => {
    const data = await fetchUserData()

    console.log(data)

    data.forEach((account) => {
      if (account.email === registrationForm.email) {
        return true;
      }
      else {
        return false
      }
    })
  }

  const addNewUser = async() => {
    const res = await fetch('http://localhost:8000/api/Accounts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationForm),
    })

    const data = await res.json();

    console.log(data)
  }
  
  return (
    <WorkoutContext.Provider
      value={{
        activePage,
        setActivePage,
        exercises,
        setExercises,
        isMember,
        setIsMember,
        user,
        setUser,
        catchUser,
        checkIfUser,
        addNewUser,
        fetchUserData,
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
        registrationForm,
        setRegistrationForm
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext