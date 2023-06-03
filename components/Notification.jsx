import React,{useContext, useEffect, useState} from 'react'
import Context from './Context'
import { ValidIcon } from '.'

function Notification() {
  const context = useContext(Context)
  const [delay, setDelay] = useState(8000)
  useEffect(() => {
    setTimeout(() => {
      context.setIsNotificationHidden(true)
    },delay)
    setTimeout(() => {
      context.setNotificationTriggered(false)
    },delay+1000)
  },[delay])
  return (
    <div
    className={`w-[220px] h-[75px] top-[100px] right-[50px]
    bg-[#2FE6DE] absolute z-50 flex flex-col items-center
    justify-center rounded-t-[20px] rounded-l-[20px] gap-2
    shadow-xl cursor-pointer border border-blue-500
    ${!context.isNotificationHidden ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"}
    ease-in-out duration-500
    `}
    onClick={() => context.notificationContent.onClickAction()}
    onMouseEnter ={() => {
      setDelay(500000)
    }}
    onMouseLeave ={() => {
      setDelay(5000)
    }}
    >
      <p
      className='text-[15px] font-bold flex gap-2 items-center'
      >{context.notificationContent.title} <ValidIcon /> </p>
      <p
      className='text-[12px] font-bold'
      >{context.notificationContent.content}</p>
    </div>
  )
}

export default Notification