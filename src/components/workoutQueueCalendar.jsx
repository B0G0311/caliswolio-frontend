import React, { useContext, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import WorkoutContext from "../context/workoutContext";
import '../css/workoutQueueCalendar.css'

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
        <div>   
            <Calendar
                className="workoutCalendar"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["month", "agenda"]}
                style={{ height: 500, backgroundColor: "#2c2e3d", color: "#dc404d"}}
            />
        </div>
    );  
}

export default WorkoutQueueCalendar