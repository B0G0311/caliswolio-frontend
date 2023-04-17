import React from 'react';
import { useContext, useState } from 'react';
import WorkoutContext from '../context/workoutContext';
import ExerciseItem from './exerciseItem';
import PickDate from './datePicker';

function ExerciseList() {
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  const { selectedLevel, selectedCategory, selectedExercises, setSelectedExercises, setSelectedCategory, setSelectedLevel, setExerciseListIsLoaded, isMember, setActivePage, postPriorWorkout, selectExercises, postTemplateWorkout, postFutureWorkout, setSaveData} = useContext(WorkoutContext)
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleTextChange = (e) => {
      setSaveData(e.target.value)
  }

    function rerollExercises() {
    setSelectedExercises({
      'exercises': []
    })

    selectExercises()
  }

  function toggleDropdown(exerciseId) {
    if (openDropdown === exerciseId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(exerciseId);
    }
  }

  if (Object.keys(selectedExercises.exercises).length === 0) {
    return (
      <div className='exerciseList'>
        <form className='exerciseListForm' id='exerciseForm'>
          <div className='Preference'>
            <h1>{selectedLevel}</h1>

            <h2>{selectedCategory}</h2>
            <br/><br/>
          </div>

          <p>There are no selected Exercises</p>
        </form>
        <div className='saveWrapper'>
          <button type="submit" id="save" className='saveWorkoutButton' form='exerciseForm'>Save workout</button>
        </div>

      </div>
    )
  }

  return (
    <div className='container-fluid page-container-configuration '>

        <form id='exerciseForm'>
        <div class="row justify-content-md-center">
          <div class="col-lg-8 d-flex justify-content-center">
            <h3 className='configured-page-heading-primary'>{titleCase(selectedLevel.name)}:</h3>
          </div>

          <div class="col-lg-8 d-flex justify-content-center">
            <h3 className='configured-page-heading-secondary'>{titleCase(selectedCategory)}</h3>

          </div>
        </div>
          <ExerciseItem />

        </form>

        <div class="row justify-content-md-center">
          <div class="col-lg-4 d-flex justify-content-center">
          <button type='button' id='rerollAll' className='btn btn-outline-secondary btn-lg btn-block button-color-change-bottom-list' onClick={(e) => {
          e.preventDefault()
          rerollExercises()
          setActivePage('ExerciseList')
        }}>Reroll All Exercises</button>
        </div>
      </div>



      <div className='row justify-content-md-center'>
       <div className='col-lg-4 d-flex justify-content-center'>
       <button type='button' id='complete' className='btn btn-outline-secondary btn-lg btn-block button-color-change-bottom-list' onClick={(e) => {
         e.preventDefault()
         if (isMember) {
           postPriorWorkout()
           setActivePage('MemberAccount')
         }
         else {
           setActivePage('SignIn')
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
       }}>Complete Workout</button>
       </div>
     </div>
     <div className='row justify-content-md-center'>
       <div className='col-lg-4 d-flex justify-content-center'>
         <button type='submit' id="save" className='btn btn-outline-secondary btn-lg btn-block button-color-change-bottom-list' form='exerciseForm' onClick={(e) => {
           e.preventDefault()
           if (isMember) {
             toggleDropdown("save")

           }
           else {
             alert('You must be a member to save the workout as a template. You can register to be a member using the "Register" button on the home page.')
             setActivePage('ExerciseList')
           }
         }}>Save As Template</button>
       </div>
         <div class="w-100"></div>
        <div class="col-lg-4 d-flex justify-content-center ">
         {openDropdown === "save" ? (
           <div className='container-fluid name-workout-drop-down save-as-template-div'>
             <div className="row justify-content-md-center top-save-as-template-row">
             <div class="col-lg-8 d-flex justify-content-center top-save-as-template-col">

             </div>
             </div>
             <div className="row justify-content-md-center">
             <div class="col-lg-6 d-flex justify-content-center input-group mb-3 top-save-as-template-col">

             <div class="input-group datepicker-sizing">
                   <div class="input-group-prepend">
                        Workout Name:
                        </div>
                        </div>
             <input onChange={handleTextChange} type="text" id="workoutName" name="workoutName" className='workoutSave form-control' aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="" required></input>


             </div>
             </div>
             <div className='row justify-content-md-center'>
             <div class="col-lg-6 d-flex justify-content-center bottom-menu-option">
             <button type='submit' id='save' className='saveWorkoutButton2 btn btn-light btn-block' form='exerciseForm' onClick={(e) => {
                e.preventDefault()
                if (isMember) {
                  postTemplateWorkout()
                  setActivePage('MemberAccount')
                }
                else {
                  alert('You must be a member to save the workout as a template. You can register to be a member using the "Register" button on the home page.')
                  setActivePage('ExerciseList')
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
              }}>Save As Template</button>
              </div>
               </div>
             </div>
           ) : null}

         </div>
       </div>



       <div class="w-100"></div>
       <div className='row justify-content-md-center'>
         <div className='col-lg-4 d-flex justify-content-center'>
         <button type='submit' id="saveforlater" className='btn btn-outline-secondary btn-lg btn-block button-color-change-bottom-list' form='exerciseForm' onClick={(e) => {
           e.preventDefault()
           if (isMember) {
             toggleDropdown("saveforlater")

           }
           else {
             alert('You must be a member to save this workout for later.')
             setActivePage('ExerciseList')
           }
         }}>Save For Future Workout</button>
         </div>
         <div class="w-100"></div>
         <div class="col-lg-4 d-flex justify-content-center bottom-menu-option">
           {openDropdown === "saveforlater" ? (
             <div className='container-fluid name-workout-drop-down-bottom'>
               <div className="row justify-content-md-center top-save-as-template-row">
                 <div class="col-lg-8 d-flex justify-content-center top-save-as-template-col">

               </div>
               </div>
               <div className="row justify-content-md-center">
               <div class="col-lg-6 d-flex justify-content-center input-group mb-3 middle-save-as-template-col">
               <div class="input-group">
                   <div class="input-group-prepend">
                     Workout Name:
                     </div>
                     </div>
                     <input onChange={handleTextChange} type="text" id="workoutName" name="workoutName" className='workoutSave form-control' aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="" required></input>

                 </div>
               </div>
               <PickDate />


               <div className="row justify-content-md-center">
               <div class="col-lg-6 d-flex justify-content-center bottom-menu-option-future">
               <button type='submit' id="saveforlater" className='saveWorkoutButton2 btn btn-light btn-block' form='exerciseForm' onClick={(e) => {
                e.preventDefault()
                if (isMember) {
                  postFutureWorkout()
                  setActivePage('MemberAccount')
                }
                else {
                  alert('You must be a member to save the workout for later. You can register to be a member using the "Register" button on the home page.')
                  setActivePage('ExerciseList')
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
              }}>Save Workout</button>
                </div>
                </div>

            </div>
          ) : null}
          </div>
      </div>
    </div>
  );
};

export default ExerciseList;
