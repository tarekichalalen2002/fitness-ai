import React,{useContext} from 'react'
import Link from 'next/link'
import Context from './Context'


function Header() {
  const context = useContext(Context)
  return (
    <div className='px-7 py-3 flex justify-between'>
        <div className='flex items-center gap-4 text-gray-100'
        onClick={() => {
          setTimeout(() => {
            context.setCurrentPage(0)
          },1000)
          if (context.currentPage != 0) {
            context.setPageLoaded(false)
          }
        }}
        >
          <Link href="/"
          >
            <img src="/logo.svg" alt="logo" 
            className='w-[77px] h-[77px]'
            />
          </Link>
          <Link href="/">
            <h1
            className='text-2xl flex gap-2 font-medium'
            >
                FITNESS - <span className='text-[#00CECB]'>AI</span>
            </h1>
          </Link>
        </div>
        { context.username && (
          <h4
          className="text-xl text-white pt-4 pr-10 cursor-pointer
          hover:text-[#00CECB] ease-in-out duration-300
          "
          onClick={() => {
            setTimeout(() => {
              context.setCurrentPage(5)
            },1000)
            if (context.currentPage != 5) {
              context.setPageLoaded(false)
            }
          }}
          >#{context.username}</h4>
        )}
    </div>
  )
}

export default Header