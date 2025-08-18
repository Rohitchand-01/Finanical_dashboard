import { NextResponse } from 'next/server'

export async function GET() {
  const data = [
    { id: 1, name: 'Ramnesh Shetkar', scheme: 'Equity', investment: 2.5 },
    { id: 2, name: 'Dinesh Kumar', scheme: 'Debt', investment: 1.2 },
    { id: 3, name: 'Mahesh Bhadana', scheme: 'Equity', investment: 3.0 },
    { id: 4, name: 'S.K. Patel', scheme: 'Balanced', investment: 1.5 }
  ]
  return NextResponse.json(data)
}
