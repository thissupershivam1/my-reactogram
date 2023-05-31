import React from 'react'
import Cards from '../components/Cards'

const PostOverview = () => {
  return (
    <div className='container '>
    <div className='row mt-md-5  mt-3'>
        <div className='col-md-4 mb-2'>
           <Cards/>

        </div>
        <div className='col-md-4 mb-2'>
        <Cards/>

        </div>
        <div className='col-md-4 mb-2'>
        <Cards/>

        </div>

    </div>



</div>
  )
}

export default PostOverview