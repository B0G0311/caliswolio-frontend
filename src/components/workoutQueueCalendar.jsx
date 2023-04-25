import React, { useContext, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import WorkoutContext from "../context/workoutContext";
import Popover from 'react-bootstrap/Popover'


const localizer = momentLocalizer(moment);

const WorkoutQueueCalendar = () => {
    const { workoutQueueItems } = useContext(WorkoutContext);
    const [selectedEvent, setSelectedEvent] = useState(undefined);
    const [events, setEvents] = useState([]);
    const [modalState, setModalState] = useState(false);
    const handleSelectedEvent = (event) => {
        if (modalState) {
            setSelectedEvent(undefined)
            setModalState(false);
        } else{
        setSelectedEvent(event);
        setModalState(true);
        }
    };

    const Modal = () => {
        return (
            <Popover id='calendarPopover' className={`modal-${modalState === true ? 'show' : 'hide'}`}>
                <h1>Test</h1>
            </Popover>
        )
    }

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
        <div className="row justify-content-md-center">
        <div className="col-lg-10">
                <h3 className="configured-page-heading-calender">Scheduled Workouts</h3>
        </div>
        </div>
        <div className="configured-form-div2 justify-content-md-center">
            
            <div className="form-row calender-sizing-after-tweaks-row">
                <div className="form-group col-lg-12 calender-sizing-after-tweaks">
                    {selectedEvent && <Modal />}
                    <Calendar
                        className="page-container-configuration-calender-edits"
                        localizer={localizer}
                        popup
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        views={["month", "agenda"]}
                        onSelectEvent={(e) => {handleSelectedEvent(e)}}
                    />
                </div>
            </div>
        </div>
    </div>
    );  
}

export default WorkoutQueueCalendar