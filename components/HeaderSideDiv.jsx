import React from 'react'
import Context from './Context'
import { useContext } from 'react'

function HeaderSideDiv() {
  const context = useContext(Context)
  return (
      <div
      className={`lg:w-[1000px] md:w-[700px] hidden md:block  
      pl-10 h-[1200px] border-2 border-[#146C94] absolute 
      right-[-400px] top-[-50px] rotate-[30deg] container 
      ${context.pageLoaded ? "translate-x-0 opacity-100" : "translate-x-[200px] opacity-0"}
      ease-in-out duration-1000
      `}
      >
        <div
        className='h-full w-full bg-[#00CECB] shadow-black shadow-xl'
        >

        </div>

      </div>
  )
}

export default HeaderSideDiv