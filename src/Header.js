import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <header className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="nav-menu">
                                <ul>
                                    <li><Link to={'/'}>Home</Link></li>
                                    
                                    <li><Link to={'/login'}>Login/Register</Link></li>

                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="top-option">
                                <div className="to-search search-switch">
                                    <i className="fa fa-search"></i>
                                </div>
                                <div className="to-social">
                                    <a href=""><i className="fa fa-facebook"></i></a>
                                    <a href=""><i className="fa fa-twitter"></i></a>
                                    <a href=""><i className="fa fa-youtube-play"></i></a>
                                    <a href=""><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas-open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
    </>
  )
}

export default Header