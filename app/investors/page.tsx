import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Investor from '../components/Investors'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-row'>
            <div className='w-[50px] mr-2 bg-white '>
                <Sidebar/>
            </div>
            <div>
                <Investor/>
            </div>
        </div>
    </div>
  )
}

export default page