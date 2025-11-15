'use client'

import { useState, useCallback } from 'react'
import { windowsConfig } from '../config/windowsConfig'

interface WindowState {
  isVisible: boolean
  zIndex: number
}

export function useWindowManager() {
  // State 1: Track which window is active (on top)
  const [activeWindow, setActiveWindow] = useState<string>('')

  // State 2: Counter for z-index (starts at 1000)
  const [zIndexCounter, setZIndexCounter] = useState<number>(1000)

  // State 3: Track all windows from config
  const initialWindowStates = windowsConfig.reduce((acc, config) => ({
    ...acc,
    [config.id]: { isVisible: false, zIndex: 1 }
  }), {} as Record<string, WindowState>)

  const [windowStates, setWindowStates] = useState<Record<string, WindowState>>(initialWindowStates)

  const openWindow = useCallback((windowId: string) => {
    // Step 1: Make window visible and set its z-index
    setWindowStates(prev => ({
      ...prev,
      [windowId]: {
        isVisible: true,
        zIndex: zIndexCounter + 1,
      },
    }))

    // Step 2: Increment the counter for next window
    setZIndexCounter(prev => prev + 1)

    // Step 3: Mark this window as active
    setActiveWindow(windowId)
  }, [zIndexCounter])

  const closeWindow = useCallback((windowId: string) => {
    // Hide the window but keep its z-index
    setWindowStates(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],  // Keep existing z-index
        isVisible: false,   // Just hide it
      },
    }))
    
    // Clear active window
    setActiveWindow('')
  }, [])

  const focusWindow = useCallback((windowId: string) => {
    setWindowStates(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        zIndex: zIndexCounter + 1,
      },
    }))
    setZIndexCounter(prev => prev + 1)
    setActiveWindow(windowId)
  }, [zIndexCounter])

  return {
    windowStates,    // Object with all window states
    activeWindow,    // String ID of active window
    openWindow,      // Function to open a window
    closeWindow,     // Function to close a window
    focusWindow,     // Function to focus a window
  }
}