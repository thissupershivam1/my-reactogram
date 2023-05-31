import React from 'react'
import './Login.css'
import SocialDesktop from '../images/social-desktop.PNG'
import SocialMobile from '../images/social-mobile.PNG'
import { Link } from 'react-router-dom'

const Signup = () => {
  
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
                               Sign Up
                            </h4>
                            <form>
            <div className="form-group">
              
              <input type="text" className="p-2 mt-4 mb-2 form-control input-bg"  placeholder="Phone number" />
              <input type="email" className="p-2  mb-2 form-control input-bg"  placeholder=" Email" />
              <input type="text" className="p-2  mb-2 form-control input-bg"  placeholder="Full Name" />
              
            </div>
            <div className="form-group">
              
              <input type="password" className="p-2 mb-1 form-control input-bg"  placeholder="Password" />
            </div>
            <div className="form-check">
              
              
            </div>
            <div className=' d-grid'>
            <button type="submit" className="custom-btn custom-btn-blue">Sign Up</button>
    
            </div>
            <div>
                <hr className='text-muted' />
                <h5 className='text-muted text-center'>OR</h5>
                <hr className='text-muted' />
            </div>
            <div className='mt-3 mb-5 d-grid'>
                <button type='submit' className='custom-btn custom-btn-white'>
                    <span className='text-muted text-center fs-6'>
                        Already have an account ?
                    </span>
                    <Link to="/login" className='ms-1 text-info fw-bold'>
                        Log In
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

export default Signup