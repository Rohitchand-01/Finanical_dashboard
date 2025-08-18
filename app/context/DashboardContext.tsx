'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface DashboardState {
  aumData: { scheme: string; value: number }[]
  leadsData: any
  transactions: { inflow: number; outflow: number }
  selectedScheme: string | null
  setSelectedScheme: (scheme: string | null) => void
}

const DashboardContext = createContext<DashboardState | undefined>(undefined)

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [aumData] = useState([
    { scheme: 'Scheme A', value: 120 },
    { scheme: 'Scheme B', value: 80 },
  ])

  const [leadsData] = useState({
    channels: { Email: 12, WhatsApp: 70, Social: 18 },
    trends: [1000, 1200, 1500, 1700, 3400],
  })

  const [transactions] = useState({ inflow: 5200000, outflow: 3200000 })

  const [selectedScheme, setSelectedScheme] = useState<string | null>(null)

  return (
    <DashboardContext.Provider
      value={{ aumData, leadsData, transactions, selectedScheme, setSelectedScheme }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) throw new Error('useDashboard must be used within DashboardProvider')
  return context
}
