import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import SignIn from './signIn';
import Terms from './terms';
import Level from './level';
import Category from './category';
import ExerciseList from './exerciseList';
import Login from './login';
import Register from './register';
import MemberAccount from './memberAccount';
import PriorWorkoutList from './priorWorkoutList';
import TemplateWorkoutList from './templateWorkoutList';
import WorkoutQueueCalendar from './workoutQueueCalendar';
import "../index.css";

function ActivePage() {
    const {activePage} = useContext(WorkoutContext)

    return (
        <div id='activePage'>
            {activePage === 'SignIn' && <SignIn />}
            {activePage === 'Terms' && <Terms />}
            {activePage === 'Level' && <Level />}
            {activePage === 'Category' && <Category />}
            {activePage === 'ExerciseList' && <ExerciseList />}
            {activePage === 'Login' && <Login />}
            {activePage === 'Register' && <Register />}
            {activePage === 'MemberAccount' && <MemberAccount />}
            {activePage === 'PriorWorkoutList' && <PriorWorkoutList />}
            {activePage === 'TemplateWorkoutList' && <TemplateWorkoutList />}
            {activePage === 'WorkoutQueueCalendar' && <WorkoutQueueCalendar />}
        </div>
    )

}

export default ActivePage
