import React, { useEffect, useState } from 'react'
import 'bootstrap/js/dist/modal'
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
function Users() {
    const [members, setMembers]=useState([]);
    const [search, setSearch]=useState('');


    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API}/admin/members`)
      .then(res =>{
        console.log(res.data.data);
        const pdata=res.data.data;
        setMembers(pdata)             
    }).catch(error =>{
      console.log(error);
    })
    },[])

  
 

      const send = (event) => {
        event.preventDefault();
        const data={
          email:event.target.email.value,
          message:event.target.message.value
        }
        
        axios.post(`${process.env.REACT_APP_API}/gmail`,data,{
          headers:{
            'auth':Cookies.get('token')
          }
         }).then(res=>{
          console.log(res);
          if(res.status === 200){
            alert(res.data);
          }
         }).catch(error=>{
          console.log(error)
         })
        };
  
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.
  
      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')
  
      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }

  const remove = (id) => {
   axios.delete(`${process.env.REACT_APP_API}/admin/deletemember/${id}`,{
    headers:{
      'auth':Cookies.get('token')
    }
   }).then(res=>{
    console.log(res);
    if(res.status === 200){
      alert(res.data.data);
      window.location.reload();
    }
   }).catch(error=>{
    console.log(error)
   })
  };

  return (
    <div>
            <h1 className='text-white fs-4'>List of Members</h1> 
<form className='text-right'>
  <input className="bg-white text-center rounded-4 mb-0" placeholder='Search' type='text' onChange={(event)=>{setSearch(event.target.value)}}/>
</form>
        <table className="table bg-white rounded mt-5">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Name</th>
      <th scope="col">Membership id</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col" className='text-center'>Statement</th>
      <th scope="col" className='text-center'>Action</th>
      <th>Send mail</th>
    </tr>
  </thead>
  <tbody>

{
  members.filter(item=>item.name.toLowerCase().includes(search)).map((item,  index)=>(
    <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{item.name}</td>
    <td>{item.id}</td>
    <td>{item.phone}</td>
    <td>{item.address}</td>
    <td className='text-center'><Link to={{
          pathname: `/user/${item.name}/${item.id}/`
        }}>View</Link></td>
    <td className='text-center'><button className='btn btn-danger' onClick={() => remove(item.id)}>Delete</button></td>
    <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever={item.email}>Send Mail</button>
</td>
  </tr>
  ))
}

   
   

    
  </tbody>
</table>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={send}>
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
   
    
  )
}

export default Users