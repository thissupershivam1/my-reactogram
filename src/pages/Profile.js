import React from 'react'
import './Profile.css'


const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
        <div className='row'>
            <div className='col-md-6 d-flex flex-column'>
            <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="p-2 image" alt="..." />
            <p className='ms-3 fs-5 fw-bold'>john_doe</p>
            <p className='ms-3 fs-5 '>John Doe</p>
            <p className='ms-3 fs-5 '>UI/UX designer @john_doe</p>
            <p className='ms-3 fs-5 '>My portfolio on <a href='#'>www.portfolio.com/john</a></p>
                
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
                <div className='d-flex justify-content-equal' >
                    <div  className='pe-5 text-center fw-bold' style={{borderRight:'3px solid #c3c3c3'}}>
                        <h4>
                            10
                        </h4>
                        <p>
                            Posts
                        </p>
                    </div>
                    <div className='px-5 text-center fw-bold' style={{borderRight:'3px solid #c3c3c3'}}>
                        <h4>
                            20
                        </h4>
                        <p>
                            Followers
                        </p>
                    </div>
                    <div className='ps-5 text-center fw-bold' >
                        <h4>
                            20
                        </h4>
                        <p>
                            Following
                        </p>
                    </div>
                    
                </div>
                <div className='mx-auto'>
                <button type='submit' className='custom-btn custom-btn-white me-md-3'>
                <span className=' text-center fs-6 '>
                   Edit Profile
                </span>
               

            </button>
                <button type='submit' className='custom-btn custom-btn-white'>
                <span className=' text-center fs-6'>
                   Create Post
                </span>
               

            </button>
                </div>

            </div>

        </div>
        <div className='row'>
            <div className='col-12'>
                <hr/>

            </div>

        </div>
    </div>
  )
}

export default Profile