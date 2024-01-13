import React, { useEffect, useState } from "react";
import "bootstrap/js/dist/modal";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import MyModal from "./Sendmainmodal";
import Loading from "../../Loading";
function Users() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/admin/members`)
      .then((res) => {
        console.log(res.data.data);
        const pdata = res.data.data;
        setMembers(pdata);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const remove = (id) => {
    setLoading(true);
    axios
      .delete(`${process.env.REACT_APP_API}/admin/deletemember/${id}`, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert(res.data.data);
          window.location.reload();
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading && <Loading />}
      <h1 className="text-white fs-4">List of Members</h1>
      <form className="text-right">
        <input
          className="bg-white text-center rounded-4 mb-0"
          placeholder="Search"
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
      <table className="table bg-red rounded mt-5">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Name</th>
            <th scope="col">Membership id</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col" className="text-center">
              Statement
            </th>
            <th scope="col" className="text-center">
              Action
            </th>
            <th>Send mail</th>
          </tr>
        </thead>
        <tbody>
          {members
            .filter(
              (item) =>
                item.name.toLowerCase().includes(search) ||
                item.id.toString().includes(search)
            )
            .map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td className="text-center">
                  <Link
                    to={{
                      pathname: `/user/${item.name}/${item.id}/`,
                    }}
                  >
                    View
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => remove(item.id)}
                  >
                    <i class="bi bi-person-dash p-2 fs-4"></i>
                    Delete
                  </button>
                </td>
                <td>
                  <MyModal email={item.email} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
