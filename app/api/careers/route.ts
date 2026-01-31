import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://app.pqrix.com/api/careers', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching careers:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch careers' },
      { status: 500 }
    )
  }
}
