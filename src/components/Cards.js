import React from 'react'
import './Cards.css'
import more from '../images/more-action.PNG'

const Cards = () => {
  return (
    <div>
        <div className='card shadow'>
            <div className='card-body px-4'>
                <div className='row'>
                  <div className='col-6 d-flex'>
                  <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="p-2 image" alt="..." />
                  <div className='d-flex flex-column justify-content-center'>
                    <p className='fs-6 fw-bold'>
                      Title
                    </p>
                    <p className='location'>
                      Description
                    </p>

                  </div>

                  </div>
                  <div className='col-6  '>
                    <img src={more} alt ='more' className='float-end fs-3 p-2 mt-2' />

                    
                    
                  
                  
                  </div>

                </div>

                <div>
                  <div className='col-12'> 
                  <img className='imagei img-fluid p-2' src='https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80 '  alt='image'    />

                  </div>
                  
                  
                </div>

                <div className='row my-3'>
                  <div className='col-6 d-flex'>
                  <i className="fs-5 ps-2 fa-regular fa-heart"></i>
                  <i className=" fs-5 ps-2 fa-regular fa-comment"></i>
                  <i className="fs-5 ps-2 fa-solid fa-location-arrow"></i>
                  


                  </div>
                  <div className='col-6  '>
                   <span className='float-end fs-6 pe-2  fw-bold'>
                    200 likes
                   </span>

                    
                    
                  
                  
                  </div>

                </div>
                <div className='row'>
                  <div className='col-12'>
                    <span className='p-2 text-muted'> 2 Hours Ago</span>

                  </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Cards