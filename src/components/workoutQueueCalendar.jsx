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
        <div>   
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["month"]}
                style={{ height: 500 }}
            />
        </div>
    );  
}

export default WorkoutQueueCalendar