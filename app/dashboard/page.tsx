import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TransactionSnapshot from '../components/TransactionSnapshot'
import TodosSection from '../components/TodoItem'
import AssetsUnderManagement from '../components/AssetsUnderManagement'
import MarketOverview from '../components/MarketOverview'
import LeadsOverview from '../components/LeadsOverview'
import CapitalBox from '../components/CapitalBox'
import Investor from '../components/Investor'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='flex'>
        
        <div className='w-[50px] mr-2 bg-white'>
          <Sidebar />
        </div>
        <div className='mt-5'>
          <div className='flex '>
            <TransactionSnapshot />
            <TodosSection />
          </div>
          <div className='flex'>
            <AssetsUnderManagement />
            <MarketOverview />
          </div>
          <div className='  w-[1400px]'>
            <CapitalBox />
          </div>
          <div className='flex'>
            <LeadsOverview />
            <Investor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
