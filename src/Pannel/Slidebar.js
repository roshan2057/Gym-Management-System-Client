import React, { useState } from 'react'
import './sidebar.css'
import { Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Auth from '../Auth'


function Slidebar() {
    const [isPaymentDropdownOpen, setPaymentDropdownOpen] = useState(false);

    const usertype = Auth();

    const remove =()=>{
        Cookies.remove('token');
        Cookies.remove('user');
       window.location.href='/';
    }
    const togglePaymentDropdown = () => {
        setPaymentDropdownOpen(!isPaymentDropdownOpen);
      };
  return (
    <div className='bg-white sidebar py-2'>
        <div className='m-2'>
            <i className='bi bi-universal-access-circle fs-4 me-2'></i>
            <span className='brand-name fs-4'>Shree Rhino Gym Center</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
           
           {(usertype === 'admin')?
           <>
           <Link className='list-group-item py-2' to="/">
                <i className='bi bi-speedometer2 fs-5 me-2'></i>
                  <span className='fs-5'>Dashboard</span></Link>
                  <Link className='list-group-item py-2' to='/package'>
                <i className='bi bi-box-seam fs-5 me-2'></i>
                <span className='fs-5'>Packages</span>
            </Link>
            <Link className='list-group-item py-2' to="/user">
                <i className='bi bi-people fs-5 me-2'></i>
                <span className='fs-5'>Users</span>
            </Link>
          


            <Link className='list-group-item py-2' onClick={togglePaymentDropdown}>
            <i className='bi bi-cash-coin fs-5 me-2'></i>
            <span className='fs-5'>Payment</span>
              <i className='fa fa-caret-down fs-4 me-2 mx-2'></i>
            </Link>
            {isPaymentDropdownOpen && (
              <div className='list-group-item py-2 d-block'>
                 <Link className='list-group-item py-2' to="/user">
                <i className='bi bi-cash fs-5 me-2'></i>
                <span className='fs-5'>COD</span>
            </Link>

            <Link className='list-group-item py-2' to="/user">
                <i className='bi bi-wallet fs-5 me-2'></i>
                <span className='fs-5'>Khalti</span>
            </Link>
              </div>
            )}


           </>:<>
           <Link className='list-group-item py-2'  to="/home">
                <i className='bi bi-house fs-5 me-2'></i>
                <span className='fs-5'>Home</span>
            </Link>
            <Link className='list-group-item py-2' to={'/fee'}>
                <i className='bi bi-coin fs-5 me-2'></i>
                <span className='fs-5'>Fee</span>
            </Link>
            <Link className='list-group-item py-2' to='/statement'>
            <i className="bi bi-clipboard-data fs-5 me-2"></i>
                <span className='fs-5'>Statement</span>
            </Link>
           </>}
               
                
            
           

          
           
            <Link className='list-group-item py-2' onClick={remove}>
                <i className='bi bi-box-arrow-right fs-4 me-2'></i>
                <span className='fs-5'>logout</span>
            </Link>
        </div>

    </div>
  )
}

export default Slidebar