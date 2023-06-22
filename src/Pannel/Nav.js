import React from 'react'
import 'bootstrap/js/dist/dropdown'
import { Link } from 'react-router-dom'

function Nav({Toggle}) {
  return (
    <nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-3" onClick={Toggle}></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
               
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/dropdown" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <Link className="dropdown-item" to={'/profile'}>Profile</Link>
                        <Link className="dropdown-item" to={'/contact'}>Contact</Link>
                    </div>
                </li>
            </ul>
           
        </div>
    </nav>
</nav>
  )
}

export default Nav