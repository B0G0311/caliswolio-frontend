import React, { Component } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class WorkoutQueueCalendar extends Component {
  state = {
    workouts: [],
    calendarEvents: [],
  };

  

  componentDidMount() {
    this.setState({ workouts: this.props.workouts });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.workouts !== this.props.workouts) {
      this.setState({ workouts: this.props.workouts });
    }
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={this.state.calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

export default WorkoutQueueCalendar;