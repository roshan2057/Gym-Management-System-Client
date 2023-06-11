import React from 'react'

function Userpackage(props) {
    const packdata = props.pack;
  return (
   <>
    <h1 className='text-center text-white'>Package</h1>

<table className="table table-striped bg-white rounded">

<thead>
<tr>
<th scope="col">S.N</th>
<th scope="col">Name</th>
<th scope="col">N.of Months</th>
<th scope="col">Amount</th>
</tr>
</thead>
<tbody>
    {
        packdata.map((item, index)=>(
           <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            <td className='text-center'>{item.num_months}</td>
            <td>Rs.{item.price}</td>
            </tr>
        ))
    }



</tbody>
</table>
   </>
  )
}

export default Userpackage