import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'

function CustomRadio({ value }) {
    const context = useContext(Context)
    const [selected , setSelected] = useState(0)

    useEffect(() => {
        if(value.subject == "goal"){
            context.setUserGoal(selected)
        } else if(value.subject == "age"){
            context.setUserAge(selected)
        } else if(value.subject == "activity"){
            context.setUserActivity(selected)
        } else if(value.subject == "gender"){
            context.setUserGender(selected)
        } else if(value.subject == "schedule"){
            context.setUserSchedule(selected)
        } else{
            return
        }
    },[selected])

    console.log(value.subject + " :" + context.userGoal);
  return (
    <div className={`flex flex-col gap-3 p-8 text-[#146C94] pl-10
    ${context.pageLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[30px]"}
    ease-in-out duration-1000
    `}>
        <h3 className='px-4 text-[#2FE6DE] text-[22px] font-medium'>{value.label}</h3>
        <div
        className='flex gap-6'
        >
            {value.choices.map((choice,index) => {
                return(
                    <div key={index}
                    className="flex flex-col items-center gap-1"
                    >
                        <div className={`
                        ${value.boxSize == "small" ? "w-[75px] h-[35px]" : "w-[137px] min-h-[51px]"} border 
                        border-[#146C94] text-white rounded-xl text-center
                        font-bold text-[10px] flex items-center justify-center p-2 hover:cursor-pointer
                        ${index == selected && "bg-[#2FE6DE]"}
                        `}
                        onClick={() => setSelected(index)}
                        >
                            {choice.name}
                        </div>
                        <p
                        className='text-[10px] text-gray-500'
                        >{choice.etiquet}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CustomRadio