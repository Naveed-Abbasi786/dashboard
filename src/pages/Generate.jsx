import React from 'react'
import Header from '../components/reusableComponents/header'
import Header2 from '../components/reusableComponents/header2'
import { ButtonIcon } from '../assets'
import { generateCards, gridBrandViews } from '../constant/data'
import { useNavigate } from 'react-router-dom'

export default function GeneratePage() {
  const navigate=useNavigate()
  return (
    <div className=''>

      <Header title='Generate' subTitle='Manage and customize your brand in one place' btnTitle='Generate Now'/>


       <div className="flex justify-between items-center mt-6">
              <div>
                <h1 className="text-white text-xl font-bold">AI-Powered Asset Library</h1>
                <h5 className="text-gray-300 text-sm">
                  Choose the Type of Asset You Want to Create with AI
                </h5>
              </div>
      
       <button className="bg-[#e75050] p-2 rounded-md flex gap-2 text-sm justify-center items-center text-white">
                  <img src={ButtonIcon} alt="" className="w-4" /> Generate Now
                </button>
             
            </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-start mt-6">
                {generateCards.map((item, idx) => (
                  <div
                  onClick={()=>navigate(item.path)}
                    key={idx}
                    className="bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-full  h-36 bg-[#2f2f3c]">
                      <img
                        src={item.banner}
                        alt={item.titile}
                        className="w-full h-[160px]"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-2">
                      <h1 className="text-white font-semibold text-lg">
                        {item.titile}
                      </h1>
                      <p className="text-gray-400 text-sm line-clamp-3">{item.dis}</p>
        
                
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}
