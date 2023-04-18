import React from "react";
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';

export default function Header() { 
    
    const { setIsMember, setActivePage, setPriorWorkoutListIsLoaded, setWorkoutQueueListIsLoaded, setTemplateWorkoutListIsLoaded, setUser, setSignInData, isMember } = useContext(WorkoutContext)

    function figureOutActivePage() {
        if (isMember) {
            setPriorWorkoutListIsLoaded(false)
            setWorkoutQueueListIsLoaded(false)
            setTemplateWorkoutListIsLoaded(false)
            setActivePage('MemberAccount')
        } else {
            setActivePage('SignIn')
        }
    }

    function logout() {
        setUser({})
        setIsMember(false)
        setSignInData(
            {
                email: '',
                password: ''
            }
        )
        setActivePage('SignIn')
    }

    return (
        <section id="navigation">
            <div className="container-fluid">
                {/* Nav Bar */}
                <nav className="navbar navbar-expand-lg navbar-dark navigation-head ">
                    <a className="navbar-brand title-brand" href='/#' onClick={() => figureOutActivePage()}>CaliSwolio</a>
                    

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler01" aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler01">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href='/#'  id="ContactUs" onClick={() => setActivePage('ContactUs')}>Contact Us</a>
                            </li>
                            <li className="nav-item">
                                {(!isMember) && ( <a className="nav-link" href='/#' onClick={() => setActivePage('Register')}   id ="Register">Register</a>)}
                            </li>
                            <li className="nav-item">
                                {(!isMember) && (<a className="nav-link" href='/#' onClick={() => setActivePage('Login') } id="Login">Log In</a>)}
                            </li>
                            <li  className="nav-item">
                                {(isMember) && (<a className="nav-link" href='/#' onClick={() => logout() } id="Logout">Log Out</a>)}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}