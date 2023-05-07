import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='p-7'>
        <div className='flex items-center gap-4 text-gray-100'>
        <Link href="/">
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
    </div>
  )
}

export default Header