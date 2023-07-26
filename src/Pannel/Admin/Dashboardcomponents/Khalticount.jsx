import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

const Khalticount = () => {
    const [khalti, setCount]= useState('');
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/admin/dashboard/khalti`,{
            headers:{
                'auth':Cookies.get('token')
            }
        })
        .then(res=>{
            console.log(res.data.result)
            setCount(res.data.result[0].online_count)
        }).catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <>
    <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2'>{khalti}</h3>
                        <p className='fs-5'>Khalit</p>
                    </div>
                    <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
            </div>
    </>
  )
}

export default Khalticount