'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#0b387c] mb-4">Financial Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Explore the complete financial dashboard with transaction snapshots, market overview, leads, and more.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-3 bg-[#0b387c] text-white rounded hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}
