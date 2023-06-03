import React from 'react'
import Context from './Context'
import { useContext } from 'react'
import { Devonshire } from 'next/font/google'
import CustomButton from './CustomButton'

function HomePageTitles() {
  const context = useContext(Context)

  const buttonProps = {
    position:"absolute bottom-[100px] left-[150px]",
    content:"START NOW",
    type:"button",
    handleClick:() => {
      context.setPageLoaded(false)
      setTimeout(() => {
          if(context.username){
            context.setCurrentPage(3)
          }
          else{
            context.setCurrentPage(2)
          }
      },1500)}
  }
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
              className='main-title text-[80px]'
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
        </div>
        <CustomButton props={buttonProps}/>

        
    </div>
  )
}

export default HomePageTitles