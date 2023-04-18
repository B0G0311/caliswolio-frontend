import React from "react";
import { useContext, useEffect } from "react";
import WorkoutContext from "../context/workoutContext";
// import '../css/category.css';

function Category()
{
    const { setSelectedCategory, selectExercises, setActivePage, exerciseListIsLoaded } = useContext(WorkoutContext)
    
    useEffect(() => {
        if(exerciseListIsLoaded) {
            setActivePage('ExerciseList')
        }
    }, [exerciseListIsLoaded, setActivePage])
    
    return(
        <div className="container-fluid page-container-configuration ">
            
            <form id="submit_category" onSubmit={(e) => {
                e.preventDefault()
                selectExercises()
                
            }}>


      <div className="row justify-content-md-center">
        <div className="col-lg-8 d-flex justify-content-center">
          <h3 className="configured-page-heading">Select Desired Workout Level</h3>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-lg-10">
          <div className="card-deck mb-3 text-center level-options">
            <div className="card bg-light mb-4 card-design">
              <div className="card-header">
                <h3>Upper Body</h3>
              </div>
              <div className="row card-text-width">
                <div className="card-top mt-4">
                  <p className="card-font-on-white">Focus Areas:</p>
                  <ul className="category-page-ul">
                    <li>
                      <p className="card-font-on-white-list">Triceps</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Biceps</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Chest</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Back</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body mt-3 card-bottom-category">
                <input type="button" id="Upper" name="Chosen_Category" className="btn btn-outline-dark btn-lg btn-block" onClick={()=> setSelectedCategory('Upper Body')} value="Select"></input>
              </div>
            </div>
            <div className="card bg-light mb-4 card-design">
              <div className="card-header">
                <h3>Lower Body</h3>
              </div>
              <div className="row card-text-width">
                <div className="card-top mt-4">
                  <p className="card-font-on-white">Focus Areas:</p>
                  <ul className="category-page-ul">
                    <li>
                      <p className="card-font-on-white-list">Quadriceps</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Hamstrings</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Glutes</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Calves</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body mt-3 card-bottom-category">
                <input type="button" id="Lower" name="Chosen_Category" onClick={()=> setSelectedCategory('Lower Body')} className="btn btn-outline-dark btn-lg btn-block" value="Select"></input>
              </div>
            </div>
            <div className="card bg-light mb-4 card-design">
              <div className="card-header">
                <h3>Full Body</h3>
              </div>
              <div className="row card-text-width">
                <div className="card-top mt-4">
                  <p className="card-font-on-white">Focus Areas:</p>
                  <ul className="category-page-ul">
                    <li>
                      <p className="card-font-on-white-list">Upper Body</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Lower Body</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Abs</p>
                    </li>
                    <li>
                      <p className="card-font-on-white-list">Cardio</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body mt-3 card-bottom-category">
                <input type="button" id="Full" name="Chosen_Category" onClick={()=> setSelectedCategory('Full Body')} className="btn btn-outline-dark btn-lg btn-block" value="Select"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  </form>
  <div className="row custom-column-category justify-content-md-center">
    <div className="col-lg-10 last-line-form-button">
        <div className="SubmitButton">
            <button type="submit" form="submit_category" className="btn btn-outline-light btn-lg btn-block">Confirm Category</button>
        </div>
    </div>
    </div>
</div>
    
               
    )
}

export default Category