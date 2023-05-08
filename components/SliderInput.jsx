import React,{useContext} from 'react'
import Context from './Context'

function SliderInput({value}) {
  const context = useContext(Context)
  return (
    <div
    className={`flex flex-col gap-8 pt-[20px] pl-10 ease-in-out duration-1000
    ${context.pageLoaded ? "opacity-100 translate-y-0" :"opacity-0 translate-y-[100px]"}
    `}
    >   
        <div
        className='flex container gap-[250px] text-[#2FE6DE]
        '
        >
            <h3
            className='pl-5 text-[20px] font-medium'
            >{value.title}</h3>
            <p>{value.value} {value.unity}</p>
        </div>
        <input type="range" min={value.min} max={value.max} value={value.value} onChange={value.onChange} 
        className="w-[400px] bg-[#2FE6DE] slider-input"
        />
    </div>
  )
}

export default SliderInput