'use client'
import { useDashboard } from '../context/DashboardContext'
import { useEffect, useState } from 'react'

interface Investor {
  id: number
  name: string
  scheme: string
  investment: number
}

const InvestorPage = () => {
  const { selectedScheme } = useDashboard()
  const [investors, setInvestors] = useState<Investor[]>([])

  useEffect(() => {
    fetch('/api/investors')
      .then(res => res.json())
      .then(data => setInvestors(selectedScheme ? data.filter((i: Investor) => i.scheme === selectedScheme) : data))
  }, [selectedScheme])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-[#0b387c]">Investors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {investors.map(inv => (
          <div key={inv.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <div className="font-semibold">{inv.name}</div>
            <div className="text-sm text-gray-600">Scheme: {inv.scheme}</div>
            <div className="text-sm text-gray-600">Investment: {inv.investment} Cr</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvestorPage
