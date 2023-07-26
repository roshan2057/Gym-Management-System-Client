import React from 'react'
import Khalticount from './Dashboardcomponents/Khalticount'
import Usercount from './Dashboardcomponents/Usercount'
import Codcount from './Dashboardcomponents/Codcount'
import Totalcount from './Dashboardcomponents/Totalcount'
function Dashboard() {
  return (
   <div className='px-3'>
    <div className='container-fulid'>
        <div className='row g-3 my-2'>
            <Usercount/>

            <Khalticount/>
<Codcount/>
            

            <Totalcount/>

           
        </div>
    </div>

    
   </div>
  )
}

export default Dashboard