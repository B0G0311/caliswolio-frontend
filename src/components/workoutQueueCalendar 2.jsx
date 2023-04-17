import React, { useContext, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import WorkoutContext from "../context/workoutContext";


const localizer = momentLocalizer(moment);

const WorkoutQueueCalendar = () => {
    const { workoutQueueItems } = useContext(WorkoutContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const newEvents = workoutQueueItems.map((item) => {
            let startDate = new Date(item.workout.perform_on);
            startDate.setDate(startDate.getDate() + 1)
            return {
                start: startDate,
                end: startDate,
                title: item.workout.name,
            };
        });
        setEvents(newEvents);
    }, [workoutQueueItems]);
    
    return (
    <div className="container-fluid page-container-configuration justify-content-md-center calender-edit-page-full">   
        <div class="row justify-content-md-center">
        <div class="col-lg-10">
                <h3 class="configured-page-heading-calender">Scheduled Workouts</h3>
        </div>
        </div>
        <div class="configured-form-div2 justify-content-md-center">
            
            <div class="form-row calender-sizing-after-tweaks-row">
                <div class="form-group col-lg-12 calender-sizing-after-tweaks">
                    <Calendar
                        className="page-container-configuration-calender-edits"
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        views={["month", "agenda"]}
                        
                    />
                </div>
            </div>
        </div>
    </div>
    );  
}

export default WorkoutQueueCalendar