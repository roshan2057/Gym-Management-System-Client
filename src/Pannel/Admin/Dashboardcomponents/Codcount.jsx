import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

const Codcount = () => {
    const [cod, setCount]= useState('');
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/admin/dashboard/cod`,{
            headers:{
                'auth':Cookies.get('token')
            }
        })
        .then(res=>{
            console.log(res.data.result)
            setCount(res.data.result[0].cod_count)
        }).catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <>
    <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                    <div>
                        <h3 className='fs-2'>{cod}</h3>
                        <p className='fs-5'>Cod count</p>
                    </div>
                    <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
            </div>
    </>
  )
}

export default Codcount