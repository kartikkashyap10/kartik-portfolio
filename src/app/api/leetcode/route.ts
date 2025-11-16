import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const username = url.searchParams.get('username')
    if (!username) {
      return NextResponse.json({ error: 'username query param missing' }, { status: 400 })
    }

    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `

    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      body: JSON.stringify({ query, variables: { username } })
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: 'LeetCode fetch failed', status: res.status, body: text }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('API /api/leetcode error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}