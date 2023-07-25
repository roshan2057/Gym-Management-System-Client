import axios from 'axios'
import React from 'react'

const Forgetpassword = () => {
    const forget= (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
axios.post(`${process.env.REACT_APP_API}/user/forgetpassword`,{
    email
}).then(res=>{
  
        alert(res.data)
    
}).catch(error=>{
    console.log(error)
})
    }
  return (
    <div className='container-fluid h-100 position-absolute' style={{ backgroundImage: 'url(img/hero/hero-2.jpg)' }}>
    <div className='box'>
      <div className='mx-5'>
        <h1 className='text-white text-center'>Enter Your email</h1>
        <form className='bg-white p-3 w-auto rounded text-center' onSubmit={forget}>
          <label className='d-block'>Email</label>
          <input className='d-block' type='email' name='email' />
          <input className='d-block' type='submit' value='Send verify link' />
        </form>
      </div>
    </div>
   







  </div>
  )
}

export default Forgetpassword