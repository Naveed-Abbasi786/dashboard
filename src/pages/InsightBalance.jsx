import React from 'react'
import Header from '../components/reusableComponents/header'
import Header2 from '../components/reusableComponents/header2'
import SearchButton from '../components/reusableComponents/searchButton'
import ButtonWithIcon from '../components/reusableComponents/ButtonWithIcon'
import SelectButton from '../components/reusableComponents/selectButton'
import {  InsightIcon } from '../assets'
import { bankBanners, inSightBankSelectOptions } from '../constant/data'

export default function InsightBalance() {


  return (
       <>
             <Header
            title="Insights"
            subTitle="Drive Performance and Insights Using Advanced Analytics"
            btnTitle="Generate Now"
          />
    
          <Header2
            title="Inspiration Bank"
            subTitle="Just one click away from your next breakthrough ad idea." 
            Icon={InsightIcon}/>


<div className='border-gray-700 border-1 flex justify-between gap-2 p-3 mt-6'>

<div>
    <h1 className='text-gray-200 font-medium'>List of Brands</h1>
    <h5 className='text-gray-300'>View your projects and start new ones within the chosen brand</h5>
</div>
<div className='flex justify-center items-center gap-2 '>   
    <SearchButton/>
      
      <ButtonWithIcon title='Generate Now'  btnFn={() => console.log("Generate button clicked")}
/>
      
    </div>


</div>



  
<div className='flex gap-2 flex-nowrap mt-4 '>
  {inSightBankSelectOptions.map((item, index) => (
    <SelectButton
      key={index}
      buttonTitle={item.buttonTitle}
      options={item.options}
    />
  ))}
</div>


<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 space-y-6 mt-8">
  {bankBanners.map((val, idx) => (
    <div key={idx}>
      <img src={val} alt={`Banner ${idx + 1}`} className="w-full h-auto rounded-md" />
    </div>
  ))}
</div>
    </>
  )
}
