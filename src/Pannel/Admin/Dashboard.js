import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
function Dashboard() {
  const [count, setCount] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/admin/dashboard`, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setCount(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="px-3">
      <div className="container-fulid">
        <div className="row g-3">
          <div className="col-md-3">
            <div className="p-3 dashboard shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{count.member}</h3>
                <p className="fs-5">Users</p>
              </div>
              <i className="bi bi-people p-3 fs-1"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 dashboard shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{count.khalti}</h3>
                <p className="fs-5">Khalit</p>
              </div>
              <i className="bi bi-wallet p-3 fs-1"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 dashboard shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{count.cash}</h3>
                <p className="fs-5">Cod count</p>
              </div>
              <i class="bi bi-cash p-3 fs-1"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 dashboard shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{count.total}</h3>
                <p className="fs-5">Total</p>
              </div>
              <i className="bi bi-cash-stack p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
