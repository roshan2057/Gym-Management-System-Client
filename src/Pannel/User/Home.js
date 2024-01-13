import React, { useState } from "react";
import Homebmi from "./Homebmi";

function Home() {
  const [message, setMessage] = useState("Enter Weight and Height");
  const [color, setColor] = useState("");

  const calculate = (event) => {
    event.preventDefault();
    const height = event.target.height.value / 100;
    const weight = event.target.weight.value;
    const bmi = (weight / height ** 2).toFixed(2);
    if (bmi >= 16 && bmi <= 18.5) {
      setMessage(`${bmi} BMI \n You are UnderWeight`);
      setColor({ r: 0, g: 0, b: 255 });
    } else if (bmi > 18.5 && bmi <= 25) {
      setMessage(`${bmi} BMI \n You are Normal`);
      setColor({ r: 0, g: 128, b: 0 });
    } else if (bmi > 25 && bmi <= 40) {
      setMessage(`${bmi} BMI \n You are OverWeight`);
      setColor({ r: 255, g: 140, b: 0 });
    } else {
      setMessage(`Please input valid height and weight`);
      setColor({ r: 255, g: 0, b: 0 });
    }
  };
  const bmiColorCSS = `rgb(${color.r}, ${color.g}, ${color.b})`;
  return (
    <div className="px-3">
      <div className="container-fulid">
        <div className="row g-4 my-3 d-flex justify-content-between flex-wrap">
          <div className="col-md-3">
            <div className="p-3 bg-transparent text-white border border-success d-flex justify-content-around align-items-center rounded">
              <div>
                <span>
                  <h3 className="d-block text-center text-white">
                    BMI Calculator
                  </h3>
                </span>
                <form className="col-md-12 text-center" onSubmit={calculate}>
                  <label className="d-block">Weight</label>
                  <input type="number" name="weight" placeholder="KG" />
                  <label className="d-block">Height</label>
                  <input type="number" name="height" placeholder="CM" />
                  <button className="d-block " type="submit">
                    Calculate
                  </button>

                  <span
                    className="d-block mt-2 px-3 text-white rounded"
                    style={{ backgroundColor: bmiColorCSS }}
                    id="message"
                  >
                    {" "}
                    {message}
                  </span>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <img
              src="https://www.bhartiaxa.com/sites/default/files/2023-02/bmi-scale.svg"
              alt="hello"
            />
          </div>

          <div className="col-md-3">
            <Homebmi />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
