import axios from 'axios';
import React from 'react'

const Resetpassword = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const token = urlParams.get('token');
    
    const change=(e)=>{
        e.preventDefault();
        const data ={
             newpass : e.target.password.value,
         cpass : e.target.cpassword.value,
         token: token,
         email:email
        }
        if(data.newpass!== data.cpass){
            return alert("Password not matched")
        }
       
        // const jsondata = JSON.stringify(data);
        axios.post(`${process.env.REACT_APP_API}/user/resetpassword`,{
            data
        }).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error);
        })

        
    }
  return (
    <>            

     <div className='container-fluid h-100 position-absolute' style={{ backgroundImage: 'url(img/hero/hero-2.jpg)' }}>
    <div className='box'>
      <div className='mx-5'>
        <h1 className='text-white text-center'>Enter new password</h1>
        <form className='bg-white p-3 w-auto rounded text-center' onSubmit={change}>
          <label className='d-block'>New Password</label>
          <input className='d-block w-100' type='password' name='password' />
          <label className='d-block'>Confirm Password</label>
          <input className='d-block w-100' type='password' name='cpassword' />
          <input className='d-block w-100' type='submit' value='Change' />
        </form>
      </div>
    </div>
    </div>
    </>
    
   
  )
}

export default Resetpassword