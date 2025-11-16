import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY || process.env.NEXT_PUBLIC_WAKATIME_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'WAKATIME_API_KEY not configured' }, { status: 500 })
    }

    const res = await fetch('https://wakatime.com/api/v1/users/current/stats/last_30_days', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: 'Wakatime fetch failed', status: res.status, body: text }, { status: 502 })
    }

    const data = await res.json()

    // Return a minimal shape the frontend expects
    const totalSeconds = data.grand_total?.total_seconds || 0
    const totalHours = Math.round(totalSeconds / 3600)
    const dailyAverage = totalHours > 0 ? Math.round((totalHours / 30) * 10) / 10 : 0
    let bestDay = 0
    if (data.days && Array.isArray(data.days)) {
      const dayHours = (data.days as Array<Record<string, unknown>>).map(d => {
        const secs = (d as Record<string, unknown>)['total_seconds']
        return typeof secs === 'number' ? secs / 3600 : 0
      })
      bestDay = dayHours.length ? Math.max(...dayHours) : 0
      bestDay = Math.round(bestDay * 10) / 10
    }

    return NextResponse.json({ totalHours, dailyAverage, bestDay, raw: data })
  } catch (err) {
    console.error('API /api/wakatime error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
