import React from "react";
import { BulbIcon } from "../../assets";


export default function SidebarStepper({
  steps = [],
  activeStep = 0,
  setActiveStep = () => {},
  isDis = false,
}) {
  return (
    <div className="bg-[#222230] rounded-md p-4 gap-12 flex flex-col relative justify-start items-start w-full ">
      {steps.map((val, idx) => (
        <div
          key={val.id}
          className={`flex flex-col items-center ${
            isDis ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            if (!isDis) {
              setActiveStep(idx);
            }
          }}
        >
          {/* ICON + TITLE */}
          <div className="flex justify-center gap-3 items-center">
            {/* ICON CONTAINER */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
              <img
                src={idx <= activeStep ? val.activeIcon : val.unActiveIcon}
                alt=""
                className="w-12 h-12"
              />

              {/* VERTICAL LINE */}
              {idx !== steps.length - 1 && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 top-full h-12 w-[5px] ${
                    idx < activeStep ? "bg-[#E75050]" : "bg-gray-600"
                  }`}
                ></div>
              )}
            </div>

            {/* TITLE */}
            <p
              className={`text-md font-semibold ${
                idx <= activeStep ? "text-[#E75050]" : "text-white"
              }`}
            >
              {val.title}
            </p>
          </div>
        </div>
      ))}

      {/* GUIDE SECTION (Visible only if isDis is true) */}
      {isDis && (
        <div className="bg-[#2f2f3c] hidden lg:block w-full p-3 rounded-md mt-20">
          <div className="w-full flex justify-start gap-1 items-center">
            <img src={BulbIcon} alt="guide" className="w-8 h-7" />
            <h1 className="text-gray-200 text-[17px]">Guide</h1>
          </div>

          <p className="text-sm text-[#919191] mt-2 font-medium leading-[21px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book...
          </p>
        </div>
      )}
    </div>
  );
}
