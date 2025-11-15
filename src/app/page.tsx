'use client'

import { windowsConfig } from './config/windowsConfig'
import WindowBox from './components/WindowBox'
import { useWindowManager } from './components/useWindowManager'
import DesktopApp from './components/DesktopApp'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Notes from './components/Notes'
import Navbar from './components/Navbar'
import Taskbar from './components/Taskbar'

export default function Home() {
  const { windowStates, activeWindow, openWindow, closeWindow, focusWindow } = useWindowManager()

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    }}>
      {/* Laptop Screen */}
      <div style={{
        width: '98vw',
        height: '98vh',
        borderRadius: '24px',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '12px solid #87888c',
        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.95)',
      }}>
        {/* Camera */}
        <div style={{
          height: '40px',
          textAlign: 'center',
          paddingTop: '12px',
          background: '#000',
        }}>
          <div style={{
            width: '14px',
            height: '14px',
            background: '#1a1a1a',
            borderRadius: '50%',
            margin: '0 auto',
            boxShadow: '0 0 12px rgba(0, 0, 0, 0.8), inset 0 0 8px rgba(0, 0, 0, 0.9)',
          }} />
        </div>

        {/* Container / Screen Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: 'url(/images/home-screen.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
        }}>
          {/* Dark overlay for better content visibility */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.2)',
            pointerEvents: 'none',
          }} />

          {/* Navbar */}
          <Navbar />

          {/* Desktop Icons */}
          <DesktopApp 
            onIconClick={openWindow}
          />

          {/* Render About window if visible */}
          {windowStates.About.isVisible && (
            <WindowBox
              title="About"
              isActive={activeWindow === 'About'}
              onFocus={() => focusWindow('About')}
              onClose={() => closeWindow('About')}
              zIndex={windowStates.About.zIndex}
              defaultX={50}
              defaultY={50}
            >
              <About />
            </WindowBox>
          )}

          {/* Experience Window */}
          {windowStates.Experience.isVisible && (
            <WindowBox
              title="Experience"
              isActive={activeWindow === 'Experience'}
              onFocus={() => focusWindow('Experience')}
              onClose={() => closeWindow('Experience')}
              zIndex={windowStates.Experience.zIndex}
              defaultX={100}
              defaultY={100}
            >
              <Experience />
            </WindowBox>
          )}

          {/* Projects Window */}
          {windowStates.Projects.isVisible && (
            <WindowBox
              title="Projects"
              isActive={activeWindow === 'Projects'}
              onFocus={() => focusWindow('Projects')}
              onClose={() => closeWindow('Projects')}
              zIndex={windowStates.Projects.zIndex}
              defaultX={150}
              defaultY={150}
            >
              <Projects />
            </WindowBox>
          )}

          {/* Notes Window */}
          {windowStates.Notes.isVisible && (
            <WindowBox
              title="Notes - Knowledge Base"
              isActive={activeWindow === 'Notes'}
              onFocus={() => focusWindow('Notes')}
              onClose={() => closeWindow('Notes')}
              zIndex={windowStates.Notes.zIndex}
              defaultX={250}
              defaultY={250}
            >
              <Notes />
            </WindowBox>
          )}

          {/* Taskbar at the bottom */}
          <Taskbar
            windowStates={windowStates}
            activeWindow={activeWindow}
            onWindowClick={focusWindow}
          />
        </div>

        {/* Laptop Base */}
        <div style={{
          height: '32px',
          background: '#1b1b1b',
          borderRadius: '0 0 24px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#babbbf',
          fontSize: '12px',
          fontWeight: 500,
          borderTop: '1px solid #333',
        }}>
          Kartik Kashyap
        </div>
      </div>
    </div>
  )
}