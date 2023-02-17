import React, { createContext, useEffect, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('SignIn')
  const [exercises, setExercises] = useState([])
  const [isMember, setIsMember] = useState(false)
  const [user, setUser] = useState({});
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

  // select the user based on email and password and set the user state with the corresponding data
  const catchUser = async( email, password) => {
    const data = await fetchUserData()

    await data.forEach((account) => {
      if (account.email === email && account.password === password) {
        setUser(account)
        setIsMember(true)
      }
    });
  }

  // Check if the users email is already in the system
  const checkIfUser = async() => {
    const data = await fetchUserData()

    data.forEach((account) => {
      if (account.email === registrationForm.email) {
        return true;
      }
      else {
        return false
      }
    })
  }

  // Add the information from user state into the database
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

  // update the current user in the user state based on member_id
  const updateUser = async() => {
    if (isMember) {
      const res = await fetch(`http://localhost:8000/api/Account/${user.member_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await res.json()

      console.log(await data);
    }
  }

  const filterExercises = (filtercategory) => {
    const filterBy = { level_id: [selectedLevel], category: [filtercategory]}
    const result = exercises.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));

    return result
  }

  const selectRandomExercise = (list, amount) => {
    const templist = []
    for (let i = 0; i < amount; i++) {
      const randIndex = Math.floor(Math.random() * list.length())
      const randObject = list[randIndex]
      templist.push(randObject)
    }
    return templist
  }

  const selectPushup = () => {
    const filteredList = filterExercises('Push-up')
    if (selectedLevel.level_id === 1) {
      const finalList = selectRandomExercise(filteredList, 1)
      return finalList
    }
    else if (selectedLevel.level_id === 2) {
      const finalList = selectRandomExercise(filteredList, 1)
      return finalList
    }
    else if (selectedLevel.level_id === 3) {
      const finalList = selectRandomExercise(filteredList, 2)
      return finalList
    }
  }

  const selectPullup = () => {
    const filteredList = filterExercises('Pull-up')
    if (selectedLevel.level_id === 1) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 2) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 3) {
      const finalList = selectRandomExercise(filteredList, 2)
    }
  }

  const selectDip = () => {
    const filteredList = filterExercises('Dip')
    if (selectedLevel.level_id === 1) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 2) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 3) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
  }

  const selectRow = () => {
    const filteredList = filterExercises('Row')
    if (selectedLevel.level_id === 1) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 2) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 3) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
  }

  const selectSquat = () => {
    const filteredList = filterExercises('Squat')
    if (selectedLevel.level_id === 1) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 2) {
      const finalList = selectRandomExercise(filteredList, 1)
    }
    else if (selectedLevel.level_id === 3) {
      const finalList = selectRandomExercise(filteredList, 2)
    }
  }

  const selectHinge = () => {
    if (selectedLevel.level_id === 1) {

    }
    else if (selectedLevel.level_id === 2) {

    }
    else if (selectedLevel.level_id === 3) {
      
    }
  }

  const selectCore = () => {
    if (selectedLevel.level_id === 1) {

    }
    else if (selectedLevel.level_id === 2) {

    }
    else if (selectedLevel.level_id === 3) {
      
    }
  }

  const selectExercises = () => {
    if (selectedLevel.level_id === 1) {
      if (selectedCategory === 'Upper Body') {
        selectPushup()
        selectPullup()
        selectDip()
        selectList()

      }
      else if (selectedCategory === 'Lower Body') {

      }
      else if (selectedCategory === 'Full Body') {

      }
    }
    else if (selectedLevel.level_id === 2) {
      if (selectedCategory === 'Upper Body') {

      }
      else if (selectedCategory === 'Lower Body') {

      }
      else if (selectedCategory === 'Full Body') {
        
      }
    }
    else if (selectedLevel.level_id === 3) {
      if (selectedCategory === 'Upper Body') {

      }
      else if (selectedCategory === 'Lower Body') {

      }
      else if (selectedCategory === 'Full Body') {
        
      }
    }

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
        setRegistrationForm,
        //Separate functions
        catchUser,
        checkIfUser,
        addNewUser,
        updateUser,
        fetchUserData,
        selectExercises,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext