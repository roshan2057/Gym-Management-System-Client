import axios from 'axios'
import React, { useEffect, useState } from 'react'
import URL from './Api'
import Cookies from 'js-cookie'

function Statement() {
  const [statement, setStatement]=useState([]);
  const [total, setTotal]=useState(0);
  
  useEffect(()=>{
axios.get(`${URL}/user/statement`,{
  headers:{
    'auth':Cookies.get('token')
  }
}).then(res=>{
  if(res.data.statement !== []){

  setStatement(res.data.statement);
    calculateTotal(res.data.statement);
    console.log(res)
  }
  
}).catch(error=>{
  console.log(error);
})
  },[]);


  const calculateTotal = (statement) => {
    let totalAmount = 0;
    statement.forEach(item => {
      totalAmount += item.amount;
    });
    setTotal(totalAmount);
  };
  return (
    <div>
        
        <h2 className='text-white fs-4'>Statement</h2> 

        <table className="table table-striped bg-white rounded mt-5">

  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Packages</th>
      <th scope="col">Medium</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
{
statement.map((item, index)=>
( <tr key={index}>
  <th scope="row">{item.renew_date}</th>
  <td>{item.name}</td>
  <td>{item.medium}</td>
  <td>Rs.{item.amount}</td>
  </tr>
 )
)    
 }
    
<tr>
    <td colSpan='4'></td>
</tr>
    <tr>
        <td colSpan='3' className='text-center'>Total:</td>
        <td>Rs.{total}</td>
    </tr>
   
  </tbody>
</table>
        
    </div>
  )
}

export default Statement