import React , {useContext} from 'react'
import Context from './Context'
import {Heart} from "."


function HealthResult() {
    const context = useContext(Context)
  return (
    <div className={`
    felx flex-col gap-8 px-5 w-1/2
    ${context.pageLoaded ? "translate-x-0 opacity-100" :"translate-x-[-80px] opacity-0"}
    ease-in-out duration-500
    `}>
        <h3
        className='main-title text-[26px] flex gap-4 items-center'
        ><span className='text-[70px]'><Heart /></span> HEALTH</h3>
        <div
        className='border w-full h-[160px] rounded-lg border-[#146C94] flex flex-col justify-evenly'
        >
          <div
          className='flex gap-5 px-7 py-2 items-end'
          >
            <h5
            className='text-[#2FE6DE] text-[20px] font-semibold'
            >HEALTH STATE</h5>
            <p className='text-[18px] text-white font-semibold'>{context.userResult.health}</p>
          </div>
          <div
          className='flex gap-5 p-7 items-end'
          >
            <h5
            className='text-[#2FE6DE] text-[20px] font-semibold'
            >FOOD CONSUMPTION GOAL</h5>
            <p className='text-[18px] text-white font-semibold'>{context.userResult.food}</p>
          </div>

        </div>
    </div>
  )
}

export default HealthResult