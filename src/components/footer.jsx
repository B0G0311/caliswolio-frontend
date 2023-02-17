import React from "react";
import { useContext } from "react";
import WorkoutContext from "../context/workoutContext";
import "../css/footer.css"

export default function Navigation() 
{
    const { activePage, setActivePage } = useContext(WorkoutContext)

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
    }

    function nextLocation() {
        if (activePage === 'Terms') {
            setActivePage('Level');
        } 
        else if (activePage === 'Level') {
            setActivePage('Category')
        }
        else if (activePage === 'Category') {
            setActivePage('ExerciseList')
        }
    }

    return (
        <div>
            <nav>
            <ul>
                {(activePage !== "SignIn" && activePage !== 'ExerciseList' ) && (
                    <button onClick={() => prevLocation()} value="Back" className="btn-link" id="GoBack">Previous</button>
                )}
                {(activePage !== "SignIn" && 
                activePage !== 'Register' && 
                activePage !== 'Login' &&
                activePage !== 'ExerciseList') && (
                    <button onClick={() => nextLocation()} value="Forward" className="btn-link" id="GoForward">Next</button>
                )}
            </ul>
            </nav>
        </div>
    );
};
