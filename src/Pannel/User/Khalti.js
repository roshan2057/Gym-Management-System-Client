import React, { useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import axios from "axios";
import Cookies from "js-cookie";
import Esewa from "./esewa";
import Loading from "../../Loading";

function Khalti(props) {
  const [packid, setPackid] = useState("0");
  const [price, setPrice] = useState("0");
  const [loading, setLoading] = useState(false);

  const packdata = props.pack;

  let config = {
    // replace this key with yours
    "publicKey": "test_public_key_99697f8fd7fc41e8b922cb5f84cf4e82",
    // "productIdentity": userid,
    // publicKey: `${process.env.REACT_APP_khaltikey}`,
    productIdentity: packid,
    productName: "khalit",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        setLoading(true);
        axios
          .post(`${process.env.REACT_APP_API}/user/payment/khalti`, payload, {
            headers: {
              auth: Cookies.get("token"),
            },
          })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      },
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: ["KHALTI", "MOBILE_BANKING"],
  };

  let checkout = new KhaltiCheckout(config);

  function check(event) {
    event.preventDefault();
    if (packid === "0") {
      return alert("Please select package");
    }
    checkout.show({ amount: 1000 });
  }

  function cod(event) {
    event.preventDefault();
    if (packid === "0") {
      return alert("Please select package");
    }
    const data = {
      packid: packid,
    };
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API}/user/payment/cod`, data, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        alert("Please pay within 5 day from now Thanks!!");
        window.location.reload();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const update = (id, price) => {
    console.log(id);
    console.log(price);
    setPrice(price);
    setPackid(id);
  };

  function generateQR(event) {
    event.preventDefault();
    if (packid === "0") {
      return alert("Please select a package");
    }

    props.openModal(packid); // Call the openModal function from props to open the modal in the parent component
  }
  return (
    <>
      {loading && <Loading />}
      <div className="col-6">
        <h1 className="text-center text-white">Renew</h1>

        <div className="bg-transparent text-white border border-success rounded text-center w-75 p-4 m-auto">
          <form>
            <h3 className="text-center text-white">Select Package</h3>

            <select
              className="m-2"
              id="package"
              onChange={(event) =>
                update(
                  event.target.value,
                  packdata[event.target.selectedIndex - 1].price
                )
              }
            >
              <option value={"0"}>Select</option>
              {packdata.map((item, index) => (
                <option key={index} value={item.pac_id} data-price={item.price}>
                  {item.name}
                </option>
              ))}
            </select>
            <h3 className="text-center text-white">Payment method</h3>
            <div className="d-flex mt-3">
              <button className="btn btn-success " onClick={cod}>
                COD
              </button>
              <button className="btn btn-success " onClick={check}>
                <img
                  src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png"
                  alt="Khalti Logo"
                  width="60"
                  height="20"
                />
              </button>

              <Esewa amount={price} />
              <button className="btn btn-success" onClick={generateQR}>
                Genereate QR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Khalti;
