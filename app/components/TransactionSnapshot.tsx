'use client'
import { ArrowDown, ArrowUp } from 'lucide-react'

const TransactionSnapshot = () => {
  return (
    <div className='bg-white shadow-md border border-gray-300 w-[800px] m-2'>
      <div className='flex items-center justify-between border-b border-gray-300 p-3 bg-gray-200'>
        <h2 className='text-lg font-semibold text-[#0b387c]'>
          Transaction Snapshot
        </h2>
        <div className='flex items-center space-x-2 text-sm text-gray-500'>
          <div className='flex'>
            <button
              className='px-2 py-1 border border-gray-200 rounded-sm'
              onClick={() => {}}
            >
              Online
            </button>
            <button
              className='px-2 py-1 border border-gray-200 rounded-sm'
              onClick={() => {}}
            >
              Offline
            </button>
          </div>
          <button className='px-2 py-1 border border-gray-200 rounded-sm'>
            Today
          </button>
        </div>
      </div>

      {/* Inflow / Outflow */}
      <div className='grid grid-cols-2 gap-6 pt-12 pb-9 px-5 '>
        <div className='flex items-center space-x-3 bg-blue-100 p-2 border border-gray-300 rounded-lg h-24'>
          <div>
            <ArrowDown className='h-6 w-4 text-blue-600' />
          </div>
          <div>
            <div className='text-[14px] text-gray-500'>INFLOW</div>
            <div className='flex gap-2 items-baseline'>
              <div className='text-2xl'>
                5.20 <span className='text-[13px]'>Crore</span>
              </div>
              <div>
                {' '}
                <p className='text-xs text-gray-500 italic'>60 Transactions</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-3 bg-blue-100 p-2 border border-gray-300 rounded-lg'>
          <div>
            <ArrowUp className='h-6 w-4 text-blue-600' />
          </div>
          <div>
            <div className='text-[14px] text-gray-500'>OUTFLOW</div>
            <div className='flex gap-2 items-baseline'>
              <div className='text-2xl'>
                3.20 <span className='text-[13px]'>Crore</span>
              </div>
              <div>
                {' '}
                <p className='text-xs text-gray-500 italic'>24 Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className='pb-5 px-5 '>
        <div className='flex items-center justify-center gap-4 p-5'>
          <div className='h-[0.2px] w-16 mb-3 bg-gray-300'></div>
          <h3 className='text-sm font-medium text-center text-gray-800 mb-3'>
            STATUS
          </h3>
          <div className='h-[0.2px] w-16 mb-3 bg-gray-300'></div>
        </div>
        <div className='grid grid-cols-3 gap-4 text-center py-10'>
          <div className='flex items-center p-3 border border-[#4bd4b4] rounded-lg justify-center gap-2'>
            <div className='text-lg font-semibold text-[#4bd4b4]'>150</div>
            <div className='text-xs text-[#4bd4b4]'>PROCESSED</div>
          </div>
          <div className='flex items-center p-3 border border-gray-500 rounded-lg justify-center gap-2'>
            <div className='text-lg font-semibold text-gray-500'>36</div>
            <div className='text-xs text-gray-500'>EXPIRED</div>
          </div>
          <div className='flex items-center p-3 border border-red-400 rounded-lg justify-center gap-2'>
            <div className='text-lg font-semibold text-red-400'>15</div>
            <div className='text-xs text-red-400'>REVERSED</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSnapshot
