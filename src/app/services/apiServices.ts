// API Services for fetching external data

export interface WakatimeStats {
  totalHours: number
  dailyAverage: number
  bestDay: number
  yearlyData: Array<{ month: string; hours: number }>
}

export interface GitHubStats {
  username: string
  repositories: number
  followers: number
  contributions: number
}

export interface LeetCodeStats {
  username: string
  totalSolved: number
  easyCount: number
  mediumCount: number
  hardCount: number
  acceptance: number
}

// Wakatime API
export const fetchWakatimeStats = async (apiKey: string): Promise<WakatimeStats> => {
  try {
    // Try last_30_days first which has more data
    const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_30_days', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    
    if (!response.ok) {
      console.error('Wakatime API response:', response.status, response.statusText)
      throw new Error('Failed to fetch Wakatime data')
    }
    
    const data = await response.json()
    console.log('Wakatime data:', data)
    
    // Extract total seconds from grand_total
    const totalSeconds = data.grand_total?.total_seconds || 0
    const totalHours = Math.round(totalSeconds / 3600)
    const dailyAverage = totalHours > 0 ? Math.round((totalHours / 30) * 10) / 10 : 0
    
    // Find best day from daily data
    let bestDay = 0
    if (data.days && Array.isArray(data.days)) {
      bestDay = Math.max(...data.days.map((d: any) => (d.total_seconds || 0) / 3600))
    }
    
    return {
      totalHours,
      dailyAverage,
      bestDay: Math.round(bestDay * 10) / 10,
      yearlyData: []
    }
  } catch (error) {
    console.error('Wakatime API error:', error)
    return {
      totalHours: 0,
      dailyAverage: 0,
      bestDay: 0,
      yearlyData: []
    }
  }
}

// GitHub API
export const fetchGitHubStats = async (username: string): Promise<GitHubStats> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    
    if (!response.ok) throw new Error('Failed to fetch GitHub data')
    
    const data = await response.json()
    
    return {
      username: data.login,
      repositories: data.public_repos,
      followers: data.followers,
      contributions: 0 // GitHub API doesn't directly expose contributions
    }
  } catch (error) {
    console.error('GitHub API error:', error)
    return {
      username: '',
      repositories: 0,
      followers: 0,
      contributions: 0
    }
  }
}

// LeetCode API (GraphQL endpoint)
export const fetchLeetCodeStats = async (username: string): Promise<LeetCodeStats> => {
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          profile {
            realName
          }
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
    
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      body: JSON.stringify({
        query,
        variables: { username }
      })
    })
    
    if (!response.ok) {
      console.error('LeetCode API response:', response.status, response.statusText)
      throw new Error('Failed to fetch LeetCode data')
    }
    
    const data = await response.json()
    console.log('LeetCode data:', data)
    
    if (data.errors) {
      console.error('LeetCode GraphQL errors:', data.errors)
      throw new Error(data.errors[0]?.message || 'GraphQL error')
    }
    
    const stats = data.data?.matchedUser?.submitStats?.acSubmissionNum || []
    
    let totalSolved = 0, easyCount = 0, mediumCount = 0, hardCount = 0
    
    stats.forEach((stat: any) => {
      totalSolved += stat.count
      if (stat.difficulty === 'Easy') easyCount = stat.count
      else if (stat.difficulty === 'Medium') mediumCount = stat.count
      else if (stat.difficulty === 'Hard') hardCount = stat.count
    })
    
    return {
      username,
      totalSolved,
      easyCount,
      mediumCount,
      hardCount,
      acceptance: 0
    }
  } catch (error) {
    console.error('LeetCode API error:', error)
    return {
      username: '',
      totalSolved: 0,
      easyCount: 0,
      mediumCount: 0,
      hardCount: 0,
      acceptance: 0
    }
  }
}
