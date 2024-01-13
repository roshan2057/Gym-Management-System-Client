import { Link } from "react-router-dom"

function Landingpage() {

    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="canvas-close">
                    <i className="fa fa-close"></i>
                </div>
                <div className="canvas-search search-switch">
                    <i className="fa fa-search"></i>
                </div>
                <nav className="canvas-menu mobile-menu">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./about-us.html">About Us</a></li>
                        <li><a href="./services.html">Package</a></li>
                        <li><Link to={'/login'}>Login</Link></li>

                        <li><a href="./contact.html">Register</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="canvas-social">
                    <a href="www.facebook.com"><i className="fa fa-facebook"></i></a>
                    <a href="www.twitter.com"><i className="fa fa-twitter"></i></a>
                    <a href="www.youtube.com"><i className="fa fa-youtube-play"></i></a>
                    <a href="www.instagram.com"><i className="fa fa-instagram"></i></a>
                </div>
            </div>

            <section className="hero-section bg-black">
                <div className="hs-slider ">
                    <div className="hs-item set-bg z-0 position-relative" style={{ backgroundImage: 'url(img/hero/hero-1.jpg)' }}>
                        <div className="container position">
                            <div className="row z-1">
                                <div className="col-lg-6 offset-lg-6">
                                    <div className="hi-text color-black">
                                        <span>Shape your body</span>
                                        <h1>Be <strong>strong</strong> traning hard</h1>
                                        <a href="/" className="primary-btn">Get info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Why chose us?</span>
                                <h2>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-034-stationary-bike"></span>
                                <h4>Modern equipment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-033-juice"></span>
                                <h4>Healthy nutrition plan</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-002-dumbell"></span>
                                <h4>Proffesponal training plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-014-heart-beat"></span>
                                <h4>Unique to your needs</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg" style={{ backgroundImage: 'url(img/banner-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text">
                                <h2>registration now to get more deals</h2>
                                <div className="bt-tips">Where health, beauty and fitness meet.</div>
                                <a href="/" className="primary-btn  btn-normal">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Plan</span>
                                <h2>Choose your pricing plan</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>className drop-in</h3>
                                <div className="pi-price">
                                    <h2>$ 39.0</h2>
                                    <span>SINGLE className</span>
                                </div>
                                <ul>
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classNamees</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li>
                                </ul>
                                <a href="/" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="/" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>12 Month unlimited</h3>
                                <div className="pi-price">
                                    <h2>$ 99.0</h2>
                                    <span>SINGLE className</span>
                                </div>
                                <ul>
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classNamees</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li>
                                </ul>
                                <a href="/" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="/" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>6 Month unlimited</h3>
                                <div className="pi-price">
                                    <h2>$ 59.0</h2>
                                    <span>SINGLE className</span>
                                </div>
                                <ul>
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classNamees</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li>
                                </ul>
                                <a href="/" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="/" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gettouch-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-map-marker"></i>
                                <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-mobile"></i>
                                <ul>
                                    <li>125-711-811</li>
                                    <li>125-668-886</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text email">
                                <i className="fa fa-envelope"></i>
                                <p>Support.gymcenter@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="/"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                                <div className="fa-social">
                                    <a href="www.facebook.com"><i className="fa fa-facebook"></i></a>
                                    <a href="www.twitter.com"><i className="fa fa-twitter"></i></a>
                                    <a href="www.facebook.com"><i className="fa fa-youtube-play"></i></a>
                                    <a href="www.instagram.com"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa  fa-envelope-o"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Useful links</h4>
                                <ul>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">classNamees</a></li>
                                    <li><a href="/">Contact</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Support</h4>
                                <ul>
                                    <li><Link to={'/login'}>Login</Link></li>
                                    <li><a href="/">My account</a></li>
                                    <li><a href="/">Subscribe</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fs-widget">
                                <h4>Tips & Guides</h4>
                                <div className="fw-recent">
                                    <h6><a href="/">Physical fitness may help prevent depression, anxiety</a></h6>
                                    <ul>
                                        <li>3 min read</li>
                                        <li>20 Comment</li>
                                    </ul>
                                </div>
                                <div className="fw-recent">
                                    <h6><a href="/">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                                    <ul>
                                        <li>3 min read</li>
                                        <li>20 Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div> */}






        </>


    )
}

export default Landingpage