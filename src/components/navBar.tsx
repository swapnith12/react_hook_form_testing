import React from 'react'
import { FcSearch } from 'react-icons/fc'
import { HiAtSymbol, HiBell } from 'react-icons/hi'

const NavBar = () => {
  return (
    <div className='h-12 fixed bg-green-500 w-full flex items-center justify-between pl-5 pr-5
    border-b-1 border-white'>
      <div className='flex items-center'><FcSearch size={24} />
        <input type='search' className='text-white items-center placeholder-white bg-transparent ml-1 p-1 focus:ring-0 outline-none' placeholder='this does nothing...' />
      </div>
      <div className='flex items-center space-x-5'>
        <HiAtSymbol color='' size={24} />
        <HiBell color='' size={24} />
        <div className='flex items-center space-x-2'>
          <h4 className='text-white'>Logout</h4>
          {/*https://randomuser.me/*/}
          <img src='https://randomuser.me/api/portraits/med/men/75.jpg' className='rounded-full' width={32} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
