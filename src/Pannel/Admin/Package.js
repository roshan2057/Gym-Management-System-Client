import React, { useEffect, useState } from "react";
import Ponlinelist from "./Ponlinelist";
import Pofflinelist from "./Pofflinelist";
import Cookies from "js-cookie";
import axios from "axios";
import "./package.css";
import Addpackage from "./Addpackage";
import Loading from "../../Loading";

function Package() {
  const [show, setShow] = useState(true);
  const [online, setOnline] = useState([]);
  const [offline, setOffline] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/admin/package`, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.package);
        const pdata = res.data.package;

        setOnline(pdata.filter((item) => item.status === "1"));
        setOffline(pdata.filter((item) => item.status === "0"));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="d-flex justify-content-around flex-wrap">
        <div className="form">
          <Addpackage />
        </div>
        <div className="w-auto">
          <button onClick={() => setShow(true)} className="btn btn-success m-2">
            Online
          </button>
          <button
            onClick={() => setShow(false)}
            className="btn btn-danger mx-2"
          >
            Offline
          </button>

          {show ? (
            <Ponlinelist pack={online} />
          ) : (
            <Pofflinelist pack={offline} />
          )}
        </div>
      </div>
    </>
  );
}

export default Package;
