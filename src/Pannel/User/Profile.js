import React, { useEffect, useState } from 'react'
import './profile.css'
import axios from 'axios'
import URL from '../../Api'
import Cookies from 'js-cookie'
import Profilebmi from './Profilebmi'
import Profiledetails from './Profiledetails'


function Profile() {
  const [user, setUser] = useState('');

  useEffect(()=>{
    axios.get(`${URL}/user/profile`,{
      headers:{
        'auth': Cookies.get('token')
      }
    }).then(res=>{
      console.log(res)
setUser(res.data.data[0]);
    }).catch(error=>{
      console.log(error)
    })
  },[])




  const changepassword=(event)=>{

  const form = document.getElementById('changepassword');
    event.preventDefault();
    const user ={
     
      "password": event.target.password.value,
      "newpassword": event.target.newpassword.value,
    }
    axios.put(`${URL}/user/changepassword`,user,{
      headers:{
        'auth': Cookies.get('token')
      }
    }).then(res=>{
      console.log(res)
      if (res.status === 200){
        alert("Update Success")
        form.reset();
      }
    }).catch(error=>{
      console.log(error)
    })
  }


  return (
    <div className='bg-white p-3 rounded d-flex flex-wrap'>
      <Profiledetails data={user}/>
        
        <div className='bmi col-2'>
       <Profilebmi data={user}/>
        </div>
         
        <div className='password col-12'>
        <h1 >Change Password</h1>
<form onSubmit={changepassword} id='changepassword'>
<div className='left'>
            <label>Current Password</label>
            <label>New Password</label>
            <label>Confirm Password</label>
            </div>
            <div className='right'> 
            <input type='password' name='password'/>
            <input type='password' name='newpassword'/>
            <input type='password'/>
            <input type='submit' value={'Change'}/>
            </div>   
</form>
        </div>
    </div>
  )
}

export default Profile