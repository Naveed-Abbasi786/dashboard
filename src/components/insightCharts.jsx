import React from 'react'
import Header from './reusableComponents/header'
import { Icon } from '@iconify/react/dist/iconify.js'
import { insightcardsData } from '../constant/data'
import { Sort } from '../assets'
import GenderChart from './GenderChart'
import AgeChart from './ageChart'
import SocialChart from './socialChart'
import SourceChart from './sourceChart'
import CountryChart from './countryChart'
import UserCountryChart from './userCountryChart'
import { useNavigate } from 'react-router-dom'

export default function InsightCharts() {
  const navigate=useNavigate()
  return (
    <div className=''>
 <Header
        title="Insights"
        subTitle="Drive Performance and Insights Using Advanced Analytics"
        btnTitle="Generate Now"
      />

      <div className="mt-2 flex justify-between items-center gap-2">
              <div>
                <h1 className="text-white text-xl">Analysics</h1>
                <h6 className="text-gray-400 text-sm">
                  This information is from October 30 - November 30
                </h6>
              </div>
              <div>
                <button className="flex justify-center items-center gap-2 p-2 rounded-lg px-4 text-white bg-[#222230]">
                  {" "}
                  <img src={Sort} alt="" />
                  Filter
                </button>
              </div>
            </div>
      
            <div className="flex gap-2 flex-wrap justify-between mt-4">
              {insightcardsData.map((card, idx) => (
                <div
                onClick={()=>navigate("/insight-balance")}
                  key={idx}
                  className="bg-[#222230] flex flex-col justify-between w-[32%] h-[24vh] p-4 rounded-md text-white"
                >
                  <h5  className="w-max bg-[#2f2f3c] mb-2 px-2 py-1  text-left rounded text-sm">
                    {card.title}
                  </h5>
      
                  <h1 className="text-3xl font-semibold mt-8">{card.value}%</h1>
                  <h6 className="flex items-center text-sm gap-1 mt-2 text-gray-400">
                    <Icon icon={card.icon} className="text-lg" />
                    <span className="text-green-400">{card.trend}</span>
                    <span>Last Week</span>
                  </h6>
                </div>
              ))}
            </div>

              <div className="flex justify-between gap-2 !w-full h-[50vh]  mt-6">
                    <div className="flex-1">
                      <GenderChart/>
                    </div>
            
                    <div className="!flex-1">
                     <AgeChart/>
                    </div>
                  </div>

                  
              <div className="flex justify-between gap-2 !w-full h-[60vh]">
                    <div className="flex-1">
                      <SocialChart/>
                    </div>
            
                    <div className="!flex-1">
                     <SourceChart/>
                    </div>
                  </div>


                   <div className="bg-[#222230] flex   gap-1 p-1 !w-full h-[50vh]">
                    <div className="flex-2">
                      <CountryChart/>
                    </div>
            
                    <div className="!flex-1 mr-4 p-4 ">
                     <UserCountryChart/>
                    </div>
                  </div>
    </div>
  )
}
