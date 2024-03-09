import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const calcBMI = (e) => {
    e.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Enter something valid");
    } else {
      let BMI = (weight / height ** 2) * 703;
      setBmi(BMI.toFixed(1));

      if (BMI < 25) {
        setMsg("You are under Weight");
      } else if (BMI >= 25 && BMI <= 30) {
        setMsg("You are a  healthy weight");
      } else {
        setMsg("You are over Weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      {/* Formula: weight (lb) / [height (in)]2 x 703 */}

      <div
        className="flex flex-col mt-16 ml-[25rem] 
       h-[20rem] w-[25rem] border border-black "
      >
        <h1
          className=" text-xl text-center mt-2
      mb-4 "
        >
          Calculate BMI
        </h1>

        <form
          onSubmit={calcBMI}
          className="flex flex-col ml-12 gap-5
     "
        >
          <div>
            <label htmlFor="height">Enter Height (in) : </label>
            <input
              type="text"
              id="height"
              value={height}
              placeholder="Enter your height"
              onChange={(e) => setHeight(e.target.value)}
              className="outline-none"
            />
          </div>

          <div>
            <label htmlFor="weight">Enter Weight (lbs) : </label>
            <input
              type="text"
              id="weight"
              value={weight}
              placeholder="Enter Your weight"
              onChange={(evt) => setWeight(evt.target.value)}
              className="outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-[2rem] w-[17rem] bg-orange-600  text-white "
          >
            Submit
          </button>
          <button
            onClick={() => reload()}
            className="h-[2rem] w-[17rem] bg-orange-100 mb-4"
          >
            Reset
          </button>
        </form>
        <div className="ml-12">
          <div>
            <b>Your BMI is {bmi}</b>
          </div>
          <div>{msg}</div>
        </div>
      </div>
    </>
  );
}

export default App;
