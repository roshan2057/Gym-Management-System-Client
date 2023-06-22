
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import URL from '../../Api';

function Profilebmi(props) {
  const user = props.data;

  const update=(event)=>{
    event.preventDefault();
    const user ={
      "height": event.target.height.value,
      "weight": event.target.weight.value
    }

const ht = user.height /100;
const bmi = (user.weight /(ht ** 2)).toFixed(2);
user.bmi=bmi;



    axios.put(`${URL}/user/bmi`,user,{
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
  <h1 >BMI</h1>
<form onSubmit={update}>
<div className='left'>
            <label>Hight</label>
            <label>Weight</label>
            </div>
            <div className='right'> 
            <input type='text' defaultValue={user.height} name='height'/>
            <input type='text' defaultValue={user.weight} name='weight'/>
            <input type='submit' value={'Update'}/>
            </div>   
</form></>
  )
}

export default Profilebmi