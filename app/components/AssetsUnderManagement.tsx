'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { IndianRupee, CircleChevronUp } from 'lucide-react'

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
          pointStyle: 'rect',
          padding: 15
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold' as const,
          size: 14
        },
        formatter: (value: number) => value + '%'
      }
    }
  }

  return (
    <div className="shadow-md bg-white border border-gray-300 mt-6 m-2 w-full">
      <div className="flex flex-row p-3 items-center bg-gray-200 justify-between border-b border-gray-300">
        <h2 className="text-lg font-semibold text-[#0b387c]">
          Assets Under Management
        </h2>
        <button className="border border-gray-300 bg-white text-gray-400 rounded-md px-3 py-1">
          Today
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        <div className="flex items-center justify-center flex-shrink-0">
          <div className="w-[220px] h-[220px] sm:w-[250px] sm:h-[250px]">
            <Doughnut data={pieData} options={pieOptions} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between flex-1">
          <div className="flex border-r-0 lg:border-r-2 border-gray-300">
            <div className="space-y-3 w-full lg:w-[400px]">
              <div className="mt-3">
                <div className="text-sm text-[#04bcf2] font-bold">Equity</div>
                <div className="text-2xl font-bold flex items-center">
                  <IndianRupee className="w-4 h-4" /> 5.5 Crore
                </div>
              </div>
              <div className="flex border-b-2 border-gray-300 justify-between">
                <div className="text-sm font-medium text-gray-800">Top 5 Schemes</div>
                <div className="text-sm font-medium text-gray-800 pr-4">Nav</div>
              </div>
              {schemes.map((scheme, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 pr-3 border-b-2 border-gray-300 cursor-pointer hover:bg-gray-50"
                >
                  <div className="text-sm text-gray-800">{scheme.name}</div>
                  <div className="text-sm text-[#0b387c]">{scheme.percentage}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between mt-6 lg:mt-0 lg:w-[366px]">
            <div className="flex flex-col items-center p-6 gap-2">
              <p className="text-[#04bcf2]">Yesterday's Sales</p>
              <p className="flex items-center">
                <IndianRupee className="w-4 h-4" /> 50,234
              </p>
              <p className="flex text-green-500 items-center gap-2">
                <CircleChevronUp className="w-4 h-4" /> (1.0%)
              </p>
            </div>
            <div className="border h-px w-40 border-gray-300" />
            <div className="flex flex-col items-center p-6 gap-2">
              <p className="text-[#04bcf2]">Today's AUM</p>
              <p className="flex items-center">
                <IndianRupee className="w-4 h-4" /> 50,234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetsUnderManagement
