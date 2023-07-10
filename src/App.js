import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Slidebar from './Pannel/Slidebar'
import Dashboard from './Pannel/Admin/Dashboard'
import Nav from './Pannel/Nav'
import Users from './Pannel/Admin/Users'
import { Route, Routes } from 'react-router-dom'
import Statement from './Pannel/User/Statement'
import Home from './Pannel/User/Home'
import Package from './Pannel/Admin/Package'
import Signin from './Landingpage/Signin'
import Landingpage from './Landingpage/Landingpage'
import Auth from './Auth';
import Fee from './/Pannel/User/Fee'
import Profile from './Pannel/User/Profile'
import Ustatement from './Pannel/User/Ustatement'
import { AdminElement } from './Roles'
import Packageedit from './Pannel/Admin/Packageedit'
import Header from './Landingpage/Header'
import Adminsignin from './Landingpage/Adminsignin'
import CODlist from './Pannel/Admin/CODlist'
import Khaltilist from './Pannel/Admin/Khaltilist'

const login = Auth();

function App() {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
    if (login) {
        return (


            <div className='container-fluid bg-secondary min-vh-100'>
                <div className='row'>
                    {toggle && <div className='col-3 col-md-2 bg-white vh-100 z-1 position-relative '>
                        <Slidebar />

                    </div>}
                    {/* {toggle && <div className='col-3 col-md-2'> heleo moter</div>}
                    */}
                    <div className='col'>
                        <Nav Toggle={Toggle} />

                        <Routes>

                            <Route path='/' element={<AdminElement> <Dashboard /> </AdminElement>}></Route>
                            <Route path='/home' element={<Home />}></Route>
                            <Route path='/fee' element={<Fee />}></Route>
                            <Route path='/profile' element={<Profile />}></Route>
                            <Route path='/user' element={<AdminElement><Users /></AdminElement>}></Route>
                            <Route path='/package' element={<AdminElement><Package /></AdminElement>}></Route>
                            <Route path='/cod' element={<AdminElement><CODlist /></AdminElement>}></Route>
                            <Route path='/khalti' element={<AdminElement><Khaltilist /></AdminElement>}></Route>

                            <Route path='/statement' element={<Statement />}></Route>
                            <Route path='/statement/:id' element={<Ustatement />}></Route>
                            <Route path='/package/:id' element={<Packageedit />}></Route>
                        </Routes>

                        {/* <Users /> */}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/' element={<Landingpage />}></Route>
                    <Route path='/login' element={<Signin />}></Route>
                    <Route path='/admin/login' element={<Adminsignin/>}></Route>
                </Routes>
            </>
        )
    }

}

export default App