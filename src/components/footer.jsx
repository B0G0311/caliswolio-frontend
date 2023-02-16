import React from "react";
import { useContext } from "react";
import WorkoutContext from "../context/workoutContext";
import { useNavigate } from "react-router-dom";
import "../css/footer.css"

export default function Navigation() 
{
    const { activePage, setActivePage } = useContext(WorkoutContext)

    const navigate = useNavigate();

    function prevLocation(){
        if (activePage === 'Level') {
            setActivePage('SignIn')
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
                {activePage !== "SignIn" && (
                    <button onClick={() => prevLocation()} value="Back" className="btn-link" id="GoBack">Previous</button>
                )}
                {activePage !== "SignIn" && (
                    <button onClick={() => nextLocation()} value="Forward" className="btn-link" id="GoForward">Next</button>
                )}
            </ul>
            </nav>
        </div>
    );
};
