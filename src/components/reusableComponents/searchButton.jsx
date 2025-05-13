import React from 'react'
import { Search } from '../../assets'

export default function SearchButton() {
  return (
    <div><button className="bg-[rgb(34,34,48)] p-[9px] rounded-md">
                  <img src={Search} alt="" className="w-6" />
                </button>
      
    </div>
  )
}
