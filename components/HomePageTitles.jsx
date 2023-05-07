import React from 'react'
import Context from './Context'
import { useContext } from 'react'

function HomePageTitles() {
  const context = useContext(Context)
  return (
    <div className='container w-full h-screen flex flex-col gap-10'>

        <div
        className={`
        ${context.pageLoaded ? "opacity-100" : "opacity-0"}
        ease-in-out duration-1000 
        `}
        >
          <div
          className='w-[502px] absolute 
          h-[130px] left-[52px] flex items-center justify-center text-[80px]
          font-medium leading-[72px]'
          >
              <h1
              className='main-title'
              >FITNESS - AI</h1>
          </div>

          <div
          className='w-[668px] 
          absolute h-[130px] top-[280px] left-[52px] '
          >
              <h2 
              className='text-[40px] text-[#FFFFFF] font-medium'
              >MAKE YOUR BODY SHAPE WITH <span className='text-[#2FE6DE]'>ARTIFICIAL INTELLIGENCE</span></h2>
          </div>

          <div
          className='w-[196px] h-[64px] absolute border 
          border-[#146C94] top-[500px] left-[170px] rounded-xl'
          >
          </div>
        </div>
        <button
        className={`flex items-center justify-center
        w-[196px] h-[64px] absolute border 
        border-[#146C94] top-[510px] left-[180px] rounded-xl
        bg-[#2FE6DE] text-xl font-bold
        hover:bg-[#146C94] ease-in-out duration-300
        hover:top-[506px] hover:left-[176px] text-[#1E1E1E]
        ${context.pageLoaded ? "opacity-100 translate-y-0" :"opacity-0 translate-y-[100px]"}
        `}
        onClick={() => {
          context.setPageLoaded(false)
          setTimeout(() => {
            context.setCurrentPage(2)
          },800)
        }}
        >
            START NOW 
        </button>

        
    </div>
  )
}

export default HomePageTitles