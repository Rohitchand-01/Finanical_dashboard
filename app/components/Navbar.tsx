import React from 'react'
import { Bell, ImagePlus, UserPlus, Search, IndianRupee } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-[#0b387c] text-white flex flex-wrap items-center divide-x divide-white/20 justify-between'>
      {/* Distributor Logo */}
      <div className='flex items-center gap-3 px-5 py-3'>
        <ImagePlus className='w-5 h-5' />
        <p className='text-sm sm:text-base whitespace-nowrap'>
          Distributor Logo
        </p>
      </div>

      {/* Search Bar */}
      <div className='flex items-center pr-30 px-5 py-3'>
        <div className='flex items-center bg-[#28518b] rounded-md overflow-hidden w-[240px] sm:w-[320px] lg:w-[380px]'>
          <input
            type='text'
            placeholder='Search Investor, Scheme, Transaction, etc'
            className='flex-1 bg-transparent focus:outline-none py-2 px-3 text-white placeholder-white text-sm'
          />
          <div className='bg-[#7e92bd] px-3 py-2  flex items-center justify-center cursor-pointer'>
            <Search className='w-5 h-5' />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className='flex items-center gap-5 px-5 pr-30 py-3'>
        <div className='flex flex-col items-center gap-0.5'>
          <IndianRupee className='w-5 h-5' />
          <p className='text-[11px]'>Transaction</p>
        </div>
      </div>
      <div className='flex items-center gap-5 px-5 pr-30 py-3'>
        <div className='flex flex-col items-center gap-0.5'>
          <UserPlus className='w-5 h-5' />
          <p className='text-[11px]'>Add Investor</p>
        </div>
      </div>

      {/* Notifications */}
      <div className='flex items-center gap-5 px-5 pr-30 py-3'>
        <div className='relative flex items-center '>
          <Bell className='w-6 h-6' />
          <span className='absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5 leading-none'>
            110
          </span>
        </div>
      </div>

      {/* Profile */}
      <div className='flex items-center px-5 py-3'>
        <div className='w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center text-black font-bold cursor-pointer'>
          P
        </div>
      </div>
    </div>
  )
}

export default Navbar
