import React from 'react'
import Context from './Context'
import { useContext } from 'react'

function CustomButton({props}) {

    const context = useContext(Context)

  return (
    <div className={`
    ${context.pageLoaded ? "opacity-100 translate-y-0" :"opacity-0 translate-y-[100px]"}
    ease-in-out duration-500 w-[206px] h-[74px]
    ${props.position}
    `}>
        <div
        className={`w-[196px] h-[64px] border
        border-[#146C94] rounded-xl
        `}
        >
        <button
        className={`flex items-center justify-center
        w-[196px] h-[64px] border translate-x-[10px] translate-y-[10px]
        border-[#146C94]  rounded-xl
        bg-[#2FE6DE] text-xl font-bold
        hover:bg-[#146C94] ease-in-out duration-300
        hover:translate-y-[4px] hover:translate-x-[4px] text-[#1E1E1E]
        `}
        onClick={() => props.handleClick()}
        type={props.type}
        >
            {props.content}
        </button>
        </div>
    </div>
  )
}

export default CustomButton