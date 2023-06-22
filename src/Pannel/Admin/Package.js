import React, { useEffect, useState } from 'react'
import Ponlinelist from './Ponlinelist';
import Pofflinelist from './Pofflinelist';
import URL from '../../Api';
import axios from 'axios';
import './package.css'

function Package() {
    const [show, setShow]=useState(true);
    const [online, setOnline]=useState([]);
    const [offline, setOffline]=useState([]);


    useEffect(()=>{
      axios.get(`${URL}/admin/product`)
      .then(res =>{
        // console.log(res.data.package);
        const pdata=res.data.package;


        setOnline(pdata.filter(item => item.status ===1))
        setOffline(pdata.filter(item => item.status ===0))
        

         
    }).catch(error =>{
      console.log(error);
    })
    },[])



  return (
    <div className='d-flex justify-content-around flex-wrap'>
<div className='form'>

    <form className='d-block caption-top w-auto bg-white rounded p-2 m-5'>
<caption className='text-black fs-4'>Package</caption> 

      <div className='form-row'>
      <div className='col-md-6 mb-3'>
      <label className='d-block'>Name</label>
        <input type='text' name='name'/>
      </div>
      <div className='col-md-6 mb-3'>
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
        <button type='submit' className='btn btn-primary my-3'>Create</button>
        </div>
    </form>
</div>
<div className='w-auto'>          
                
                <button onClick={()=> setShow(true)} className='btn btn-success m-2'>Online</button>
                <button onClick={()=> setShow(false)} className='btn btn-danger mx-2'>Offline</button>
                
       
        
{show ? <Ponlinelist pack={online}/> : <Pofflinelist pack={offline}/>}
   
</div>
    </div>
  )
}

export default Package