import React from "react";
import { useContext } from "react";
import WorkoutContext from "../context/workoutContext";
import { useNavigate } from "react-router-dom";
import "../css/footer.css"

export default function Navigation() 
{
    const { activePage, setActivePage } = useContext(WorkoutContext)

    const navigate = useNavigate();

    function nextLocation() {
        if (activePage === 'Terms') {
            setActivePage('Level');
        } 
        else if (activePage === 'Level') {
            setActivePage('Category')
        }
        else if (activePage === 'Category') {
            setActivePage('Exercises')
        }
    }

    return (
        <div>
            <nav>
            <ul>
                {activePage !== "SignIn" && (
                    <button onClick={() => navigate(-1)} value="Back" className="btn-link" id="GoBack">Previous</button>
                )}
                {activePage !== "SignIn" && (
                    <button onClick={() => nextLocation()} value="Forward" className="btn-link" id="GoForward">Next</button>
                )}
            </ul>
            </nav>
        </div>
    );
};
