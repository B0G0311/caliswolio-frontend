import React from "react";
import { useContext } from "react";
import WorkoutContext from "../context/workoutContext";
import "../css/footer.css"

export default function Navigation() 
{
    const { activePage, setActivePage, setPriorWorkoutListIsLoaded, setTemplateWorkoutListIsLoaded } = useContext(WorkoutContext)

    function prevLocation(){
        if (activePage === 'Level') {
            setActivePage('Terms')
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
        <div>
            <nav>
            <ul>
                {(activePage !== "SignIn" && activePage !== 'ExerciseList' && activePage !== 'MemberAccount') && (
                    <button onClick={() => prevLocation()} value="Back" className="btn-link" id="GoBack">Previous</button>
                )}
                {/* {(activePage !== "SignIn" && 
                activePage !== 'Register' && 
                activePage !== 'Login' &&
                activePage !== 'ExerciseList') && (
                    <button onClick={() => nextLocation()} value="Forward" className="btn-link" id="GoForward">Next</button>
                )} */}
            </ul>
            </nav>
        </div>
    );
};
