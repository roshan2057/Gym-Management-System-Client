// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import URL from '../../Api';
// import axios from 'axios';
import './package.css'


function Packageedit() {
    // const {id} = useParams();
   
    // useEffect(()=>{
    //     axios.get(`${URL}/admin/package/${id}`
    //     ).then(res=>{
    //         console.log(res)
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    // },[])
  return (
 <>
 <div className='form d-flex justify-content-center'>

<form className='d-block caption-top w-50 bg-white rounded p-2 m-5'>
<caption className='text-black fs-4'>Edit Package</caption> 

  <div className='form-row'>
  <div className='col-md-2 mb-3'>
  <label className='d-block'>Name</label>
    <input type='text' name='name'/>
  </div>
  <div className='col-md-2 mb-3'>
  <label className='d-block'>Number of Months</label>
    <input type='text' name='noofmth'/>
  </div>
  </div>
  <div className='form-row'>
  <div className='col-md-6'>

  <label className='d-block'>Price</label>
    <input type='number' name='price'/>
  </div>
  <div className='col-md-6 mb-3'>
  <label className='d-block'>Status</label>

  <select className='mt-2'>
      <option value={'1'}>Online</option>
      <option value={'0'}>Offline</option>
    </select>
  </div>
  </div>
  

   
    
    <div className='text-center'>
    <button type='submit' className='btn btn-primary my-3'>Update</button>
    </div>
</form>
</div>
 </>
  )
}

export default Packageedit