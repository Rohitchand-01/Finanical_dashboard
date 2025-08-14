'use client'
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

interface Investor {
  id: number
  name: string
  scheme: string
  status: string
  aum: number
}

export default function Investor() {
  const searchParams = useSearchParams()
  const schemeFromURL = searchParams.get('scheme') || ''

  const [investors, setInvestors] = useState<Investor[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  useEffect(() => {
    fetch('/investors.json')
      .then(res => res.json())
      .then((data: Investor[]) => {
        // Ensure aum is always a number
        const fixed = data.map(inv => ({
          ...inv,
          aum: typeof inv.aum === 'number' ? inv.aum : 0
        }))
        setInvestors(fixed)
      })
  }, [])

  const filteredInvestors = useMemo(() => {
    return investors.filter(inv => {
      const matchesScheme =
        !schemeFromURL || inv.scheme.toLowerCase() === schemeFromURL.toLowerCase()
      const matchesSearch = inv.name.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = statusFilter === 'All' || inv.status === statusFilter
      return matchesScheme && matchesSearch && matchesStatus
    })
  }, [investors, schemeFromURL, search, statusFilter])

  return (
    <div className="p-4 space-y-4 w-full">
      <h1 className="text-2xl font-bold">Investors</h1>
      {schemeFromURL && (
        <p className="text-sm text-gray-500">Filtered by Scheme: {schemeFromURL}</p>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Search investor..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          <option>All</option>
          <option>Active</option>
          <option>Prospect</option>
          <option>Churned</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Scheme</th>
              <th className="border p-2 text-right">AUM</th>
              <th className="border p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvestors.length ? (
              filteredInvestors.map(inv => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="border p-2">{inv.name}</td>
                  <td className="border p-2">{inv.scheme}</td>
                  <td className="border p-2 text-right">
                    ₹{inv.aum?.toLocaleString('en-IN') ?? '0'}
                  </td>
                  <td className="border p-2 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        inv.status === 'Active'
                          ? 'bg-green-100 text-green-600'
                          : inv.status === 'Prospect'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No investors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
