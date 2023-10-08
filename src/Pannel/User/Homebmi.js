import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Homebmi = () => {
const [user, setUser]= useState({});
const [remarks, setRemarks] = useState('');
    useEffect(()=>{
axios.get(`${process.env.REACT_APP_API}/user/bmi`,{
    headers:{
        'auth':Cookies.get('token')
    }
}).then(res=>{
    console.log(res)
    setUser(res.data)
    setRemarks(calculateRemarks(res.data.bmi));
}).catch(error=>{
    alert(error);
})

    },[])

    const calculateRemarks = (bmi) => {
        if (bmi >= 16 && bmi <= 18.5) {
          return "You are Under-Weight";
        } else if (bmi > 18.5 && bmi <= 25) {
          return "You are Normal";
        } else if (bmi > 25 && bmi <= 40) {
          return "You are Over-Weight";
        } else {
          return "Height and Weight are invalid";
        }
      };
    
  return (
   <>
    <h2 className='text-white'>Your Status</h2>

<div className='p-3 bg-transparent text-white border border-info shadow-sm d-flex justify-content-around align-items-center rounded '>
    <div className='d-flex flex-column'>
  <span>Height</span>   
  <span>Weight</span>
  <span>BMI</span>
  <span>Remarks</span>
    </div>
    <div className='d-flex flex-column'>
        <span>{user.height}cm</span>
        <span>{user.weight}Kg</span>
        <span>{user.bmi}</span>
        <span id='info'>{remarks}</span>
    </div>
   
</div>
   </>
  )
}

export default Homebmi