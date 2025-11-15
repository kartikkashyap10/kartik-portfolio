'use client'

import { useState, useEffect } from 'react'
import { fetchWakatimeStats, fetchGitHubStats, fetchLeetCodeStats, WakatimeStats, GitHubStats, LeetCodeStats } from '@/app/services/apiServices'

export default function Notes() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [wakatimeData, setWakatimeData] = useState<WakatimeStats | null>(null)
  const [githubData, setGithubData] = useState<GitHubStats | null>(null)
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const wakaKey = process.env.NEXT_PUBLIC_WAKATIME_API_KEY
        const ghUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME
        const lcUsername = process.env.NEXT_PUBLIC_LEETCODE_USERNAME

        console.log('📊 Loading API credentials...')
        console.log('Wakatime API Key:', wakaKey ? '✓ Loaded' : '✗ Missing')
        console.log('GitHub Username:', ghUsername ? `✓ ${ghUsername}` : '✗ Missing')
        console.log('LeetCode Username:', lcUsername ? `✓ ${lcUsername}` : '✗ Missing')

        const [wakaData, ghData, lcData] = await Promise.all([
          wakaKey ? fetchWakatimeStats(wakaKey) : Promise.resolve(null),
          ghUsername ? fetchGitHubStats(ghUsername) : Promise.resolve(null),
          lcUsername ? fetchLeetCodeStats(lcUsername) : Promise.resolve(null)
        ])

        console.log('📈 API Data loaded:', { wakaData, ghData, leetcodeData: lcData })

        setWakatimeData(wakaData)
        setGithubData(ghData)
        setLeetcodeData(lcData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const categories = [
    { name: 'All', count: 13 },
    { name: 'Dev', count: 2 },
    { name: 'DSA', count: 1 },
    { name: 'Achievements', count: 10 }
  ]

  const notes = [
    {
      title: 'Wakatime Coding Stats',
      preview: 'Real-time coding statistics from Wakatime showing daily activity, ...',
      category: 'Dev',
      icon: '📊'
    },
    {
      title: 'GitHub Development Profile',
      preview: 'Comprehensive GitHub statistics showing coding activity, language...',
      category: 'Dev',
      icon: '🐙'
    },
    {
      title: 'LeetCode Problem Solving Stats',
      preview: 'Comprehensive LeetCode statistics showing problem-solving progress, ...',
      category: 'DSA',
      icon: '💻'
    }
  ]

  const filteredNotes = selectedCategory === 'All' 
    ? notes 
    : notes.filter(note => note.category === selectedCategory)

  return (
    <section id="notes" style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      background: '#2d2d30',
      overflow: 'hidden'
    }}>
      {/* Left Sidebar - Folders */}
      <div style={{
        width: '200px',
        background: '#252526',
        borderRight: '1px solid #3c3c3c',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 0',
        overflow: 'auto'
      }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 600,
          color: '#858585',
          padding: '12px 16px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Folders
        </div>
        
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: selectedCategory === category.name ? '#0e639c' : 'transparent',
              border: 'none',
              color: selectedCategory === category.name ? '#ffffff' : '#cccccc',
              padding: '8px 16px',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category.name) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category.name) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <span>{category.name}</span>
            <span style={{ fontSize: '11px', color: '#858585' }}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Middle Section - Notes List */}
      <div style={{
        width: '300px',
        background: '#2d2d30',
        borderRight: '1px solid #3c3c3c',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #3c3c3c'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '4px'
          }}>
            All Notes
          </div>
          <div style={{
            fontSize: '12px',
            color: '#858585'
          }}>
            {filteredNotes.length} notes
          </div>
        </div>

        <div style={{
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '8px'
        }}>
          {filteredNotes.map((note, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(66, 165, 245, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(66, 165, 245, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: '4px'
              }}>
                {note.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#a0a0a0',
                lineHeight: '1.4'
              }}>
                {note.preview}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Content */}
      <div style={{
        flex: 1,
        background: '#1e1e1e',
        overflow: 'auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 16px 0'
          }}>
            Wakatime Coding Stats
          </h2>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#42a5f5'
            }} />
          </div>

          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '24px'
          }}>
            {[
              { label: 'Total Hours', value: wakatimeData ? `${wakatimeData.totalHours}h` : 'Loading...', color: '#2196F3' },
              { label: 'Daily Average', value: wakatimeData ? `${wakatimeData.dailyAverage}h` : 'Loading...', color: '#4CAF50' },
              { label: 'Best Day', value: wakatimeData ? `${wakatimeData.bestDay}h` : 'Loading...', color: '#FF9800' }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: stat.color,
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Yearly Activity */}
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#ffffff',
            margin: '0 0 12px 0'
          }}>
            Yearly Coding Activity
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '12px',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '16px',
            borderRadius: '8px'
          }}>
            {[
              { month: 'Nov 2025', hours: '1h' },
              { month: 'Oct 2025', hours: '5h' },
              { month: 'Sep 2025', hours: '7h' },
              { month: 'Aug 2025', hours: '6h' },
              { month: 'Jul 2025', hours: '25h' },
              { month: 'Jun 2025', hours: '156h' },
              { month: 'May 2025', hours: '116h' },
              { month: 'Apr 2025', hours: '163h' },
              { month: 'Mar 2025', hours: '205h' },
              { month: 'Feb 2025', hours: '184h' },
              { month: 'Jan 2025', hours: '123h' },
              { month: 'Dec 2024', hours: '217h' }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(66, 165, 245, 0.2)',
                  borderRadius: '8px',
                  padding: '12px',
                  textAlign: 'center',
                  border: '1px solid rgba(66, 165, 245, 0.3)'
                }}
              >
                <div style={{
                  fontSize: '11px',
                  color: '#858585',
                  marginBottom: '4px'
                }}>
                  {item.month}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#ffffff'
                }}>
                  {item.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
