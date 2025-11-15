'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [time, setTime] = useState<string>('00:00:00')

  useEffect(() => {
    // Update time immediately on first render
    setTime(new Date().toLocaleTimeString())

    // Then update every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    // Cleanup: stop timer when component unmounts
    return () => clearInterval(timer)
  }, [])  // Run only once on component mount

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#1b1b1b',
      height: '32px',
      borderRadius: '0.2rem 0.22rem 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#ffffff',
      paddingLeft: '16px',
      paddingRight: '16px',
      alignContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
      userSelect: 'none',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      position: 'relative',
      zIndex: 3000,
    }}>
      {/* Left Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '14px' }}>🍎</span>
        </div>
      </div>

      {/* Right Section - Time */}
      <div style={{
        fontSize: '13px',
        fontWeight: 400,
        color: '#ffffff',
      }}>
        {time}
      </div>
    </div>
  )
}