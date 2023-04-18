import React, {useContext, useState} from 'react';
import WorkoutContext from '../context/workoutContext';


export default function Register(){
    const [confPass, setConfPass] = useState('')

    const { addNewUser, checkIfUser, setActivePage, registrationForm, setRegistrationForm  } = useContext(WorkoutContext)

    function validateEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (registrationForm.email.match(mailformat))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
    }

    function validatePhoneNumber() {
        if (registrationForm.phone_number.length === 10) {
             return true;
        }
        alert("You have entered an invalid phone number! Please enter a 10 digit phone number!");
        return false;
    }

    function validateBirthdate() {
        var thisYear = new Date()
        var age = thisYear.getFullYear() - registrationForm.birth_year
        if (age > 18 && age < 100) {
            return true
        }
        alert("You have not entered a valid birth year!")
        return false
    }

    const handleTextChange = (e) => {
        if (e.target.id === 'email') {
            setRegistrationForm(prevState => ({
                ...prevState,
                email: e.target.value
            }))
        }
        else if (e.target.id === 'pass') {
            setRegistrationForm(prevState => ({
                ...prevState,
                password: e.target.value
            }))
        }
        else if (e.target.id === 'phonenum') {
            var phone = e.target.value.replace(/[^0-9]/g, '')

            setRegistrationForm(prevState => ({
            ...prevState,
            phone_number: phone
            }))
        }
        else if (e.target.id === 'birthyear') {
            setRegistrationForm(prevState => ({
            ...prevState,
            birth_year: e.target.value
            }))
        }
        else if (e.target.id === ('Gender')) {
            setRegistrationForm(prevState => ({
            ...prevState,
            gender: e.target.value
            }))
        }
        else if (e.target.id === 'zipcode') {
            setRegistrationForm(prevState => ({
            ...prevState,
            zipcode: e.target.value
            }))
        }
        else if (e.target.id === 'confirmpass') {
            setConfPass(e.target.value)
        }

    }

    return(
        <div className="container-fluid page-container-configuration justify-content-md-center">
            <div className="row justify-content-md-center">
                <div className="col-lg-6">
                    <h3 className="configured-page-heading">Registration</h3>
                </div>
            </div>
                <form id='registration_form' onSubmit={async (e) => {
                    e.preventDefault()
                    if (validateEmail() && validatePhoneNumber() && validateBirthdate()) {
                        if(confPass !== registrationForm.password)
                        {
                            alert("Passwords do not match. Please try again!")
                            setActivePage('Register')
                        } else {
                            if (await checkIfUser()) {
                                alert("This email is already associated with an account. If this is you, go to the Login page and click on reset password")
                                setActivePage('Register')
                            }
                            else {
                                await addNewUser()
                                alert("Thanks for Registering! Please enter your email and password to log in!")
                                setActivePage('Login')
                            }
                        }
                    }
                }}>
                    <div className="configured-form-div justify-content-md-center">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <label><h4>Email:</h4></label>
                                <input onChange={handleTextChange} type="text" className='Info form-control' id='email' value={registrationForm.email || ''} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputPassword4"><h4>Password:</h4></label>
                                <input onChange={handleTextChange} type="text" className='Info form-control' id='pass' value={registrationForm.password || ''} required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4"><h4>Confirm Password:</h4></label>
                                <input onChange={handleTextChange} type="text" className='Info form-control' id='confirmpass' required/>
                            </div>
                        </div>
                        <div className="form-row last-line-form">
                            <div className="form-group col-md-4">
                                <label ><h4>Phone Number:</h4></label>
                                <input onChange={handleTextChange} type="number" pattern='[0-9]*' className='Info form-control' id='phonenum' value={registrationForm.phone_number || ''} required/>
                            </div>
                            <div className="form-group col-md-3">
                                <label ><h4>Birth Year:</h4></label>
                                <input onChange={handleTextChange} type="number" pattern='[0-9]*' className='Info form-control' max='9999' id='birthyear' value={registrationForm.birth_year || ''} required/>
                            </div>
                            <div className="form-group col-md-2">
                                <label><h4>Gender:</h4></label>
                                <select onChange={handleTextChange} htmlFor='Gender' className='Info form-control' id='Gender'>
                                    <option value='Male' id='Male'>Male</option>
                                    <option value='Female' id='Female'>Female</option>
                                    <option value='Other' id='Other'>Other</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label><h4>Zip Code:</h4></label>
                                <input onChange={handleTextChange} type="number" pattern='[0-9]*' max='99999' className='Info form-control' id='zipcode' value={registrationForm.zipcode || ''} required/>

                            </div>
                        </div>
                        <div className="last-line-form-button">
                            <button type="submit" form='registration_form' className='btn btn-outline-light btn-lg btn-block '>Register</button>
                        </div>
                        </div>
                    </form>
                </div>




    )
}
