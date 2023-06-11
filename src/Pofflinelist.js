import React from 'react'
import { Link } from 'react-router-dom';

function Pofflinelist(props) {
  const packdata = props.pack;
  return (
    <div>
       
        <table className="table table-striped bg-white rounded">

  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Name</th>
      <th scope="col">Number of Months</th>
      <th scope="col">Amount</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
      packdata.map((data, index)=>(
        <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{data.name}</td>
      <td className='text-center'>{data.num_months}</td>
      <td>Rs.{data.price}</td>
      <td className='text-danger'>Offline</td>
      <td><Link to={`/package/${data.pac_id}`}>Edit</Link></td>
    </tr>
      ))
    }
    
  </tbody>
</table>
    </div>
  )
}

export default Pofflinelist