import React from "react";
import { useContext } from "react";
import WorkoutContext from "../context/workoutContext";


export default function Navigation()
{
    const { activePage, setActivePage, setPriorWorkoutListIsLoaded, setTemplateWorkoutListIsLoaded, setWorkoutQueueListIsLoaded, isMember } = useContext(WorkoutContext)

    function prevLocation(){
        if (activePage === 'Level') {
            if (isMember) {
                setActivePage('MemberAccount')
            } else {
            setActivePage('Terms')
            }
        }
        else if (activePage === 'Category') {
            setActivePage('Level')
        }
        else if (activePage === 'ExerciseList') {
            setActivePage('Category')
        }
        else if (activePage === 'Terms') {
            setActivePage('SignIn')
        }
        else if (activePage === 'Login') {
            setActivePage('SignIn')
        }
        else if (activePage === 'Register') {
            setActivePage('SignIn')
        }
        else if (activePage === 'PriorWorkoutList') {
            setPriorWorkoutListIsLoaded(false)
            setActivePage('MemberAccount')
        }
        else if (activePage === 'TemplateWorkoutList') {
            setTemplateWorkoutListIsLoaded(false)
            setActivePage('MemberAccount')
        }
        else if (activePage === 'WorkoutQueueCalendar') {
            setWorkoutQueueListIsLoaded(false)
            setActivePage('MemberAccount')
        }
        else if (activePage === 'ContactUs') {
           setWorkoutQueueListIsLoaded(false)
           setActivePage('SignIn')
         }
    }

    // function nextLocation() {
    //     if (activePage === 'Terms') {
    //         setActivePage('Level');
    //     }
    //     else if (activePage === 'Level') {
    //         setActivePage('Category')
    //     }
    //     else if (activePage === 'Category') {
    //         setActivePage('Category')
    //     }
    // }

    return (
        <nav className ='footer-edits'>
           
        {(activePage !== "SignIn" && activePage !== 'ExerciseList' && activePage !== 'MemberAccount') && (
            <button type="button" onClick={() => prevLocation()} value="Back" className="btn btn-link btn-lg footer-button-edit-color" id="GoBack">Previous</button>
        )}
        </nav>
    );
};
