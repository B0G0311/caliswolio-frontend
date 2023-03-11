import React, { createContext, useEffect, useState } from 'react';

const WorkoutContext = createContext()

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
  const [user, setUser] = useState({})
  const [selectedLevel, setSelectedLevel] = useState(
    {
      level_id: 0,
      name: ''
    }
  )
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedExercises, setSelectedExercises] = useState({
    'exercises': [],
  })
  const [exerciseListIsLoaded, setExerciseListIsLoaded] = useState(false)
  const [priorWorkoutItems, setPriorWorkoutItems] = useState({
    'workouts': []
  })
  const [priorWorkoutListIsLoaded, setPriorWorkoutListIsLoaded] = useState(false)
  const [templateWorkoutItems, setTemplateWorkoutItems] = useState({
    'workouts': []
  })
  const [templateWorkoutListIsLoaded, setTemplateWorkoutListIsLoaded] = useState(false)
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

  const fetchPriorWorkouts = async() => {
    const workoutRes = await fetch(`http://localhost:8000/api/pwl/${user.member_id}/`)
    const workoutData = await workoutRes.json()
    const exerciseRes = await fetch(`http://localhost:8000/api/pwel/`)
    const exerciseData = await exerciseRes.json()

    let tempWorkoutList = []    
    let tempExerciseList = []
    workoutData.forEach((workout) => {
      exerciseData.forEach((exercise) => {
        exercises.forEach((ex) => {
        if (workout.prior_workout_id === exercise.prior_workout_id) {
          if (exercise.exercise_id === ex.exercise_id) {
            let tempExercise = {
              'exercise_id': ex.exercise_id,
              'name': ex.name,
              'category': ex.category,
              'level_id': ex.level_id,
              'description': ex.description,
              'reps': exercise.target_reps,
              'sets': exercise.target_sets,
              'position_in_list': exercise.position_in_list
            }
            tempExerciseList.push(tempExercise)
          }
        }
      })
    })
    let sortedExerciseList = tempExerciseList.sort(
      (p1, p2) => (p1.position_in_list > p2.position_in_list) ? 1 : (p1.position_in_list < p2.position_in_list) ? -1 : 0)
    

    let tempWorkout = {
      'workout': workout,
      'exercises': sortedExerciseList
    }
    tempWorkoutList.push(tempWorkout)
    tempExerciseList = []
  })

  setPriorWorkoutItems(tempWorkoutList)
  setPriorWorkoutListIsLoaded(true)
}

const fetchTemplateWorkouts = async() => {
  const workoutRes = await fetch(`http://localhost:8000/api/twl/${user.member_id}/`)
  const workoutData = await workoutRes.json()
  const exerciseRes = await fetch(`http://localhost:8000/api/tel/`)
  const exerciseData = await exerciseRes.json()

  let tempWorkoutList = []    
  let tempExerciseList = []
  workoutData.forEach((workout) => {
    exerciseData.forEach((exercise) => {
      exercises.forEach((ex) => {
          if (workout.template_id === exercise.template_id) {
            if (exercise.exercise_id === ex.exercise_id) {
              let tempExercise = {
                'workout template_id': workout.template_id,
                'template_id': exercise.template_id,
                'exercise_id': ex.exercise_id,
                'name': ex.name,
                'category': ex.category,
                'level_id': ex.level_id,
                'description': ex.description,
                'reps': exercise.target_reps,
                'sets': exercise.target_sets,
                'position_in_list': exercise.position_in_list
              }
            tempExerciseList.push(tempExercise)
          }
        }
      })
    })
    let sortedExerciseList = tempExerciseList.sort(
    (p1, p2) => (p1.position_in_list > p2.position_in_list) ? 1 : (p1.position_in_list < p2.position_in_list) ? -1 : 0)
  

    let tempWorkout = {
      'workout': workout,
      'exercises': sortedExerciseList
    }
    tempWorkoutList.push(tempWorkout)
    tempExerciseList = []
  })

  setTemplateWorkoutItems(tempWorkoutList)
  setTemplateWorkoutListIsLoaded(true)
}

  // select the user based on email and password and set the user state with the corresponding data
  const catchUser = async() => {
    const data = await fetchUserData()

    await data.forEach((account) => {
      if (account.email === signInData.email && account.password === signInData.password) {
        setUser(account)
        setIsMember(true)
      }
    })
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
        isUser = true
        console.log('Account Email: ' + account.email)
        console.log('Registration Email: ' + registrationForm.email)
        console.log('CompareCheck: ' + isUser)
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

  const postPriorWorkout = async() => {
    if (isMember) {

      const date = new Date()
    
      let [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];

      if (month < 10) month = '0' + month
      
      if (day < 10) day = '0' + day

      let currentDate = `${year}-${month}-${day}`

      const workout = {
        'member_id': user.member_id.toString(),
        'level_id': selectedLevel.level_id.toString(),
        'category': selectedCategory,
        'when_completed': currentDate
      }

      const res = await fetch(`http://localhost:8000/api/pwl/${user.member_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
      })

      const data = await res.json()

      console.log(data)
      
      let priorWorkoutID = data.prior_workout_id

      postPriorWorkoutExercises(priorWorkoutID)
    }
  }

  const postPriorWorkoutExercises = async (priorWorkoutID) => {
    selectedExercises.exercises.forEach(async (exercise, index) => {
      let priorexercise = {
        "exercise_id": exercise.exercise_id,
        "prior_workout_id": priorWorkoutID,
        "target_sets": exercise.sets,
        "target_reps": exercise.reps,
        "position_in_list": index
      }
      const res = await fetch(`http://localhost:8000/api/pwel/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(priorexercise)
      })

      const data = await res.json()
      console.log(data)

      setSelectedLevel(
        {
          level_id: 0,
          name: ''
        }
      )
      setSelectedCategory('')
      setSelectedExercises({
        exercises: []
      })
      setExerciseListIsLoaded(false)
    })

    setSelectedLevel(
      {
        level_id: 0,
        name: ''
      }
    )
    setSelectedCategory('')
    setSelectedExercises({
      exercises: []
    })
    setExerciseListIsLoaded(false)
  }

  const postTemplateWorkout = async () => {
    if (isMember) {

      const workout = {
        'member_id': user.member_id.toString(),
        'level_id': selectedLevel.level_id.toString(),
        'category': selectedCategory,
        'name': 'test',
      }

      const res = await fetch(`http://localhost:8000/api/twl/${user.member_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
      })

      const data = await res.json()

      console.log(data)
      
      let templateWorkoutID = data.template_id

      postTemplateWorkoutExercises(templateWorkoutID)
    }
  }

  const postTemplateWorkoutExercises = async (templateWorkoutID) => {
    selectedExercises.exercises.forEach(async (exercise, index) => {
      let templateExercise = {
        "exercise_id": exercise.exercise_id,
        "template_id": templateWorkoutID,
        "target_sets": exercise.sets,
        "target_reps": exercise.reps,
        "position_in_list": index
      }
      const res = await fetch(`http://localhost:8000/api/tel/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(templateExercise)
      })

      const data = await res.json()
      console.log(data)
    })

    setSelectedLevel(
      {
        level_id: 0,
        name: ''
      }
    )
    setSelectedCategory('')
    setSelectedExercises({
      exercises: []
    })
    setExerciseListIsLoaded(false)
  }

  const rerollExercise = (filtercategory, usedIDs) => {
    const filterBy = { level_id: [selectedLevel.level_id], category: [filtercategory.category]}
    const result = exercises.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)))
    let randIndex
    randIndex = Math.floor(Math.random() * result.length)
    while (usedIDs.includes(result[randIndex].exercise_id)) {
      randIndex = Math.floor(Math.random() * result.length)
    }
    const randObject = result[randIndex]
    return randObject
  }

  const filterExercises = (filtercategories) => {
    filtercategories.forEach((filtercategory) => {
      const filterBy = { level_id: [selectedLevel.level_id], category: [filtercategory.category]}
      const result = exercises.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));
      selectRandomExercise(result, filtercategory.amount)
    })
  }

  const selectRandomExercise = (list, amount) => {
    const tempIndex = []
    const templist = []
    let randIndex
    for (let i = 0; i < amount; i++) {
      randIndex = Math.floor(Math.random() * list.length)
      while (tempIndex.includes(randIndex)) {
        randIndex = Math.floor(Math.random() * list.length)
      }
      const randObject = list[randIndex]
      tempIndex.push(randIndex)
      templist.push(randObject)
    }
    templist.forEach((exerciseObject) => {
      exerciseObject = {...exerciseObject, 'reps': 10, 'sets': 3}
      setSelectedExercises(prevState => ({
        'exercises': [...prevState.exercises, exerciseObject]
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
          setExerciseListIsLoaded(true)
      }
      else if (selectedCategory === 'Lower Body') {
        exerciseCategories.push(
          {category:'Squat',amount: 2},
          {category: 'Hinge',amount: 1},
          {category: 'Core',amount: 1})
          filterExercises(exerciseCategories)
          setExerciseListIsLoaded(true)
      }
      else if (selectedCategory === 'Full Body') {
        exerciseCategories.push(
          {category:'Pull-up', amount: 1},
          {category: 'Push-up', amount: 1},
          {category: 'Squat', amount: 1},
          {category: 'Hinge', amount: 1},
          {category: 'Core', amount: 1})
          filterExercises(exerciseCategories)
          setExerciseListIsLoaded(true)
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
          setExerciseListIsLoaded(true)
      }
      else if (selectedCategory === 'Lower Body') {
        exerciseCategories.push(
          {category:'Squat',amount: 2},
          {category: 'Hinge',amount: 1},
          {category: 'Core',amount: 1})
          filterExercises(exerciseCategories)
          setExerciseListIsLoaded(true)
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
          setExerciseListIsLoaded(true)
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
          setExerciseListIsLoaded(true)
      }
      else if (selectedCategory === 'Lower Body') {
        exerciseCategories.push(
          {category:'Squat',amount: 2},
          {category: 'Hinge',amount: 1},
          {category: 'Core',amount: 2})
          filterExercises(exerciseCategories)
          setExerciseListIsLoaded(true)
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
          setExerciseListIsLoaded(true)
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
        exerciseListIsLoaded,
        setExerciseListIsLoaded,
        priorWorkoutItems,
        setPriorWorkoutItems,
        priorWorkoutListIsLoaded,
        setPriorWorkoutListIsLoaded,
        templateWorkoutItems,
        setTemplateWorkoutItems,
        templateWorkoutListIsLoaded,
        setTemplateWorkoutListIsLoaded,
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
        postPriorWorkout,
        postPriorWorkoutExercises,
        rerollExercise,
        fetchPriorWorkouts,
        postTemplateWorkout,
        postTemplateWorkoutExercises,
        fetchTemplateWorkouts,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext