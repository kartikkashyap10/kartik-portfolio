'use client'

import React, { useRef } from 'react'
import Draggable from 'react-draggable'

interface WindowBoxProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  isActive: boolean
  onFocus: () => void
  zIndex: number
  defaultX?: number
  defaultY?: number
}

export default function WindowBox({ 
  title, 
  children, 
  onClose, 
  isActive,
  onFocus,
  zIndex,
  defaultX = 100,
  defaultY = 100
}: WindowBoxProps) {
  const nodeRef = useRef(null)
  
  return (
    <Draggable 
      nodeRef={nodeRef}
      handle=".window-title-bar"
      defaultPosition={{ x: defaultX, y: defaultY }}
    >
      <div 
        ref={nodeRef}
        className={`window-container ${isActive ? 'active' : ''}`}
        onClick={onFocus}
        style={{
          position: 'absolute',
          width: '1000px',
          height: '700px',
          backgroundColor: '#10162c',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isActive 
            ? '0px 0px 32px 0px rgba(0, 0, 0, 0.50)' 
            : '0 0 10px rgba(0, 0, 0, 0.2)',
          zIndex: zIndex,
          cursor: 'move',
          top: 0,
          left: 0,
          transition: 'all 0.3s ease'
        }}
      >
        {/* Title Bar / Stat Bar */}
        <div className="window-title-bar" style={{
          width: '100%',
          height: '32px',
          background: 'linear-gradient(180deg, rgba(55, 55, 55, 0.95) 0%, rgba(45, 45, 45, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          top: 0,
          left: 0,
          padding: '8px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'move',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          userSelect: 'none',
          flexShrink: 0,
          gap: '8px'
        }}>
          {/* macOS Window Controls */}
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            {/* Red Close Button */}
            <button 
              onClick={onClose}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ff5f56',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                opacity: 0.8,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: '#8b3a3a',
                fontWeight: 'bold'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              title="Close"
            >
              ✕
            </button>
            
            {/* Yellow Minimize Button */}
            <button 
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ffbd2e',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                opacity: 0.8,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              title="Minimize"
            />
            
            {/* Green Maximize Button */}
            <button 
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#27c93f',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                opacity: 0.8,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              title="Maximize"
            />
          </div>

          {/* Title in Center */}
          <span style={{ 
            fontSize: '13px',
            flex: 1,
            textAlign: 'center'
          }}>
            {title}
          </span>

          {/* Empty space to balance layout */}
          <div style={{ width: '60px' }} />
        </div>
        
        {/* Content Area */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          flex: 1,
          width: '100%',
          overflow: 'hidden',
          minHeight: 0,
          color: '#d1d5db',
          fontSize: '14px'
        }}>
          {children}
        </div>
      </div>
    </Draggable>
  )
}