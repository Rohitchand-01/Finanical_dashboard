import React from 'react'

type Props = {}

const CapitalBox = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[1618px] h-auto lg:h-[200px] mt-10 border-2 bg-white border-gray-300 m-2 gap-6 lg:gap-10 p-4">
      <div className="flex flex-col justify-center w-full lg:w-[500px] gap-2">
        <div className="pl-5 font-semibold border-l-4 border-black">HDFC Mld Cap</div>
        <div className="text-gray-600">
          <p>
            <span className="font-semibold text-black">99%</span> of your investors can benefit from
          </p>
          <span>HDFC Mld Cap</span>
        </div>
      </div>

      <div className="hidden lg:block w-px bg-gray-300"></div>

      <div className="flex flex-col justify-center w-full lg:w-[500px] gap-2">
        <div className="pl-5 font-semibold border-l-4 border-black">HDFC Equity Fund</div>
        <div className="text-gray-600">
          <p>
            <span className="font-semibold text-black">60%</span> of your investors have not invested in
          </p>
          <span>HDFC Equity Fund</span>
        </div>
      </div>

      <div className="hidden lg:block w-px bg-gray-300"></div>

      <div className="flex flex-col justify-center w-full lg:w-[500px] gap-2">
        <div className="pl-5 font-semibold border-l-4 border-black">Capital builder</div>
        <div className="text-gray-600">
          <p>
            <span className="font-semibold text-black">20%</span> of your investors can benefit from
          </p>
          <span>HDFC Capital Builder Plan</span>
        </div>
      </div>
    </div>
  )
}

export default CapitalBox
