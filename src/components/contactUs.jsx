import React from 'react';

export default function ContactUs(){

    return (
        <div class="container-fluid page-container-configuration justify-content-md-center">
            <div class="row justify-content-md-center">
                <div class="col-lg-6">
                    <h3 class="configured-page-heading">Contact Us</h3>
                </div>
            </div>
        <form id="contactusform">
            <div class="configured-form-div justify-content-md-center">

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputPassword4"><h4>First Name:</h4></label>
                        <input type="text" className='Info form-control' id='' required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4"><h4>Last Name:</h4></label>
                        <input type="text" className='Info form-control' id='' required/>
                    </div>
                </div>


                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label><h4>Contact Email:</h4></label>
                        <input type="text" className='Info form-control' id='' required/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label>Message:</label>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>
                </div>

                <div class="form-row last-line-form">
                    <div class="form-group col-md-12">
                        <label><h4>Response Required:</h4></label>
                        <select class="form-control" >
                            <option>Response not required</option>
                            <option>Response required</option>

                        </select>
                    </div>
                </div>
                <div class="last-line-form-button">
                    <button type="submit" className='btn btn-outline-light btn-lg btn-block '>Submit</button>
                </div>
            </div>

            </form>
        </div>
    )
}
