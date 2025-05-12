import React from 'react'

export default function header2({title,subTitle,Icon}) {
  return (
    <div>
     <div className="flex justify-between items-center mt-6">
                  <div className="flex justify-center items-center gap-2 ">
                    <div className='rounded-full bg-[#30202c] w-12 p-2'>
                    <img src={Icon} alt="" className="w-8 h-8 p-1" />
                    </div>
                    <div>
                      <h1 className="text-[#F35252] text-2xl  font-bold">
                        {title}
                      </h1>
                      <h5 className="text-gray-300 text-sm">
                     {subTitle}
                      </h5>
                    </div>
                  </div>
          
            
                </div>
    </div>
  )
}
