import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";

function Packageedit() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const jsonData = decodeURIComponent(id);
  const data = JSON.parse(jsonData);
  const update = (event) => {
    event.preventDefault();
    let data = {
      name: event.target.name.value,
      num_months: event.target.noofmth.value,
      price: event.target.price.value,
      status: event.target.status.value,
    };
    setLoading(true);
    axios
      .put(
        `${process.env.REACT_APP_API}/admin/package/${event.target.pac_id.value}`,
        {
          headers: {
            auth: Cookies.get("token"),
          },
          data,
        }
      )
      .then((res) => {
        setLoading(false);
        alert("Updated");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      {loading && <Loading />}
      <div className="d-flex justify-content-around flex-wrap">
        <div className="form">
          <h1 className="text-black fs-4">Edit Package</h1>

          <form
            className="d-flex caption-top w-75 bg-white rounded p-2 m-5 flex-wrap flex-column justify-conten-center"
            onSubmit={update}
          >
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input type="hidden" name="pac_id" value={data.pac_id} />
                <label className="d-block">Name</label>
                <input type="text" name="name" defaultValue={data.name} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="d-block">Number of Months</label>
                <input
                  type="text"
                  name="noofmth"
                  defaultValue={data.num_months}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <label className="d-block">Price</label>
                <input type="number" name="price" defaultValue={data.price} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="d-block">Status</label>

                <select
                  className="mt-2"
                  name="status"
                  defaultValue={data.status}
                >
                  <option value={"1"}>Online</option>
                  <option value={"0"}>Offline</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary my-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Packageedit;
