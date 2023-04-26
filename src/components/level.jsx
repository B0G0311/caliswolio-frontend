import React from 'react';
import { useContext } from 'react'
import WorkoutContext  from '../context/workoutContext';
// import '../css/level.css';

export default function Level()
{
    const { selectedLevel, setSelectedLevel, setUser, isMember, setActivePage } = useContext(WorkoutContext)

    const handleTextChange = async (e) => {
        if (e.target.id === 'Beginner') {
            setSelectedLevel(prevState => ({
                level_id: 1,
                name: 'beginner'
            }))

            if(isMember) {
                setUser(prevState => ({
                    ...prevState,
                    level_id: 1
                }))
            }
        }
        else if (e.target.id === 'Intermediate') {
            setSelectedLevel(prevState => ({
                level_id: 2,
                name: 'intermediate'
            }))

            if(isMember) {
                setUser(prevState => ({
                    ...prevState,
                    level_id: 2
                }))
            }
        }
        else if (e.target.id === 'Advanced') {
            setSelectedLevel(prevState => ({
                level_id: 3,
                name: 'advanced'
            }))

            if(isMember) {
                setUser(prevState => ({
                    ...prevState,
                    level_id: 3
                }))
            }
        }
    }
    return(
      <div className="container-fluid page-container-configuration">
           <form id="level_form" onSubmit={(e) => {
               e.preventDefault()
               if (selectedLevel.level_id === 0){
                     alert('Please select a workout level')
                     return
               }
               setActivePage('Category')
           }}>

           <div className="container-fluid page-container-configuration ">
               <div className="row justify-content-md-center">
                   <div className="col-lg-9 d-flex justify-content-center">
                       <h3 className="configured-page-heading">Select Workout Level</h3>
                   </div>
               </div>
               <div className="row justify-content-md-center">
                   <div className="col-lg-10">
                       <div className="card-deck mb-3 text-center level-options">
                           <div className="card bg-light mb-4 card-design">
                               <div className="card-header">
                                   <h3>Beginner</h3>
                               </div>
                               <div className="card-top mt-4">
                                   <i className="fa-solid fa-dumbbell fa-3x dumbbell-icon"></i>
                               </div>
                               <div className="card-body mt-3">
                                   <input type="button" form="level_form" id="Beginner" className="btn btn-outline-dark btn-lg btn-block" onClick={handleTextChange} checked={selectedLevel.level_id === 1} value="Select"></input>
                               </div>
                           </div>
                           <div className="card bg-light mb-4 card-design">
                               <div className="card-header">
                                   <h3>Intermediate</h3>
                               </div>
                               <div className="row">
                                   <div className="card-top mt-4">
                                       <i className="fa-solid fa-dumbbell fa-3x dumbbell-icon"></i>
                                       <i className="fa-solid fa-dumbbell fa-3x dumbbell-icon"></i>
                                   </div>
                               </div>
                               <div className="card-body mt-3">
                                   <input type="button" form="level_form" id="Intermediate" className="btn btn-outline-dark btn-lg btn-block" onClick={handleTextChange} checked={selectedLevel.level_id === 2} value="Select"></input>
                               </div>
                           </div>
                           <div className="card bg-light mb-4 card-design">
                               <div className="card-header">
                                   <h3>Advanced</h3>
                               </div>
                               <div className="row">
                                   <div className="card-top mt-4">
                                       <i className="fa-solid fa-dumbbell fa-3x dumbbell-icon"></i>
                                       <i className="fa-solid fa-dumbbell fa-3x dumbbell-icon"></i>
                                       <i className="fa-solid fa-dumbbell fa-3x dumbbell-icon"></i>
                                   </div>
                               </div>
                               <div className="card-body mt-3">
                                   <input type="button" form="level_form" id="Advanced" className="btn btn-outline-dark btn-lg btn-block" onClick={handleTextChange} checked={selectedLevel.level_id === 3} value="Select"></input>
                               </div>
                           </div>
                       </div>

                   </div>
               </div>

               </div>
           </form>
           <div className="row custom-column-category justify-content-md-center">
               <div className="col-lg-10 last-line-form-button">
                   <div className="SubmitButton">
               <button type="submit" form="level_form" className="btn btn-outline-light btn-lg btn-block edits-to-select-workout-level-button">Confirm Level</button>
           </div>

                </div>
          </div>
        </div>

    )
}
