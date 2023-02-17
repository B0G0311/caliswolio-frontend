import React, { createContext, useEffect, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('SignIn')
  const [exercises, setExercises] = useState([])
  const [isMember, setIsMember] = useState(false)
  const [signInData, setSignInData] = useState(
    {
      email: '',
      password: ''
    }
  )
  const [user, setUser] = useState({});
  const [selectedLevel, setSelectedLevel] = useState(
    {
      level_id: 0,
      name: ''
    }
  );
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercises, setSelectedExercises] = useState(
    {
      exercises: {

      }
    }
  );
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
  const catchUser = async() => {
    const data = await fetchUserData()

    await data.forEach((account) => {
      if (account.email === signInData.email && account.password === signInData.password) {
        setUser(account)
        setIsMember(true)
      }
    });
  }

  const validateCredentials = async() => {
    let isValidated = false
    const data = await fetchUserData()

    await data.forEach((account) => {
      if (account.email === signInData.email && account.password === signInData.password) {
        isValidated = true
      }
    })

    return isValidated
  }

  // Check if the users email is already in the system
  const checkIfUser = async() => {
    let isUser = false
    const data = await fetchUserData()

    await data.forEach((account) => {
      if (account.email === registrationForm.email) {
        isUser = true;
      }
    })

    return isUser
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

  const filterExercises = (filtercategories) => {
    filtercategories.forEach((filtercategory) => {
      const filterBy = { level_id: [selectedLevel], category: [filtercategory.category]}
      const result = exercises.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));
      selectRandomExercise(result, filtercategory.amount)
    })
  }

  const selectRandomExercise = (list, amount) => {
    const templist = []
    for (let i = 0; i < amount; i++) {
      const randIndex = Math.floor(Math.random() * list.length)
      const randObject = list[randIndex]
      templist.push(randObject)
    }
    templist.forEach((exerciseObject) => {
      setSelectedExercises(prevState => ({
        ...prevState,
        exerciseObject
      }))
    })
  }

  const selectExercises = () => {
    const exerciseCategories = []
    if (selectedLevel.level_id === 1) {
      if (selectedCategory === 'Upper Body') {
        exerciseCategories.push(
          {category:'Pull-up',amount: 1},
          {category: 'Push-up',amount: 1},
          {category: 'Dip',amount: 1},
          {category: 'Row',amount: 1})
          filterExercises(exerciseCategories)
      }
      else if (selectedCategory === 'Lower Body') {
        exerciseCategories.push(
          {category:'Squat',amount: 2},
          {category: 'Hinge',amount: 1},
          {category: 'Core',amount: 1})
          filterExercises(exerciseCategories)
      }
      else if (selectedCategory === 'Full Body') {
        exerciseCategories.push(
          {category:'Pull-up', amount: 1},
          {category: 'Push-up', amount: 1},
          {category: 'Squat', amount: 1},
          {category: 'Hinge', amount: 1},
          {category: 'Core', amount: 1})
          filterExercises(exerciseCategories)
      }
    }
    else if (selectedLevel.level_id === 2) {
      if (selectedCategory === 'Upper Body') {
        exerciseCategories.push(
          {category:'Pull-up',amount: 1},
          {category: 'Push-up',amount: 1},
          {category: 'Dip',amount: 1},
          {category: 'Row',amount: 1})
          filterExercises(exerciseCategories)
      }
      else if (selectedCategory === 'Lower Body') {
        exerciseCategories.push(
          {category:'Squat',amount: 2},
          {category: 'Hinge',amount: 1},
          {category: 'Core',amount: 1})
          filterExercises(exerciseCategories)
      }
      else if (selectedCategory === 'Full Body') {
        exerciseCategories.push(
          {category:'Pull-up', amount: 1},
          {category: 'Push-up', amount: 1},
          {category: 'Dip', amount: 1},
          {category: 'Row', amount: 1},
          {category: 'Squat', amount: 1},
          {category: 'Hinge', amount: 1},
          {category: 'Core', amount: 1})
          filterExercises(exerciseCategories)
      }
    }
    else if (selectedLevel.level_id === 3) {
      if (selectedCategory === 'Upper Body') {
        exerciseCategories.push(
          { category:'Pull-up', amount:2 },
          { category: 'Push-up', amount:2 },
          { category: 'Dip', amount: 1},
          { category: 'Row', amount: 1})
          filterExercises(exerciseCategories)
      }
      else if (selectedCategory === 'Lower Body') {
        exerciseCategories.push(
          {category:'Squat',amount: 2},
          {category: 'Hinge',amount: 1},
          {category: 'Core',amount: 2})
          filterExercises(exerciseCategories)
      }
      else if (selectedCategory === 'Full Body') {
        exerciseCategories.push(
          {category:'Pull-up', amount: 1},
          {category: 'Push-up', amount: 1},
          {category: 'Dip', amount: 1},
          {category: 'Row', amount: 1},
          {category: 'Squat', amount: 1},
          {category: 'Hinge', amount: 1},
          {category: 'Core', amount: 1})
          filterExercises(exerciseCategories)
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
        signInData,
        setSignInData,
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
        validateCredentials,
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