import React from "react";
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';


export default function Header() { 
    
    const { setActivePage } = useContext(WorkoutContext)
    return (

        <section id="navigation">
            <div class="container-fluid">
                {/* Nav Bar */}
                <nav class="navbar navbar-expand-lg navbar-dark navigation-head ">
                    <a class="navbar-brand title-brand" href="javascript:void(0)" onClick={() => setActivePage('SignIn')}>CaliSwolio</a>
                    

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler01" aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarToggler01">

                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)" id="ContactUs" onClick={() => setActivePage('ContactUs')}>Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)" onClick={() => setActivePage('Register')}   id ="Register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)" onClick={() => setActivePage('Login') } id="Login">Log In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}