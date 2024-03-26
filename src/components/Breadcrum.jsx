import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrum(props) {
    const breadcrumStyle={
        fontSize:'2rem',
        padding:'10px',
        fontFamily:'Poppins',
    }
  return (
    <>
<nav aria-label="breadcrumb " style={{marginLeft:'20px',marginTop:'30px'}}>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" style={breadcrumStyle}><Link to="/">Home</Link></li>
    <li class="breadcrumb-item" style={breadcrumStyle}><Link to="/ghats">Ghats</Link></li>
    <li class="breadcrumb-item active" aria-current="page" style={breadcrumStyle}>{props.ghat}</li>
  </ol>
</nav>
    </>
  )
}

export default Breadcrum
