import React from 'react'
import Context from './Context'
import { useContext } from 'react'


function HomePageImage() {
  const context = useContext(Context)
  return (
    <div 
    className={`ease-in-out duration-500 absolute  right-[-180px] bottom-0 hidden lg:block
    ${context.pageLoaded ? "translate-x-0 opacity-100" : "translate-x-[200px] opacity-0"}
    `}
    >
        <img
        src='/robot-curl.png'
        className='w-[913px] h-[503px]' 
        />
    </div>
  )
}

export default HomePageImage

