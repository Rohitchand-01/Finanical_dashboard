'use client'

import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TransactionSnapshot from '../components/TransactionSnapshot'
import TodosSection from '../components/TodoItem'
import AssetsUnderManagement from '../components/AssetsUnderManagement'
import MarketOverview from '../components/MarketOverview'
import LeadsOverview from '../components/LeadsOverview'
import CapitalBox from '../components/CapitalBox'
import Investor from '../components/Investor'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'

const DashboardPage = () => {
  const dashboardRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!dashboardRef.current) return

    try {
      const dataUrl = await toPng(dashboardRef.current, { cacheBust: true })
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgProps = pdf.getImageProperties(dataUrl)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('dashboard.pdf')
    } catch (error) {
      console.error('PDF generation failed:', error)
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='flex'>
        <div className='w-[50px] mr-2 bg-white'>
          <Sidebar />
        </div>
        <div className='flex-1 mt-5 px-4'>
          <button
            onClick={handleDownloadPDF}
            className='mb-4 px-4 py-2 bg-[#0b387c] text-white rounded hover:bg-blue-700 transition'
          >
            Export Dashboard as PDF
          </button>

          <div ref={dashboardRef}>
            <div className='flex'>
              <TransactionSnapshot />
              <TodosSection />
            </div>
            <div className='flex'>
              <AssetsUnderManagement />
              <MarketOverview />
            </div>
            <div className='w-[1400px]'>
              <CapitalBox />
            </div>
            <div className='flex'>
              <LeadsOverview />
              <Investor />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
