import React from 'react'
import './signin.css';
import Cookies from 'js-cookie';
import axios from 'axios';

function Adminsignin() {


  const login = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (!username || !password === null) {
      return alert("Field required");
    }

    axios.post(`${process.env.REACT_APP_API}/admin/login`, {
      username,
      password
    }).then(res => {
      console.log(res.data)
      if (res.data.token) {
        Cookies.set('token', res.data.token)
        Cookies.set('type', res.data.user)
       
          window.location.href = '/';
      }
      else {
        alert(res.data.data);
      }

    }).catch(error => {
      console.log(error.response)
      alert(error.response.data.data);
    })

  }

  return (
    <>
      <div className='container-fluid h-100 position-absolute' style={{ backgroundImage: 'url(img/hero/hero-2.jpg)' }}>
        <div className='box'>
          <div className='mx-5'>
            <h1 className='text-white text-center'>Admin Sign In</h1>
            <form className='bg-white p-3 w-auto rounded' onSubmit={login}>
              <label className='d-block'>Username</label>
              <input className='d-block' type='text' name='username' />
              <label className='d-block'>Password</label>
              <input className='d-block' type='password' name='password' />
              <input className='d-block' type='submit' value='Sign In' />
            </form>
          </div>
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
                    <input type="text" className="form-control" id="recipient-name" name='email' />
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

export default Adminsignin