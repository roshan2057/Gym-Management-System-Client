import React, { useEffect, useState } from "react";

function Feedetails(props) {
  const [bill, setBill] = useState({});
  const [alert, setAlert] = useState("");

  useEffect(() => {
    setBill(props.data);
  }, [props.data]);

  useEffect(() => {
    const dateexpire = new Date(bill.expire_date);
    const today = new Date();
    const diff = dateexpire.getTime() - today.getTime();
    const rem = Math.floor(diff / (1000 * 60 * 60 * 24));

    rem > 0
      ? setAlert(rem + " days remaining to expire")
      : setAlert("Expired!! Please Renew from below");
  }, [bill]);

  const getAlertClass = () => {
    const dateexpire = new Date(bill.expire_date);
    const today = new Date();
    const diff = dateexpire.getTime() - today.getTime();
    const rem = Math.floor(diff / (1000 * 60 * 60 * 24));
    return alert.includes("Expired")
      ? "bg-danger"
      : rem > 5
      ? "bg-success"
      : "bg-danger";
  };

  return (
    <>
      <div className="col-6 ">
        <h1 className="text-center text-white">Fee Details</h1>
        <table className="table bg-transparent text-white " border="1">
          <tbody className="text-white">
            <tr>
              <td>Name</td>
              <td>{bill.member_name}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{bill.member_phone}</td>
            </tr>
            <tr>
              <td>Package Name</td>
              <td>{bill.package_name}</td>
            </tr>
            <tr>
              <td>Package-Price</td>
              <td>{bill.package_price}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{bill.status}</td>
            </tr>
            <tr>
              <td>Renew Date</td>
              <td>{bill.renew_date}</td>
            </tr>
            <tr>
              <td>Expire Date</td>
              <td>{bill.expire_date}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <span
            className={`d-block ${getAlertClass()} text-white p-2 rounded`}
            id="rem"
          >
            {alert}
          </span>
        </div>
      </div>
    </>
  );
}

export default Feedetails;
