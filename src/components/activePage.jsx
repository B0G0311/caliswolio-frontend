import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import SignIn from './signIn';
import Terms from './terms';
import Level from './level';
import Category from './category';
import ExerciseList from './exerciseList';
import Login from './login';
import Register from './register';
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
        </div>
    )

}

export default ActivePage