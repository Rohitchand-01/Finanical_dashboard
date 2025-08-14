'use client'
import { ArrowDown, ArrowUp } from 'lucide-react'

const TransactionSnapshot = () => {
  return (
    <div className='bg-white shadow-md border border-gray-300  w-[800px] m-2 rounded-lg'>
      <div className='flex items-center justify-between border-b border-gray-300 p-3 bg-gray-200 rounded-t-lg'>
        <h2 className='text-lg font-semibold text-[#0b387c]'>Transaction Snapshot</h2>
        <div className='flex items-center space-x-2 text-sm text-gray-500'>
          <div className='flex'>
            <button className='px-2 py-1 border border-gray-200 rounded-sm'>Online</button>
            <button className='px-2 py-1 border border-gray-200 rounded-sm'>Offline</button>
          </div>
          <button className='px-2 py-1 border border-gray-200 rounded-sm'>Today</button>
        </div>
      </div>

      {/* Inflow / Outflow */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 pb-6 px-4'>
        <div className='flex items-center space-x-3 bg-blue-100 p-4 border border-gray-300 rounded-lg'>
          <ArrowDown className='h-6 w-4 text-blue-600' />
          <div>
            <div className='text-sm text-gray-500'>INFLOW</div>
            <div className='flex gap-2 items-baseline'>
              <div className='text-2xl'>5.20 <span className='text-xs'>Crore</span></div>
              <div><p className='text-xs text-gray-500 italic'>60 Transactions</p></div>
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-3 bg-blue-100 p-4 border border-gray-300 rounded-lg'>
          <ArrowUp className='h-6 w-4 text-blue-600' />
          <div>
            <div className='text-sm text-gray-500'>OUTFLOW</div>
            <div className='flex gap-2 items-baseline'>
              <div className='text-2xl'>3.20 <span className='text-xs'>Crore</span></div>
              <div><p className='text-xs text-gray-500 italic'>24 Transactions</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className='pb-5 px-4'>
        <div className='flex items-center justify-center gap-4 py-4'>
          <div className='h-[0.5px] w-16 bg-gray-300'></div>
          <h3 className='text-sm font-medium text-center text-gray-800'>STATUS</h3>
          <div className='h-[0.5px] w-16 bg-gray-300'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-6'>
          <div className='flex items-center justify-center gap-2 p-3 border border-[#4bd4b4] rounded-lg'>
            <div className='text-lg font-semibold text-[#4bd4b4]'>150</div>
            <div className='text-xs text-[#4bd4b4]'>PROCESSED</div>
          </div>
          <div className='flex items-center justify-center gap-2 p-3 border border-gray-500 rounded-lg'>
            <div className='text-lg font-semibold text-gray-500'>36</div>
            <div className='text-xs text-gray-500'>EXPIRED</div>
          </div>
          <div className='flex items-center justify-center gap-2 p-3 border border-red-400 rounded-lg'>
            <div className='text-lg font-semibold text-red-400'>15</div>
            <div className='text-xs text-red-400'>REVERSED</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSnapshot
