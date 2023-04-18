import React, { useEffect } from 'react';
import { useContext} from 'react';
import WorkoutContext from '../context/workoutContext';
// import '../css/memberAccount.css';



 function MemberAccount()
{
    const { setActivePage, fetchPriorWorkouts, priorWorkoutListIsLoaded, templateWorkoutListIsLoaded, fetchTemplateWorkouts, workoutQueueListIsLoaded, fetchQueueWorkouts } = useContext(WorkoutContext)

    useEffect((e) => {
        if(priorWorkoutListIsLoaded){
            setActivePage('PriorWorkoutList')
        }
        if(templateWorkoutListIsLoaded){
            setActivePage('TemplateWorkoutList')
        }
        if (workoutQueueListIsLoaded){
            setActivePage('WorkoutQueueCalendar')
        }
    }, [priorWorkoutListIsLoaded, templateWorkoutListIsLoaded, workoutQueueListIsLoaded, setActivePage])

    return(

        <div className="container-fluid page-container-configuration ">
            <div className="row justify-content-md-center">
                <div className="col-lg-8 d-flex justify-content-center">
            <h3 className="configured-page-heading">Member Account</h3>
            </div>
        </div>
        <div className="row justify-content-md-center">
            <div className="col-lg-6 last-line-form-button">
            <button onClick={() => setActivePage('Level')} className='btn btn-outline-light btn-lg btn-block' id='newWorkout'>Start New Workout</button>
            <br/><br/>

            <button onClick={async (e) => {
                e.preventDefault()
                await fetchPriorWorkouts()
            }} className='btn btn-outline-light btn-lg btn-block' id='checkWL'>Workout Log</button>
            <br/><br/>

            <button onClick={async (e) => {
                e.preventDefault()
                await fetchTemplateWorkouts()
                }} className='btn btn-outline-light btn-lg btn-block' id='checkWW'>Workout Templates</button>
            <br/><br/>

            <button onClick={async (e) => {
                e.preventDefault()
                await fetchQueueWorkouts()
                }} className='btn btn-outline-light btn-lg btn-block' id='checkFWQ'>Future Workout Queue</button>
        </div>
        </div>
        </div>
    )
}

export default MemberAccount;

/*
    Log out button to be incorporated
    <button onClick={() => setActivePage('')} className='logOut' id='logOffAcc'>Log Off</button>
*/
