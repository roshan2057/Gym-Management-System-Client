import React from 'react'
import { useParams } from 'react-router-dom'

function Ustatement() {
    const {id} = useParams();
    console.log(id)
  return (
    <div>Ustatement</div>
  )
}

export default Ustatement