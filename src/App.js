import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Slidebar from "./Pannel/Slidebar";
import Dashboard from "./Pannel/Admin/Dashboard";
import Nav from "./Pannel/Nav";
import Users from "./Pannel/Admin/Users";
import { Route, Routes } from "react-router-dom";
import Statement from "./Pannel/User/Statement";
import Home from "./Pannel/User/Home";
import Package from "./Pannel/Admin/Package";
import Signin from "./Landingpage/Signin";
import Landingpage from "./Landingpage/Landingpage";
import Auth from "./Auth";
import Fee from ".//Pannel/User/Fee";
import Profile from "./Pannel/User/Profile";
import { AdminElement } from "./Roles";
import Packageedit from "./Pannel/Admin/Packageedit";
import Header from "./Landingpage/Header";
import Adminsignin from "./Landingpage/Adminsignin";
import CODlist from "./Pannel/Admin/CODlist";
import Khaltilist from "./Pannel/Admin/Khaltilist";
import Addbill from "./Pannel/Admin/Addbill";
import Userstatement from "./Pannel/Admin/Userstatement";
import Forgetpassword from "./Landingpage/Forgetpassword";
import Resetpassword from "./Landingpage/Resetpassword";

const login = Auth();

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  if (login) {
    return (
      <div className="bg-secondary min-vh-50 my-0">
        <div className="row">
          {toggle && <Slidebar />}
          {/* {toggle && <div className='col-3 col-md-2'> heleo moter</div>}
           */}
          <div className="col">
            <Nav Toggle={Toggle} />

            <video className="video-bg" autoPlay muted loop>
              <source src="/video/background_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Routes>
              <Route
                path="/"
                element={
                  <AdminElement>
                    {" "}
                    <Dashboard />{" "}
                  </AdminElement>
                }
              ></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/fee" element={<Fee />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route
                path="/user"
                element={
                  <AdminElement>
                    <Users />
                  </AdminElement>
                }
              ></Route>
              <Route
                path="/package"
                element={
                  <AdminElement>
                    <Package />
                  </AdminElement>
                }
              ></Route>
              <Route
                path="/addbill"
                element={
                  <AdminElement>
                    <Addbill />
                  </AdminElement>
                }
              ></Route>
              <Route
                path="/cod"
                element={
                  <AdminElement>
                    <CODlist />
                  </AdminElement>
                }
              ></Route>
              <Route
                path="/khalti"
                element={
                  <AdminElement>
                    <Khaltilist />
                  </AdminElement>
                }
              ></Route>
              <Route
                path="/user/:name/:id"
                element={
                  <AdminElement>
                    <Userstatement />
                  </AdminElement>
                }
              ></Route>

              <Route path="/statement" element={<Statement />}></Route>
              <Route path="/package/:id" element={<Packageedit />}></Route>
            </Routes>

            {/* <Users /> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
          <Route path="/resetpassword" element={<Resetpassword />}></Route>

          <Route path="/admin/login" element={<Adminsignin />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
