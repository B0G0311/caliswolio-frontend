import React from 'react';

export default function ContactUs(){

    return (
        <div className="container-fluid page-container-configuration justify-content-md-center">
            <div className="row justify-content-md-center">
                <div className="col-lg-6">
                    <h3 className="configured-page-heading">Contact Us</h3>
                </div>
            </div>
        <form id="contactusform">
            <div className="configured-form-div justify-content-md-center">

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputPassword4"><h4>First Name:</h4></label>
                        <input type="text" className='Info form-control' id='' required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4"><h4>Last Name:</h4></label>
                        <input type="text" className='Info form-control' id='' required/>
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-12">
                    <label><h4>Contact Email:</h4></label>
                        <input type="text" className='Info form-control' id='' required/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label>Message:</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>

                <div className="form-row last-line-form">
                    <div className="form-group col-md-12">
                        <label><h4>Response Required:</h4></label>
                        <select className="form-control" >
                            <option>Response not required</option>
                            <option>Response required</option>

                        </select>
                    </div>
                </div>
                <div className="last-line-form-button">
                    <button type="submit" className='btn btn-outline-light btn-lg btn-block '>Submit</button>
                </div>
            </div>

            </form>
        </div>
    )
}
