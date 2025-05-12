import React, { useState } from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import InsightCharts from '../components/insightCharts'
import {
  CorrectIcon,
  InsightIcon,
  LinkIcon,
  TagIcon,
  WorldIcon,
} from "../assets";
import { connetAccount, insightCards, insigthPoints } from "../constant/data";

export default function Insight() {
  const [isFocused, setIsFocused] = useState(false);
  const [val, setVal] = useState("https://veriorinc.com/");
  const [activeSection, setActiveSection] = useState("cards");

  const comingSoon = () => {
    setActiveSection("creative");
  };

  const presentingShow = () => {
    setActiveSection("presenting");
  };
  const insightChartsShow=()=>{
setActiveSection('insightCarts')
  }

  return (
    <div className="w-full p-6">

      {activeSection === "cards" && (
        <>
         <Header
        title="Insights"
        subTitle="Drive Performance and Insights Using Advanced Analytics"
        btnTitle="Generate Now"
      />

      <Header2
        title="  Optimize and Analyze Your Brand Strategy"
        subTitle="Unlock Data-Driven Insights for Brand Growth
"
        Icon={InsightIcon}
      />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-start mt-6">
            {insightCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden"
              >
                <div className="w-full h-36 bg-[#2f2f3c]">
                  <img
                    src={item.banner}
                    alt={item.title}
                    className="w-full h-[160px]"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h1 className="text-white font-semibold text-lg">
                    {item.title}
                  </h1>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {item.dis}
                  </p>
                </div>
              </div>
            ))}

            <div
              onClick={comingSoon}
              className="bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden justify-center items-center flex "
            >
              <h1 className="text-gray-400">More Features are coming soon</h1>
            </div>
          </div>
        </>
      )}

      {activeSection === "creative" && (
        <>
         <Header
        title="Insights"
        subTitle="Drive Performance and Insights Using Advanced Analytics"
        btnTitle="Generate Now"
      />

      <Header2
        title="  Optimize and Analyze Your Brand Strategy"
        subTitle="Unlock Data-Driven Insights for Brand Growth
"
        Icon={InsightIcon}
      />
          <div className="bg-[#222230] p-5 rounded-md mt-6">
            <h1 className="text-gray-200 font-bold text-lg md:text-xl">
              Maximize Ad Performance with Data-Driven Insights
            </h1>
            <p className="text-gray-300 leading-[20px] mt-3 text-sm md:text-[15px]">
              Unlock the true potential of your ads with advanced analytics.
              Creative Insights AI deciphers performance metrics, generating
              extensive data points for every creative. By harnessing this
              wealth of data, our AI delivers a cutting-edge dashboard, offering
              unmatched clarity on what truly connects with your audience.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              {[
                "Discover the creative elements that drive the best results",
                "Analyze ad fatigue trends to optimize costs",
                "Pinpoint top-performing creatives and refine underperforming ones",
              ].map((text, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <img src={CorrectIcon} alt="" className="w-6 h-6 shrink-0" />
                  <p className="text-gray-300 text-sm md:text-[14px]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222230] p-5 rounded-md mt-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              {/* Left section */}
              <div className="flex gap-3 items-start">
                <div className="rounded-full bg-[#39394a] w-12 h-12 flex items-center justify-center p-1">
                  <img src={LinkIcon} alt="" className="w-7 h-7 p-1" />
                </div>
                <div>
                  <h1 className="text-gray-200 text-lg md:text-xl font-bold">
                    Link Your Ad Accounts to Verior for Smart Creative Analysis
                  </h1>
                  <h5 className="text-gray-300 text-sm">
                    Use the options below to link your ad accounts and generate
                    your Creative Insights Report with GorillaBoost.ai.
                  </h5>
                </div>
              </div>

              {/* Right button */}
              <button className="w-full sm:w-auto px-6 bg-[#2f2f3c] text-[#F35252] py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200">
                + Add
              </button>
            </div>

            {/* Connected accounts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {connetAccount.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-[#2F2F3C] flex flex-col md:flex-row justify-between gap-2 p-3 rounded-lg"
                >
                  <div className="flex items-center text-white gap-2">
                    <img src={val.icon} alt="" className="w-6 h-6" />
                    <h1>{val.name}</h1>
                  </div>

                  <button className="w-full md:w-auto px-4 bg-[#e75050] text-gray-300 py-2 rounded-md transition-all duration-200">
                    Add Account Connect +
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex  justify-center items-center  mt-4">
            <button
              onClick={presentingShow}
              className="w-full md:w-auto px-4 bg-[#e75050] text-gray-300 py-2 rounded-md transition-all duration-200"
            >
              Generate the Creative insights Report
            </button>
          </div>
        </>
      )}

      {activeSection === "presenting" && (
        <>
         <Header
        title="Insights"
        subTitle="Drive Performance and Insights Using Advanced Analytics"
        btnTitle="Generate Now"
      />

      <Header2
        title="  Optimize and Analyze Your Brand Strategy"
        subTitle="Unlock Data-Driven Insights for Brand Growth
"
        Icon={InsightIcon}
      />
          <div className="bg-[#222230] p-5 rounded-md mt-6">
            <h1 className="text-gray-200 font-bold text-lg md:text-xl">
              Decode Competitor Moves and Stay Ahead!
            </h1>
            <p className="text-gray-300 leading-[20px] mt-3 text-sm md:text-[15px]">
              Discover the strategies fueling your competitors' success. Our
              Competitor Insights tool uncovers key data on traffic sources,
              customer acquisition tactics, audience demographics, and more.
              Leverage these insights to refine your strategy, drive innovation,
              and stay ahead of the competition.{" "}
            </p>

            <div className="flex flex-wrap justify-start items-start space-y-2 space-x-8 mt-6">
              {insigthPoints.map((val, idx) => (
                <div
                  key={idx}
                  className="flex gap-1 justify-start  w-[30%] items-start"
                >
                  <img src={CorrectIcon} alt="" className="w-6 h-5 shrink-0" />
                  <p className="text-gray-200 text-nowrap text-sm md:text-[14px]">
                    {val.title}
                  </p>
                  :
                  <p className="text-gray-300 text-nowrap text-sm md:text-[14px]">
                    {val.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222230] mt-4 w-full rounded-md p-4 flex items-center gap-4">
            <img src={WorldIcon} alt="" />
            <h2 className="text-gray-300 font-bold text-nowrap">
              Extract Data from Web
            </h2>

            <div className="relative w-full">
              <input
                type="text"
                id="website"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="peer bg-[#2f2f3c] rounded-md p-2 text-gray-400 outline-none px-2 py-3 w-full"
              />

              <label
                htmlFor="website"
                className={`absolute left-2 px-1 text-gray-400 transition-all duration-200
            ${isFocused || val ? "top-[-10px] text-sm" : "top-3 text-base"}
          `}
              >
                Your Landing Page or Website
              </label>
            </div>

            <button onClick={insightChartsShow} className="bg-[#e75050] px-2 p-2 rounded-md text-nowrap text-white ">
           Get Competitor Insights
            </button>
          </div>
        </>
      )}


      {activeSection=='insightCarts'&&(
        <>
<InsightCharts/>
        </>
      )}
    </div>
  );
}
