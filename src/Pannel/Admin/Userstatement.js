import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";

function Userstatement() {
  const { id } = useParams();
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  console.log(name);
  const [statement, setStatement] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API}/admin/userstatement/${id}`, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.data !== null) {
          setStatement(res.data.data);
          calculateTotal(res.data.data);
          console.log(res);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const calculateTotal = (statement) => {
    let totalAmount = 0;
    statement.forEach((item) => {
      totalAmount += item.amount;
    });
    setTotal(totalAmount);
  };
  return (
    <div>
      {loading && <Loading />}
      <h2 className="text-white fs-4">{name}</h2>

      <table className="table table-striped bg-white rounded mt-5">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Package</th>
            <th scope="col">Medium</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {statement.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.renew_date}</th>
              <td>{item.package.name}</td>
              <td>{item.medium}</td>
              <td>Rs.{item.amount}</td>
            </tr>
          ))}

          <tr>
            <td colSpan="4"></td>
          </tr>
          <tr>
            <td colSpan="3" className="text-center">
              Total:
            </td>
            <td>Rs.{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Userstatement;
