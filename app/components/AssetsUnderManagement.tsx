'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { IndianRupee } from 'lucide-react'
import { CircleChevronUp } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const AssetsUnderManagement = () => {
  const schemes = [
    { name: 'HDFC Equity Fund', nav: 'Nav', percentage: '1.2%' },
    { name: 'HDFC Advantage Fund', nav: 'Nav', percentage: '2.1%' },
    { name: 'HDFC Balanced Fund', nav: '', percentage: '1.3%' },
    { name: 'HDFC Short Term Builder Fund', nav: '', percentage: '1.4%' },
    { name: 'HDFC Cap to Senselite Fund', nav: '', percentage: '2.6%' }
  ]

  const pieData = {
    labels: ['CASH', 'EQUITY', 'DEBT'],
    datasets: [
      {
        data: [25, 45, 30],
        backgroundColor: ['#2596be', '#0c347c', '#04bcf2'],
        borderWidth: 0
      }
    ]
  }

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'rect', // square
          padding: 15
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold' as const,
          size: 14
        },
        formatter: (value: number, context: any) => {
          const dataArr = context.chart.data.datasets[0].data
          const total = dataArr.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          )
          const percentage = value + '%'
          return percentage
        }
      }
    }
  }

  return (
    <div className='shadow-md bg-white border border-gray-300 mt-6 w-[1000px] m-2'>
      {/* Header */}
      <div className='flex flex-row p-3 items-center bg-gray-200 justify-between border-b border-gray-300'>
        <h2 className='text-lg font-semibold text-[#0b387c]'>
          Assets Under Management
        </h2>
        <button className='border border-gray-300 bg-white text-gray-400 rounded-md px-3 py-1'>
          Today
        </button>
      </div>

      {/* Content */}
      <div className='flex gap-6 '>
        {/* Pie Chart */}
        <div className='flex items-center justify-center w-[300px]'>
          <div className='w-[250px] h-[250px]'>
            <Doughnut data={pieData} options={pieOptions} />
          </div>
        </div>

        {/* Schemes List */}
        <div className='flex justify-between w-[450px]'>
          <div className='flex  border-r-2 border-gray-300  '>
            <div className='space-y-3 justify-between w-[400px]'>
              <div className='mt-3'>
                <div className='text-sm text-[#04bcf2] w-[300px] font-bold'>
                  Equity
                </div>
                <div className='text-2xl font-bold flex items-center '>
                  <span>
                    <IndianRupee className='text-[2px]' />
                  </span>
                  5.5 Crore
                </div>
              </div>
              <div className=' flex border-b-2 border-gray-300 justify-between '>
                <div className='text-sm font-medium text-gray-800  '>
                  Top 5 Schemes
                </div>
                <div className='text-sm font-medium text-gray-800 pr-4'>
                  Nav
                </div>
              </div>
              {schemes.map((scheme, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center py-2 pr-3 w-[400px] border-b-2 border-gray-300  cursor-pointer transition-colors'
                >
                  <div className='text-sm text-gray-800'>{scheme.name}</div>
                  <div className='text-sm text-[#0b387c]'>
                    {scheme.percentage}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center w-[366px] justify-between'>
            <div className='flex flex-col items-center  p-6 h-[180px] pt-20 justify-center gap-2'>
              <div>
                <p className='text-[#04bcf2]'>Yesterday's Sales</p>
              </div>
              <div >
                <p className='flex items-center'>
                  <IndianRupee className='text-[2px]' /> 50,234
                </p>
              </div>
              <div className=''>
                <p className='flex text-green-500 items-center gap-2'>
                  <span>
                    <CircleChevronUp className='w-4 h-4' />
                  </span>
                  (1.0%)
                </p>
              </div>
            </div>
            <div className='border h-1 w-40 border-gray-300'>

            </div>
            <div>
              <div className='flex flex-col items-center  p-6 h-[180px] pb-20 justify-center gap-2'>
              <div>
                <p className='text-[#04bcf2]'>Today's AUM</p>
              </div>
              <div >
                <p className='flex items-center '>
                  <IndianRupee className='text-[2px]' /> 50,234
                </p>
              </div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetsUnderManagement
