// The follow function creates a datePicker for the user, and then returns the day, month and year
// selected as a date object variable. The variable will then be passed into a function.

import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import WorkoutContext from "../context/workoutContext";
import "react-datepicker/dist/react-datepicker.css";
import "../css/exerciseList.css"

function PickDate() {
    const { date, setDate } = useContext(WorkoutContext);
    
    const onChange = (date) => {
        setDate(date);
    };
    
    return (
        <div>
        {(
            <div>
            <DatePicker className = "datePickerColor"
                selected={date}
                onChange={onChange}
                dateFormat="MM-dd-yyyy"
            />
            </div>
        )}
        
        </div>
    );
}

export default PickDate;
