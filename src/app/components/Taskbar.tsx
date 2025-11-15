import { windowsConfig } from '../config/windowsConfig'

interface TaskbarProps {
  windowStates: Record<string, { isVisible: boolean; zIndex: number }>
  activeWindow: string
  onWindowClick: (windowId: string) => void
}

export default function Taskbar({
  windowStates,
  activeWindow,
  onWindowClick,
}: TaskbarProps) {
  // Get open windows from config
  const openWindows = windowsConfig.filter(config => windowStates[config.id]?.isVisible)

  return (
    <div style={{
      position: 'absolute',
      bottom: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      height: '68px',
      width: 'auto',
      padding: '8px 12px 12px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
      zIndex: 4999,
    }}>
      {/* Display each open window as a button */}
      {openWindows.length > 0 ? (
        openWindows.map(window => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            style={{
              position: 'relative',
              height: '52px',
              width: '52px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '12px',
              padding: 0,
              outline: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              fontSize: '28px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <span style={{ 
              height: '100%', 
              width: '100%', 
              objectFit: 'contain', 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '12px',
              filter: activeWindow === window.id ? 'brightness(1.1)' : 'brightness(1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={window.icon} 
                alt={window.displayName}
                style={{
                  height: '32px',
                  width: '32px',
                  objectFit: 'contain'
                }}
              />
            </span>
            {/* Active indicator dot */}
            {activeWindow === window.id && (
              <div style={{
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '4px',
                background: '#ffffff',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
              }} />
            )}
          </button>
        ))
      ) : null}
    </div>
  )
}
