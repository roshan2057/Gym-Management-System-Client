import React from 'react'
import './signin.css';
import Header from './Header';
import Cookies from 'js-cookie';
import Signup from './Signup';
import axios from 'axios';
import URL from './Api';

function Signin() {

const login =(event)=>{
  event.preventDefault();
  const phone = event.target.phone.value;
  const password = event.target.password.value;
  if(!phone || !password === null){
    return alert("Field required");
  }

  axios.post(`${URL}/user/login`,{
    phone,
    password
  }).then(res=>{
    console.log(res.data)    
    if (res.data.token){
    Cookies.set('token',res.data.token)
    Cookies.set('type',res.data.user)
    if(res.data.user === 'admin'){
      window.location.href='/';

    }
    else{
      window.location.href='/home';

    }
    }
    else{
      alert("invalid");
    }

}).catch(error=>{
    console.log(error.response)
    alert("Invalid");
})

}

  return (
    <>
     <Header/>



      <div className='container-fluid h-100 position-absolute' style={{ backgroundImage: 'url(img/hero/hero-2.jpg)' }}>
        <div className='box'>
          <div className='mx-5'>
            <h1 className='text-white text-center'>Sign In</h1>
            <form className='bg-white p-3 w-auto rounded' onSubmit={login}>
              <label className='d-block'>Phone Number</label>
              <input className='d-block' type='text' name='phone' />
              <label className='d-block'>Password</label>
              <input className='d-block' type='text' name='password' />
              <input className='d-block' type='submit' value='Sign In' />
            </form>
          </div>
          <Signup/>
        </div>








        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form >
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name" name='email'/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text" name='message'></textarea>
          </div>
          <div className='d-flex justify-content-end'>
          <button type="submit" className="btn btn-primary" id='myButton' >Send message</button>

          </div>

        </form>
      </div>
     
    </div>
  </div>
</div>








      </div>
    </>
  )
}

export default Signin