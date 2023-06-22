import React, { useEffect, useState } from 'react'
import Khalti from './Khalti'
import axios from 'axios';
import URL from '../../Api';
import Userpackage from './Userpackage'
import Feedetails from './Feedetails';
import './modal.css';

function Fee() {
  const [show, setShow]=useState(false);
  const [data, setData]=useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackId, setSelectedPackId] = useState(0);


  const imageSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data={"eSewa_id":"9865354145","name":"Roshan Karki"}'; 

  useEffect(()=>{
    axios.get(`${URL}/user/viewpackage`)
    .then(res =>{
      // console.log(res.data.package);
      const pdata=res.data.package;

setData(pdata);
      

       
  }).catch(error =>{
    console.log(error);
  })
  },[])

  const openModal = (id) => {
   console.log(id)
   setSelectedPackId(id);
    setShowModal(true);
  };

  return (
    <div className='px-3'>
      <div className='container-fulid'>
        <div className='row g-4 my-3 d-flex justify-content-around flex-wrap'>

          <Feedetails/>


          <div className='col-6'>     
         <Userpackage pack={data}/>
         <div className='text-end'>
<button onClick={()=> setShow(!show)} className='btn btn-success m-2'>Renew</button>

</div>

          </div>        
{show && <Khalti pack={data} openModal={openModal}/>}
        </div>
      </div>


{showModal &&
      <div className="small-modal-overlay">
      <div className="small-modal-content">
        <h2>QR Code for Renew GYM:</h2>
        <img src={imageSrc} alt="QR Code" />
        <p>Scan to Pay</p>
        <button className="close-button" onClick={()=>setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
}

    </div>

  )
}

export default Fee