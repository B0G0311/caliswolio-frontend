import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import SignIn from './signIn';
import Terms from './terms';
import Level from './level';
import Category from './category';
import Exercises from './exercises';
import Login from './login';
import Register from './register';

function ActivePage() {
    const {activePage} = useContext(WorkoutContext)

    return (
        <div>
            {activePage === 'SignIn' && <SignIn />}
            {activePage === 'Terms' && <Terms />}
            {activePage === 'Level' && <Level />}
            {activePage === 'Category' && <Category />}
            {activePage === 'Exercises' && <Exercises />}
            {activePage === 'Login' && <Login />}
            {activePage === 'Register' && <Register />}
        </div>
    )

}

export default ActivePage