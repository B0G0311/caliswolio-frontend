import React, {useContext} from 'react';
import WorkoutContext from '../context/workoutContext';
import '../css/register.css';

export default function Register(){

    const { addNewUser, checkIfUser, setActivePage, registrationForm, setRegistrationForm  } = useContext(WorkoutContext)


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
            setRegistrationForm(prevState => ({
            ...prevState,
            phone_number: e.target.value
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
        
    }

    return(
        <div>
            <div className='Register'>
                <form onSubmit={async (e) => {
                    e.preventDefault()
                    if (checkIfUser()) {
                        alert("This email is already associated with an account. If this is you, go to the Login page and click on reset password")
                        setActivePage('Register')
                    } 
                    else {
                        await addNewUser()
                        alert("Thanks for Registering! You are now logged in!")
                        setActivePage('Terms')
                    }
                }}>
                    <fieldset className='account'>
                        <label>Email:
                            <input onChange={handleTextChange} type="text" className='Info' id='email' value={registrationForm.email || ''} required/>
                            <br/> <br/>
                        </label>

                        <label> Password:
                            <input onChange={handleTextChange} type="text" className='Info' id='pass' value={registrationForm.password || ''} required/>
                            <br/> <br/>
                        </label>

                        <label>Confirm Password:
                            <input onChange={handleTextChange} type="text" className='Info' id='confirmpass' required/>
                            <br/><br/>
                        </label>
                    </fieldset>

                    <fieldset className='personalinfo'>
                        <label> Phone Number: 
                            <input onChange={handleTextChange} type="number" pattern='[0-9]*' className='Info' id='phonenum' value={registrationForm.phone_number || ''} required/>
                            <br/><br/>                     
                        </label>

                        <label>Birth Year:
                            <input onChange={handleTextChange} type="number" pattern='[0-9]*' className='Info' max='9999' id='birthyear' value={registrationForm.birth_year || ''} required/>
                            <br/><br/>
                        </label>

                        <label htmlFor='Gender' >Gender: 
                            <select onChange={handleTextChange} htmlFor='Gender' className='Info' id='Gender'>
                                <option value='Male' id='Male'>Male</option>
                                <option value='Female' id='Female'>Female</option>
                                <option value='Other' id='Other'>Other</option>
                            </select>
                            <br/> <br/>
                        </label>

                        <label > Zipcode:
                            <input onChange={handleTextChange} type="number" pattern='[0-9]*' max='99999' className='Info' id='zipcode' value={registrationForm.zipcode || ''} required/>
                            <br/> <br/>
                        </label>
                    </fieldset>
                </form>
            </div>

            <div className='Submit_Button'>
                    <button type="submit" className='Submit_Button'>Register</button>
            </div>
        </div>
    )
}