import axios from "axios";
import React, { useState } from "react";
import Loading from "../Loading";

function Signup() {
  const [loading, setLoading] = useState(false);

  const validation = (event) => {
    event.preventDefault();

    let data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      address: event.target.address.value,
      password: event.target.password.value,
      cpassword: event.target.cpassword.value,
      gender: event.target.gender.value,
      height: event.target.height.value,
      weight: event.target.weight.value,
    };

    const ht = data.height / 100;
    const bmi = (data.weight / ht ** 2).toFixed(2);
    data.bmi = bmi;

    if (
      !data.name ||
      !data.phone ||
      !data.email ||
      !data.address ||
      !data.password ||
      !data.cpassword ||
      !data.gender === null
    ) {
      return alert("all field are required");
    } else if (data.password !== data.cpassword) {
      return alert("Password do not matched");
    } else if (data.password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }
    //   else if(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)){
    //   return alert("email not valid");
    // }
    else if (/\d/.test(data.name)) {
      // Check if name contains numbers
      return alert("Name should not contain numbers");
    } else if (!/^98\d{8}$/.test(data.phone)) {
      // Check phone number format
      return alert(
        "Phone number should start with '98' and be 10 characters long"
      );
    } else if (data.height > 185 && data.height < 147) {
      return alert("Invalid Height");
    } else {
      register(data);
    }
  };
  const register = (data) => {
    const form = document.getElementById("register");
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API}/user/register`, {
        data,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Register Sucessfully and you id is" + res.data.id);
          setLoading(false);
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid");
      });
  };
  return (
    <>
      {loading && <Loading />}

      <div
        className="position-absolute text-white w-100 text-center "
        style={{ display: "none" }}
        id="loading"
      >
        <h1>loading........</h1>
      </div>
      <div className="mx-5 ">
        <h1 className="text-white text-center">Create an Account</h1>
        <form
          className="bg-white p-3 rounded"
          onSubmit={validation}
          id="register"
        >
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className="d-block">Name</label>
              <input className="d-block" type="text" name="name" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="d-block">Phone</label>
              <input className="d-block" type="number" name="phone" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="d-block">Email</label>
              <input className="d-block" type="email" name="email" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className="d-block">Address</label>
              <input className="d-block" type="text" name="address" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="d-block">Password</label>
              <input className="d-block" type="password" name="password" />
            </div>

            <div className="col-md-4 mb-3">
              <label className="d-block">Confirm Password</label>
              <input className="d-block" type="password" name="cpassword" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className="d-block m-0">Select Gender</label>
              <input
                className="w-25 "
                type="radio"
                name="gender"
                value="Male"
              />
              Male <br />
              <input
                className="w-25 "
                type="radio"
                name="gender"
                value="Female"
              />
              Female
            </div>

            <div className="col-md-4 mb-2">
              <label className="d-block">Height</label>
              <input
                className="d-block"
                type="number"
                name="height"
                placeholder="CM"
              />
            </div>

            <div className="col-md-4 mb-2">
              <label className="d-block">Weight</label>
              <input
                className="d-block"
                type="number"
                name="weight"
                placeholder="KG"
              />
            </div>
          </div>

          <input className="d-block" type="submit" value="Create" />
        </form>
      </div>
    </>
  );
}

export default Signup;
