import React from "react";
import logo from "../src/logo.png";
import google from "../src/images.png";
import apple from "../src/apple-logo-6-1024x1024.png";

function App() {
  return (
    <>
      <div
        className=" h-[20rem] w-[20rem] border mt-[4rem] ml-[27%] pl-[2rem] text-[9px]
    bg-blue-100
    
    "
      >
        <img
          src={logo}
          alt="logo"
          className="w-[1.4rem] h-[1.4rem] ml-[41%] rounded-3xl mb-2 mt-1 "
        />
        <h1 className="text-center font-bold mb-2 ml-[-2rem] cursor-pointer ">
          Sign in to Twitter
        </h1>

        <div
          className="flex justify-center align-center 
      h-[1.5rem] w-[14rem] border border-black rounded-3xl ml-3"
        >
          <img
            src={google}
            alt="google"
            className="w-[1.3rem] h-[1.3rem]  text-center rounded-xl
        align-center "
          />
          <h2>Sign in with Google</h2>
        </div>

        <div
          className="flex justify-center align-center h-[1.5rem] w-[14rem] border border-black rounded-3xl
      ml-3 mt-3 "
        >
          <img
            src={apple}
            alt="Apple"
            className="w-[1.3rem] h-[1.3rem] rounded-2xl text-center
        align-center "
          />
          <h2>Sign in with Apple</h2>
        </div>

        <div className="flex  align-center justify-center ml-[-2rem] ">
          <hr className="bg-black w-[6rem] mt-2 h-[1px] mr-2 " />
          <div>Or</div>
          <hr className="bg-black w-[6rem] mt-2 h-[1px] ml-2 " />
        </div>
        <input
          className="h-[1.6rem] w-[14rem] border border-black rounded-2xl
      text-center ml-3 outline-none "
          placeholder="Phone Email or Username"
        ></input>

        <button
          className="h-[1.5rem] w-[14rem] ml-3 text-center 
      border border-black rounded-3xl text-white bg-black  mt-2 "
        >
          Next
        </button>
        <button
          className="h-[1.5rem] w-[14rem] ml-3 text-center 
      border border-black rounded-3xl mt-2
      
      "
        >
          Forget Password
        </button>

        <div>
          <h2 className="mt-8 ml-4 cursor-pointer ">
            Don't have an account?{" "}
            <a href="#" className="text-blue-700">
              Sign up
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
