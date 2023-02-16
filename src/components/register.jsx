import React from 'react';
import '../css/register.css';

export default function Register(){
    return(
        <div className='Register'>
            <form>
                <label>Username:
                    <input type="text" className='Info' id='user' required/>
                    <br/> <br/>
                </label>

                <label>First Name: 
                    <input type="text" className='Info' id='firstName' required />
                    <br/><br/>
                </label>

                <label>Last Name:
                    <input type="text" className='Info' id='lastName' required />
                    <br/><br/>
                </label>

                <label> Password:
                    <input type="text" className='Info' id='pass' required/>
                    <br/> <br/>
                </label>

                <label>Confirm Password:
                    <input type="text" className='Info' id='confirmpass' required/>
                    <br/><br/>
                </label>

                <label>E-mail: 
                    <input type="text" className='Info' id='email' required/>
                    <br/> <br/>
                </label>

                <label>Birth Year:
                    <input type='number' className='Info' id='birthyear' max='4' required/>
                    <br/> <br/>
                </label>
                
                <label> Phone Number: 
                    <input type="number" pattern='[0-9]*' className='Info' id='phonenum' required/>
                    <br/> <br/>                     
                </label>

                <label> Zipcode:
                    <input type="number" pattern='[0-9]*' max='5' id='zipcode' required/>
                    <br/> <br/>
                </label>

                <label htmlFor='Gender'>Gender
                    <select htmlFor='Gender' id='Gender'>
                        <option value='Male' id='Male'>Male</option>
                        <option value='Female' id='Female'>Female</option>
                        <option value='Other' id='Other'>Other</option>
                    </select>
                </label>

                <div className='Registering'>
                    <button type="submit" className='Info'>Register</button>
                </div>
            </form>
        </div>
    )
}