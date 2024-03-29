import React from 'react';
import { useContext } from 'react'
import WorkoutContext  from '../context/workoutContext';
import '../css/level.css';

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
        <div className="Level">
            <div className ="Workout_Title">
                <h1>Workout Level</h1>
            </div>
        
            <form id="level_form" onSubmit={(e) => {
                e.preventDefault()
                setActivePage('Category')
            }}>
                <div className="Choose_Text">
                  <section>
                     <h2>Choose One: </h2>
                     <br></br>       
                     <br></br>     
                     <input type="radio" id="Beginner" name="Choose_Level" value="1" onChange={handleTextChange} checked={selectedLevel.level_id === 1} required/>
                     <label htmlFor="Beginner" title="Choose this if you are new and want to do Calisthenics">Beginner</label>
                     <br></br>           
                     <br></br> 
                     <input type="radio" id="Intermediate" name="Choose_Level" value="2" onChange={handleTextChange} checked={selectedLevel.level_id === 2} required/>
                     <label htmlFor="Intermediate" title="Choose this one if you know the basics but aren't ready for advanced things">Intermediate</label>
                     <br></br>           
                     <br></br> 
                     <input type="radio" id="Advanced" name="Choose_Level" value="3" onChange={handleTextChange} checked={selectedLevel.level_id === 3} required/>
                     <label htmlFor="Advanced" title="Choose this if you know your stuff and want to do more advanced exercises">Advanced</label>
                  </section>
                </div>
            </form>
            <div className="Submit_Button">
          <button type="submit" form="level_form" className="Level_Submit">Confirm Level</button>
            </div>
        </div>
    )
}