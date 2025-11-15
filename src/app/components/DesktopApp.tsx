'use client'

import { windowsConfig } from '../config/windowsConfig'

interface DesktopAppProps {
  onIconClick: (id: string) => void
}

export default function DesktopApp({ onIconClick }: DesktopAppProps) {
    return (
        <div style={{
            position: 'absolute',
            top: '64px',
            left: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            zIndex: 1,
        }}>
            {windowsConfig.map((config) => (
                <div
                    key={config.id}
                    onDoubleClick={() => onIconClick(config.id)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        userSelect: 'none',
                        transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    {/* Icon Container */}
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '16px',
                        background: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '8px',
                        transition: 'all 0.2s ease',
                    }}>
                        <img
                            src={config.icon}
                            alt={config.displayName}
                            style={{
                                width: '70px',
                                height: '70px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    {/* Label */}
                    <span style={{
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 600,
                        textAlign: 'center',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)',
                        maxWidth: '90px',
                        lineHeight: '1.2',
                    }}>
                        {config.displayName}
                    </span>
                </div>
            ))}
        </div>
    )
}