import React from "react";
import { Background, Background2 } from "../assets/index.js";

export default function Otp() {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        className="w-full sm:w-[40%] md:w-[50%] lg:w-[30%] xl:w-[35%] h-auto bg-cover bg-center p-4 sm:p-6 rounded-lg shadow-md"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className=" flex flex-col gap-5 sm:gap-6 pt-4 px-2 sm:px-4 mt-4">
          <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-start text-white leading-snug">
            Create New Account
          </h1>
          <h6 className="text-gray-500 text-sm mt-0 md:-mt-6">
            We've sent a code to{" "}
            <span className="text-gray-300">ammararain800@gmail.com</span>
          </h6>

          {/* OTP Boxes */}
          <div className="w-full  flex flex-wrap gap-3 justify-start items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-10 h-12 sm:w-10 sm:h-14 text-center text-xl text-white bg-[#161112] border border-gray-800 rounded-md outline-none focus:ring-2 focus:ring-[#F35252] transition"
              />
            ))}

            {/* Divider line */}
            <span className="w-6 h-0.5 bg-gray-500"></span>

            {Array.from({ length: 3 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-10 h-12 sm:w-10 sm:h-14 text-center text-xl text-white bg-[#161112] border border-gray-800 rounded-md outline-none focus:ring-2 focus:ring-[#F35252] transition"
              />
            ))}
          </div>

          {/* Support Text */}
          <div className="w-full text-sm text-gray-600 mt-2">
            <p>Can't find your code? Check your spam folder.</p>
            <p className="mt-1">
              Haven't received the code?{" "}
              <span className="text-gray-300 underline cursor-pointer">
                Get a new code
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <button className="bg-[#d1d1d1] md:w-[100%] !lg:w-[80%] !w-[70%] rounded-full p-2 mb-10 font-semibold text-black hover:bg-gray-300 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
