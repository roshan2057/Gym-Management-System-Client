import React from "react";
import "./signin.css";
import Cookies from "js-cookie";
import Signup from "./Signup";
import axios from "axios";
import { Link } from "react-router-dom";

function Signin() {
  const login = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const password = event.target.password.value;
    if (!phone || !password === null) {
      return alert("Field required");
    }

    axios
      .post(`${process.env.REACT_APP_API}/user/login`, {
        phone,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          Cookies.set("token", res.data.token);
          Cookies.set("type", res.data.user);

          window.location.href = "/home";
        } else {
          alert("no data");
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.data);
      });
  };

  return (
    <>
      <div
        className="container-fluid h-100 position-absolute"
        style={{ backgroundImage: "url(img/hero/hero-2.jpg)" }}
      >
        <div className="box">
          <div className="mx-5">
            <h1 className="text-white text-center">Sign In</h1>
            <form className="bg-white p-3 w-auto rounded" onSubmit={login}>
              <label className="d-block">Phone Number</label>
              <input className="d-block" type="text" name="phone" />
              <label className="d-block">Password</label>
              <input className="d-block" type="password" name="password" />
              <input className="d-block" type="submit" value="Sign In" />
              <div className="a">
                <Link to="/forgetpassword">forget password</Link>
              </div>
            </form>
          </div>
          <Signup />
        </div>
      </div>
    </>
  );
}

export default Signin;
