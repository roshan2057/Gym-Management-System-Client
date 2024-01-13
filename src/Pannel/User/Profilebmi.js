import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import Loading from "../../Loading";

function Profilebmi(props) {
  const [loading, setLoading] = useState(false);
  const user = props.data;

  const update = (event) => {
    setLoading(true);
    event.preventDefault();
    const user = {
      height: event.target.height.value,
      weight: event.target.weight.value,
    };

    const ht = user.height / 100;
    const bmi = (user.weight / ht ** 2).toFixed(2);
    user.bmi = bmi;

    axios
      .put(`${process.env.REACT_APP_API}/user/bmi`, user, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Update Success");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <>
      {loading && <Loading />}
      <h1>BMI</h1>
      <form onSubmit={update}>
        <div className="left">
          <label>Hight</label>
          <label>Weight</label>
        </div>
        <div className="right">
          <input type="text" defaultValue={user.height} name="height" />
          <input type="text" defaultValue={user.weight} name="weight" />
          <input type="submit" value={"Update"} />
        </div>
      </form>
    </>
  );
}

export default Profilebmi;
