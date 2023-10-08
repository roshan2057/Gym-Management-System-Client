import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'

function Profiledetails(props) {
    const user = props.data;

    const update=(event)=>{
        event.preventDefault();
        const user ={
          "name": event.target.name.value,
          "phone": event.target.phone.value,
          "email": event.target.email.value,
          "address": event.target.address.value,
        }
        axios.put(`${process.env.REACT_APP_API}/user/profile`,user,{
          headers:{
            'auth': Cookies.get('token')
          }
        }).then(res=>{
          console.log(res)
          if (res.status === 200){
            alert("Update Success")
          }
        }).catch(error=>{
          console.log(error)
        })
      }
    
  return (
    <>
      <div className='d-block profile col-6'>
        <h1 >Profile</h1>
        <form onSubmit={update}>
            <div className='left'>
            <label>Name</label>
            <label>Phone</label>
            <label>Email</label>
            <label>Address</label>
            </div>
            <div className='right'>
            <input type='text'  defaultValue={user.member_name} name='name' />
            <input type='number'  defaultValue={user.member_phone} name='phone'/>
            <input type='email'  defaultValue={user.member_email} name='email'/>    
            <input type='text'  defaultValue={user.member_address} name='address'/>
            <input type='submit'  value={'Update'}/>

            </div>        
        </form>
        </div>
    </>
  )
}

export default Profiledetails