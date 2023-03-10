import React, { useEffect } from 'react';
import { useContext} from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/memberAccount.css';



 function MemberAccount()
{
    const { setActivePage, fetchPriorWorkouts, priorWorkoutListIsLoaded } = useContext(WorkoutContext)

    useEffect((e) => {
        if(priorWorkoutListIsLoaded){
            setActivePage('PriorWorkoutList')
        }
    }, [priorWorkoutListIsLoaded, setActivePage])

    return(        
        <div className='btn-group'>
            <h1>Member Account</h1>
            <br/><br/>

            <button onClick={() => setActivePage('Level')} className='startNew' id='newWorkout'>Start New Workout</button>
            <br/><br/>

            <button onClick={async (e) => {
                e.preventDefault()
                await fetchPriorWorkouts()
            }} className='workoutLog' id='checkWL'>Workout Log</button>
            <br/><br/> 

            <button onClick={() => setActivePage('MemberAccount')} className='workoutTemplate' id='checkWW'>Workout Templates</button>
            <br/><br/>

            <button onClick={() => setActivePage('MemberAccount')} className='Future_Workout_Queue' id='checkFWQ'>Future Workout Queue</button>
        </div>
    )
}

export default MemberAccount;

/*
    Log out button to be incorporated
    <button onClick={() => setActivePage('')} className='logOut' id='logOffAcc'>Log Off</button>
*/