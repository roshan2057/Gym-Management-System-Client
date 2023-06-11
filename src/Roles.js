import React from 'react'
import Auth from './Auth'
import { Navigate } from 'react-router-dom';

const usertype = Auth();
const AdminElement =({children})=>{
    if(usertype === 'admin'){
        return<>{children}</>
    }
    else{
        return <Navigate to={'/home'}/>;
    }
}

export {AdminElement};