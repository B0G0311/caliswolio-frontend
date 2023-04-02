// The follow function creates a datePicker for the user, and then returns the day, month and year
// selected as a date object variable. The variable will then be passed into a function.

import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import WorkoutContext from "../context/workoutContext";
import "react-datepicker/dist/react-datepicker.css";

function PickDate() {
    const { date, setDate } = useContext(WorkoutContext);
    const [show, setShow] = useState(false);
    
    const onChange = (date) => {
        setDate(date);
        setShow(false);
    };
    
    const showDatePicker = () => {
        setShow(true);
    };
    
    return (
        <div>
        <button onClick={showDatePicker}>Select Date</button>
        {show && (
            <div>
            <DatePicker
                selected={date}
                onChange={onChange}
                dateFormat="MM-dd-yyyy"
            />
            </div>
        )}
        <p>
            {date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()}
        </p> 
        </div>
    );
}

export default PickDate;
