import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    NSE: { value: 8625.7, change: -12.3 },
    BSE: { value: 8650.3, change: 14.31 }
  })
}
