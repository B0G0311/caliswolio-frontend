import React from 'react';
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';


function SignIn()
{
  const { setActivePage } = useContext(WorkoutContext)

  return(

    <div class="container-fluid landing-page">

      <div class="row landing-page-top">
        <div class="col-lg-6 title-words" >
          <h1 class="title-phrase">Empower Your Body, Unlock Your Potential.</h1>


        <div className='button-group'>

              <button onClick={() => setActivePage('Login')} type="button" id="Login" className='btn btn-light btn-lg landing-button'>Login</button>
            {/* </div> */}
            {/* <div className='register_button'>      */}
              <button onClick={() => setActivePage('Register')} type="button" id ="Register" className='btn btn-outline-light btn-lg landing-button'>Register</button>
            {/* </div>  */}
            {/* <div className='guest_button'>  */}
              <button onClick={() => setActivePage('Terms') } type="button" className='btn btn-outline-light btn-lg landing-button'>Use as guest</button>

            </div>
        </div>

        <div class="col-lg-6 d-flex swolio-image justify-content-center">
          <img class="title-image" src="https://cdn.shopify.com/s/files/1/0160/2840/1712/products/swole_stewie-min-fdyc.png?v=1631575412" alt={"Stewie"} id="Swole" width="500" height="500"></img>
        </div>
      </div>

      {/* Box is changing size */}
      <div class="testimonials">
        <div id="testimonial-carousel" class="carousel slide" data-ride="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2>"No gym, no excuses."</h2>
              <em>-Tyler W.</em>
            </div>
            <div class="carousel-item">
              <h2>"Unleash your inner strength with CaliSwolio."</h2>
              <em>-Seth D.</em>
            </div>
            <div class="carousel-item">
              <h2>"Revolutionize your workout with CaliSwolio."</h2>
              <em>-Michael M.</em>
            </div>
            <div class="carousel-item">
              <h2>"Shape your body, shape your future with CaliSwolio."</h2>
              <em>-In Y.</em>
            </div>
            <div class="carousel-item">
              <h2>"Take your fitness to the next level."</h2>
              <em>-Paul G.</em>
            </div>
          </div>
          <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
          </div>
        </div>
      </div>





    



  )

}

export default SignIn;
