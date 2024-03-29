import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loading from "../../Loading";

function Statement() {
  const [statement, setStatement] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/user/statement`, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        if (res.data.statement !== null) {
          setStatement(res.data.statement);
          calculateTotal(res.data.statement);
          console.log(res);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const calculateTotal = (statement) => {
    let totalAmount = 0;
    statement.forEach((item) => {
      totalAmount += item.amount;
    });
    setTotal(totalAmount);
  };
  return (
    <>
      {loading && <Loading />}
      <div>
        <h2 className="text-white fs-4">Statement</h2>

        <table
          className="table bg-transparent text-white rounded mt-5"
          border={"1"}
        >
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Packages</th>
              <th scope="col">Medium</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {statement.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.renew_date}</th>
                <td>{item.package.name}</td>
                <td>{item.medium}</td>
                <td>{item.status}</td>
                <td>Rs.{item.amount}</td>
              </tr>
            ))}

            <tr>
              <td colSpan="6"></td>
            </tr>
            <tr>
              <td colSpan="4" className="text-center">
                Total:
              </td>
              <td>Rs.{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Statement;
