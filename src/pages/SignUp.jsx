import React from "react";
import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
import { Background, Background2 } from "../assets/index.js";

export default function SignUp() {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[35%] h-auto sm:h-[75%] bg-cover bg-center !p-10 rounded-lg shadow-md"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="flex flex-col gap-7 pt-4">
          <h1 className="text-[24px] !font-Ibmp sm:text-[27px] md:text-[36px] font-bold text-center text-white leading-tight">
            Sign Up to <span className="text-[#F35252]">GorillaBoost</span>
          </h1>

          <div className="!flex flex-col justify-center items-start gap-1">
            <label
              htmlFor="Email"
              className="text-gray-600 text-base sm:text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              placeholder="name@work-email.com"
              className="!p-2 w-full text-gray-600 border-gray-600 border-b border-l rounded-md bg-[#161112] outline-none"
            />
          </div>

          <button className="w-full bg-[#d1d1d1] !rounded-full !p-2 font-semibold text-black hover:bg-gray-300 transition">
            LOG IN
          </button>

          <div className="flex justify-center items-center text-sm sm:text-lg gap-2 text-[#2D2F31]">
            <span className="block w-[40%] h-[1px] sm:h-[2px] bg-gray-600"></span>{" "}
            OR
            <span className="block w-[40%] h-[1px] sm:h-[2px] bg-gray-600"></span>
          </div>

          <button className="w-full bg-[#0b0c0e] !rounded-sm !p-2 font-medium flex justify-center items-center border border-gray-600 text-white gap-4 hover:bg-[#1a1b1d] transition">
            <Icon icon="gg:google" width={25} height={25} /> Sign Up with Google
          </button>

          <div className="text-center mt-4 text-sm sm:text-md text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-white underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
