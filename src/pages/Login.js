import React from 'react'
import './Login.css'
import SocialDesktop from '../images/social-desktop.PNG'
import SocialMobile from '../images/social-mobile.PNG'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container login-container'>
        <div className='row'>
            <div className='col-md-7 col-sm-12 d-flex justify-content-center align-items-center '>
                <img className='socialDesktop' style={{height: '85%'}} src={SocialDesktop} alt='Loading'/> 
                <img  className='socialMobile'  src={SocialMobile} alt='Loading'/> 
                
            </div>
            <div className='col-md-5 col-sm-12 '>
            <div className="card shadow">
                    <div className='card-body'>
                        <h4 className='card-title text-center mt-3 text-bold'>
                            Log In
                        </h4>
                        <form>
        <div className="form-group">
          
          <input type="email" className="p-2 mt-4 mb-2 form-control input-bg"  placeholder="Phone number,username or email" />
          
        </div>
        <div className="form-group">
          
          <input type="password" className="p-2 mb-1 form-control input-bg"  placeholder="Password" />
        </div>
        <div className="form-check">
          
          
        </div>
        <div className=' d-grid'>
        <button type="submit" className="custom-btn custom-btn-blue">Log In</button>

        </div>
        <div>
            <hr className='text-muted' />
            <h5 className='text-muted text-center'>OR</h5>
            <hr className='text-muted' />
        </div>
        <div className='mt-3 mb-5 d-grid'>
            <button type='submit' className='custom-btn custom-btn-white'>
                <span className='text-muted text-center fs-6'>
                    Don't have an account ?
                </span>
                <Link to="/signup"  className='ms-1 text-info fw-bold'>
                    Sign Up
                </Link>

            </button>
        </div>
       
      </form>

                    </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Login
