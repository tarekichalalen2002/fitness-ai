import React,{useContext} from 'react'
import Context from './Context'

function PageIndicator() {
  const context = useContext(Context)
  return (
    <div
    className='lg:w-1/3 w-1/2 flex items-center gap-12'
    >
      <div
      className={`w-[26px] h-[26px] rounded-full border-2 border-[#00CECB]
      ${context.currentPage === 2 ? "bg-[#00CECB]" : "bg-transparent" } 
      ease-in-out duration-1000`}
      ></div>
      <div
      className='w-1/2 h-[3px] bg-[#00CECB]'
      >
      </div>
      <div
      className={`w-[26px] h-[26px] rounded-full border-2 border-[#00CECB]
      ${context.currentPage === 3 ? "bg-[#00CECB]" : "bg-transparent" } 
      ease-in-out duration-1000`}
      ></div>
    </div>
  )
}

export default PageIndicator