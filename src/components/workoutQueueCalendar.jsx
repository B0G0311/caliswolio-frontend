import React, { useContext, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import WorkoutContext from "../context/workoutContext";
import Popover from 'react-bootstrap/Popover';
import Footer from "./footer";


const localizer = momentLocalizer(moment);

const WorkoutQueueCalendar = () => {

    
    const { workoutQueueItems, openFutureWorkout, workoutQueueExerciseListIsLoaded, workoutName, exerciseListIsLoaded, setActivePage } = useContext(WorkoutContext);
    
    useEffect((e) => {
        if(workoutQueueExerciseListIsLoaded && workoutName !== '' && exerciseListIsLoaded){
            setActivePage('ExerciseList')
        }
    }, [workoutQueueExerciseListIsLoaded, workoutName, exerciseListIsLoaded, setActivePage]) 
    
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
        let selectedWorkout = workoutQueueItems.find((item) => item.workout.future_workout_id === selectedEvent.future_workout_id);

        return (
            <Popover id='calendarPopover' className={`modal-${modalState === true ? 'show' : 'hide'}`}>

                <div className='container-fluid page-ending-fluid-bottom-div-edits '>
                    <button type="button" class="btn btn-danger" onClick = {(e) => {
                        e.preventDefault()
                        setSelectedEvent(undefined)
                        setModalState(false)
                    }}>&nbsp;X&nbsp; </button>
                    <h3>{selectedWorkout.workout.name}</h3>
                    {selectedWorkout.exercises.map((exercise) => {
                        return(
                            <div className='edit-items-prior-workout w-100'>
                                <li className="list-group-item bg-transparent border-0 mt-3  pt-0 pb-1">
                                    <div className="input-group ">
                                        <div className="input-group-prepend">Exercise:</div>
                                    </div>
                                    <label className='form-control edits-for-form-control-prior-workout-dropdown' aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                        {exercise.name}
                                    </label>
                                </li>
                            </div>
                        )
                    })}
                    <div id="calendar-popout-button" className="col-lg-6 d-flex justify-content-center">
                        <button type='button' id='openWorkout' className='btn btn-outline-light btn-lg btn-block button-color-change-bottom-list' onClick={(e) => {
                            e.preventDefault()
                            openFutureWorkout(selectedWorkout.workout.future_workout_id)
                        }}>Edit/Use Workout</button>
                    </div>
                </div>
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
                future_workout_id: item.workout.future_workout_id,
            };
        });
        setEvents(newEvents);
    }, [workoutQueueItems]);
    
    return (
    <div className="container-fluid page-container-configuration justify-content-md-center calender-edit-page-full">  
        <Footer/> 
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
