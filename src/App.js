import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Slidebar from './Slidebar'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Users from './Users'
import { Route, Routes } from 'react-router-dom'
import Statement from './Statement'
import Home from './Home'
import Package from './Package'
import Signin from './Signin'
import Landingpage from './Landingpage'
import Auth from './Auth';
import Fee from './Fee'
import Profile from './Profile'
import Ustatement from './Ustatement'
import { AdminElement} from './Roles'
import Packageedit from './Packageedit'

const login = Auth();

function App() {
    const [toggle,setToggle]=useState(true)
    const Toggle =()=>{
        setToggle(!toggle)
    }
    if(login){
        return (


            <div className='container-fluid bg-secondary min-vh-100'>
                <div className='row'>
                    {toggle && <div className='col-3 col-md-2 bg-white vh-100 z-1 position-relative '>
                    <Slidebar/>
        
                    </div>}
                    {/* {toggle && <div className='col-3 col-md-2'> heleo moter</div>}
                    */}
                    <div className='col'>
                <Nav Toggle={Toggle}/>
        
                <Routes>
                    
                    <Route path='/' element={<AdminElement> <Dashboard/> </AdminElement>}></Route>                    
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/fee' element={<Fee/>}></Route>
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/user' element={<AdminElement><Users/></AdminElement>}></Route>
                    <Route path='/package' element={<AdminElement><Package/></AdminElement>}></Route>
                    
                    <Route path='/statement' element={<Statement/>}></Route>
                    <Route path='/statement/:id' element={<Ustatement/>}></Route>
                    <Route path='/package/:id' element={<Packageedit/>}></Route>
                </Routes>
        
                        {/* <Users /> */}
                    </div>
                </div>
            </div>
          )
    }
    else{
        return(
            <>
            <Routes>
                    <Route path='/' element={<Landingpage/>}></Route>
                    <Route path='/login' element={<Signin/>}></Route>
                    <Route path='/register' element={<Users/>}></Route>
                </Routes>
            </>
        )
    }
 
}

export default App