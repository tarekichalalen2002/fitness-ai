import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'

function CustomRadio({ value }) {
    const context = useContext(Context)
    const [selected , setSelected] = useState(0)

    useEffect(() => {
        if(value.subject == "goal"){
            setSelected(context.userGoal)
        } else if(value.subject == "age"){
            setSelected(context.userAge)
        } else if(value.subject == "activity"){
            setSelected(context.userActivity)
        } else if(value.subject == "gender"){
            setSelected(context.userGender)
        } else if(value.subject == "schedule"){
            setSelected(context.userSchedule)
        } else{
            return
        }
    },[])

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
  return (
    <div className={`flex flex-col gap-3 p-3 text-[#146C94] pl-10
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
                        ${value.boxSize == "small" ? "w-[100px] h-[45px] text-[12px]" : "w-[150px] h-[65px] text-[16px]"} border 
                        border-[#146C94] text-white rounded-xl text-center
                        font-bold  flex items-center justify-center p-2 hover:cursor-pointer
                        ${index == selected && "bg-[#2FE6DE]"}
                        ease-in-out duration-300
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