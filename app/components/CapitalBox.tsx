import React from 'react'

type Props = {}

const CapitalBox = (props: Props) => {
  return (
    <div className=' flex w-[1418px] h-[200px] mt-10 border-2 border-gray-300 m-2 gap-10'>
      <div className='p-15 w-[500px] gap-3 flex flex-col justify-center '>
        <div className='border-l-5 pl-5 font-semibold'>HDFC Mld Cap</div>
        <div className=' '>
          <p className='flex flex-col text-gray-600'>
            <p>
              <span className='font-semibold text-black'>99%</span> of your
              investors can benefit from
            </p>
            <span>HDFC Mld Cap</span>
          </p>
        </div>
      </div>
      <div className='w-1 h-30 mt-10 bg-gray-300'></div>
      <div className='p-15  w-[500px] gap-3 flex flex-col justify-center '>
        <div className='border-l-5 pl-5 font-semibold'>HDFC Equity Fund</div>
        <div className=' '>
          <p className='flex flex-col text-gray-600'>
            <p>
              <span className='font-semibold text-black'>60%</span> of your
              investors have not invested in
            </p>
            <span>HDFC Equity Fund</span>
          </p>
        </div>
      </div>
      <div className='w-1 h-30 mt-10 bg-gray-300'></div>
      <div className='p-15  w-[500px] gap-3 flex flex-col justify-center '>
        <div className='border-l-5 pl-5 font-semibold'>Capital builder</div>
        <div className=' '>
          <p className='flex flex-col text-gray-600'>
            <p>
              <span className='font-semibold text-black'>20%</span> of your
              investors can benefit from
            </p>
            <span>HDFC Capital Builder Plan</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CapitalBox
