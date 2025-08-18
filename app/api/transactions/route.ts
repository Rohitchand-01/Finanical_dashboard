import { NextResponse } from "next/server"

export async function GET() {
  const data = {
    inflow: { amount: 5.2, transactions: 60 },
    outflow: { amount: 3.2, transactions: 24 },
    status: { processed: 150, expired: 36, reversed: 15 }
  }

  return NextResponse.json(data)
}
