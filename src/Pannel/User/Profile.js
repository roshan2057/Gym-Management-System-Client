import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import Cookies from "js-cookie";
import Profilebmi from "./Profilebmi";
import Profiledetails from "./Profiledetails";
import Loading from "../../Loading";

function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/user/profile`, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changepassword = (event) => {
    const form = document.getElementById("changepassword");
    event.preventDefault();

    const user = {
      password: event.target.password.value,
      newpassword: event.target.newpassword.value,
      cpassword: event.target.cpassword.value,
    };
    if (user.newpassword !== user.cpassword) {
      return alert("Password not matched");
    }
    setLoading(true)
    axios
      .put(`${process.env.REACT_APP_API}/user/changepassword`, user, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res) {
          console.log(res);
          alert(res.data.data);
          form.reset();
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    {loading && <Loading/>}
    <div className="main bg-transparent text-white border border-info p-3 rounded d-flex flex-wrap">
      <Profiledetails data={user} />

      <div className="bmi col-2">
        <Profilebmi data={user} />
      </div>

      <div className="password col-12">
        <h1>Change Password</h1>
        <form onSubmit={changepassword} id="changepassword">
          <div className="left">
            <label>Current Password</label>
            <label>New Password</label>
            <label>Confirm Password</label>
          </div>
          <div className="right">
            <input type="password" name="password" />
            <input type="password" name="newpassword" />
            <input type="password" name="cpassword" />
            <input type="submit" value={"Change"} />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Profile;
