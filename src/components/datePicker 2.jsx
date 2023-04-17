// The follow function creates a datePicker for the user, and then returns the day, month and year
// selected as a date object variable. The variable will then be passed into a function.

import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import WorkoutContext from "../context/workoutContext";
import "react-datepicker/dist/react-datepicker.css";
// import "../css/exerciseList.css"

function PickDate() {
    const { date, setDate } = useContext(WorkoutContext);
    
    const onChange = (date) => {
        setDate(date);
    };
    
    return (
        <div className="row justify-content-md-center">
        {(
            
            <div class="col-lg-6 d-flex justify-content-md-center input-group ">
                <div class="input-group datepicker-sizing">
                    <div class="input-group-prepend">
                        Date:
                    </div>
                <DatePicker className = "datePickerColor form-control"
                selected={date}
                onChange={onChange}
                dateFormat="MM-dd-yyyy"
                aria-label="Default" aria-describedby="inputGroup-sizing-default"
            />
            
            </div>
            </div>
        )}
        
        </div>
    );
}

export default PickDate;
